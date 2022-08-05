import React, { useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const people = [{ name: 'Dress' }, { name: 'Electronics' }, { name: 'Others' }];
export interface Props {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}
export default function Example({query, setQuery, selected, setSelected}: Props) {
  const filteredPeople = people.filter((person) =>
    person.name
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(query.toLowerCase().replace(/\s+/g, ''))
  );
  return (
    <Combobox value={selected} onChange={setSelected}>
      <Combobox.Input
        className='outline-none border border-midnight focus:border-black pl-3 h-12 w-full font-montserrat'
        displayValue={(person: any) => person.name}
        onChange={(event) => setQuery(event.target.value)}
        autoComplete="off"
      />
      <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
        <SelectorIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
      </Combobox.Button>
            {
                query.trim() !== '' && (
        <Combobox.Options className='font-poppins font-[700] outline-none border border-midnight focus:border-black h w-full'>
                    {filteredPeople.length === 0 ? (
                        <div className='relative cursor-default select-none py-2 px-4 text-gray-700'>
              Nothing found.
            </div>
          ) : (
            filteredPeople.map((person) => (
              <Combobox.Option
                key={person.name}
                className={({ active }) =>
                  `outline-none border font-poppins font-[700] border-[#5A5555] pl-3 h-7 flex items-center w-full ${
                    active ? 'bg-midnight text-white' : 'bg-white'
                  }`
                }
                value={person}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {person.name}
                    </span>
                  </>
                )}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
    )
}
    </Combobox>
  );
}

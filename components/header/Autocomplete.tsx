import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
const people = [
  { id: 1, name: 'Some' },
  { id: 2, name: 'Random' },
  {id: 3, name: 'Database'},
  {id: 4, name: 'Fetching'},
  {id: 5, name: 'Here'}
]

export default function Example() {
  const [selected, setSelected] = useState('')
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )
  return (
    <div className="fixed right-36 top-8 w-68">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className={`relative w-full cursor-default overflow-hidden rounded-[5px]  text-left shadow-md sm:text-sm bg-[#fcfdfc]`}>
            <Combobox.Input
            placeholder='Search Anything'
              className="w-full border-none py-2 pl-3 pr-10 text-sm text-gray-900 "
              displayValue={(person:any) => person.name}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options static className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#fcfdfc] py-1 text-base shadow-lg sm:text-sm`}>
              {filteredPeople.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 font-bold text-[10px] uppercase px-4 text-gray-700">
                  No Results.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative transition duration-100 flex items-center rounded-[3px] h-[25px]  ease-in-out cursor-default select-none pl-[35px] py-1 ${
                        active ? 'bg-[#171717] text-white' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate font-bold text-[10px]`}
                        >
                          {person.name.toUpperCase()}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

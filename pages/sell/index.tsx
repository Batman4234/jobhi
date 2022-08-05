import Autocomplete from '@components/autocomplete';
import Button from '@components/button/Button';
import SellEnd from '@components/SellEnd';
import SellUpload from '@components/SellUpload';
import SignIndex from '@components/sign';
import Template from '@components/sign/template';
import { styled } from '@stitches/react'
import React, { useState } from 'react';
const GridDiv = styled('div', {
  gridTemplateColumns: "repeat(10, auto)",
  '@media screen and (max-width: 600px)': {
  gridTemplateColumns: "repeat(5, auto)",
  }
})
const Sell = () => {
  const [state, setState] = useState<number>(0);
  interface Product {
    name: string;
    price: string | number;
    material: string;
    color: string;
  }
  interface Options {
    value: string;
    label: string;
  }
  const options: Options[] = [
    {
      value: 'Electronics',
      label: '',
    },
  ];
  const [product, setProduct] = useState<Product>({} as Product);
  const [query, setQuery] = useState<string>('');
  const [selected, setSelected] = useState<string>('');
  const [files, setFiles] = useState<FileList>();
  interface SizeValue {
    name: string;
    value: boolean;
  };
  const [grid, setGrid] = useState([{
    name: 'xs',
    value: false
  },
  {
    name: 'sm',
    value: false
  },
  {
    name: 'md',
    value: false
  },
  {
    name: 'lg',
    value: false
  },
  {
    name: 'xl',
    value: false
  },
  {
    name:'2xl',
    value: false
  },
  {
    name: '3xl',
    value: false
  },
  {
    name: '4xl',
    value: false
  },
  {
    name: '5xl',
    value: false
  },
  {
    name: '6xl',
    value: false
  }
])
  return (
    <>
      <SignIndex
        title='Start Selling'
        containerClassName={`${state === 0 ? 'flex' : 'hidden'}`}
        onClick={() => setState(state + 1)}
      />
      <Template
        question='What is your product name?'
        value={product.name}
        containerClassName={`${state === 1 ? 'block' : 'hidden'}`}
        onChange={(e:any) => setProduct({ 
          ...product,
            name: (e.target as HTMLInputElement).value,
         })}
        href={(e) => {
          e.preventDefault();
          if ((product.name?.trim().length as number) > 1) {
            setState(state + 1);
          }
        }}
        previous={() => setState(state - 1)}
      />
      <Template
        question='What is your product price?'
        value={product.price}
        type={'number'}
        optional='In USD'
        containerClassName={`${state === 2 ? 'block' : 'hidden'}`}
        onChange={(e) =>    setProduct({
          ...product,
            price: (e.target as HTMLInputElement).value,})
        }
        href={(e) => {
          e.preventDefault();
          var reg = RegExp(/^-?\d*\.?\d*$/);
          if (reg.test(product.price as string)) {
            setState(state + 1);
          }
        }}
        previous={() => setState(state - 1)}
      />
          <form className={`h-[70%] w-full absolute left-0 right-0 justify-center items-center flex-col gap-4 ${state === 3 ? 'flex' : 'hidden'}`}>
      <h5 className='font-poppins font-[700] text-3xl flex gap-2'>Enter The Category Of Your Product</h5>
      <div className="w-[77.5%] md:w-[59%] ">
      <Autocomplete query={query} setQuery={setQuery} selected={selected} setSelected={setSelected}/>
      </div>
      <div className="flex gap-6">    
      <Button  height={30} width={140} hover={false} onClick={() => {
        setState(state - 1)
      }}>Previous</Button>
      <Button height={30} width={140} on={true} fontWeight={600} onClick={(e) => {
        e.preventDefault();
        if (selected !== '') {
          setState(state + 1)
        }
      }} type="submit" >Next</Button>
      </div>
    </form>
          <form className={`h-[70%] w-full absolute left-0 right-0 justify-center items-center flex-col gap-4 ${state === 4 ? 'flex' : 'hidden'}`}>
      <h5 className='font-poppins font-[700] text-3xl text-center flex gap-2'>Choose the available sizes for your product</h5>
      <GridDiv
                className='grid gap-3 self-center lg:justify-start'
                aria-label='Size grid'
              >
                {
                  grid.map((item:any) => {
return (
  <Button
          key={item.name}
          height={50}
          width={50}
          mobileHeight={50}
          className={'py-2'}
          on={item.value}
          hover={false}
        onClick={() => {
          const updatedArray:any = grid.map((Aitem) => {
            const isItemIWantToUpdate = Aitem.name == item.name;
            if (isItemIWantToUpdate) return {
              ...Aitem, // We spread the item so if there are any other properties in the item, we will copy them over
              name: item.name,
              value: !item.value
            }
            // If the if statement doesnt run, so it's not the item we want to update, return the item so we keep it in the new array
            return Aitem;
          })
          
          // Update the state
          setGrid(updatedArray)
        }}>
          {item.name}
        </Button>
)
                  })
                }
              </GridDiv>
      <div className="flex gap-6">    
      <Button  height={30} width={140} hover={false} onClick={() => {
        setState(state - 1)
      }}>Previous</Button>
      <Button height={30} width={140} on={true} fontWeight={600} onClick={(e) => {
        e.preventDefault();
        const item = grid.filter(item => item.value)
        if (item.length) {
          setState(state + 1)
        }
      }} type="submit" >Next</Button>
      </div>
    </form>
    <Template
        question='What is your product material?'
        value={product.material}
        type={'text'}
        containerClassName={`${state === 5 ? 'block' : 'hidden'}`}
        onChange={(e:any) =>{
        setProduct({
          ...product,
            material: (e.target as HTMLInputElement).value})
        }}
        href={(e) => {
          e.preventDefault();
          if (product.material.trim() !== '') {
            setState(state + 1);
          }
        }}
        previous={() => setState(state - 1)}
      />
    <Template
        question='What is your product color?'
        value={product.color}
        type={'text'}
        containerClassName={`${state === 6? 'block' : 'hidden'}`}
        onChange={(e:any) =>{
        setProduct({
          ...product,
            color: (e.target as HTMLInputElement).value})
        }}
        href={(e) => {
          e.preventDefault();
          if (product.color.trim() !== '') {
            setState(state + 1);
          }
        }}
        previous={() => setState(state - 1)}
      />
      <SellUpload containerClassName={`${state === 7 ? 'flex' : 'hidden' }`} files={files as FileList} onSelect={(e) => {
        setFiles((e.target as HTMLInputElement).files as FileList)
      }}
      href={(e) => {
        e.preventDefault();
        if (files?.length) {
          setState(state + 1);
        }
      }}
      previous={() => setState(state - 1)}
      />
     { state === 8 && (
      <SellEnd product={product} selected={selected} files={files} grid={grid} />
      )}
    </>
  );
};

export default Sell;

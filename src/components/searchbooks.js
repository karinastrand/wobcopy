import React, {useState,useLayoutEffect,useRef} from 'react';
import { Link} from "react-router-dom";
import './searchbooks.css';
import Bookcard from './bookcard.js';
import Books from './books.json';
import Menu from './menu.js'
import {BsSearch} from 'react-icons/bs'
import { BsCart3 } from 'react-icons/bs';
import {IconButton } from 'rsuite';
import "rsuite/dist/rsuite.min.css";

export default function Searchbooks() {

  const [searchVal,setSearchVal]=useState("");
  const [isButtonDisabled,setButtonDisabled]=useState(false);
  const firstUpdate=useRef(true);
  function handleSearchClick(){
   Books.map(selectedBooks)
  }
  useLayoutEffect(()=>
  {
    if(firstUpdate.current)
    {
        let copyCart=JSON.parse(sessionStorage.getItem("Cart"))
        if(copyCart)
        {
         
          setButtonDisabled(false);
        }
        else
        {
          
          setButtonDisabled(true);
         
        }
      firstUpdate.current=false;
      return;
    }
   })

  const selectedBooks=(values)=>{
    if (values.title.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
    || values.type.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
    || values.category.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
    || values.author.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase()))
    return(
      <div className='book' key={values.id}>
      <Bookcard
      id={values.id}
      title={values.title}
      author={values.author}
      type={values.type}
      category={values.category}
      price={values.price}
      src={values.src}
      />

    </div>
    );
    
}


  
  return (
    
   <div>
     <Menu />
      <div>
      <h2 style={{margin:10}}>Search book</h2>
        <div className='booktop'>
        
        <div>
        <input onChange={e=>setSearchVal(e.target.value)}></input>
        <BsSearch onClick={handleSearchClick}/>
        </div>
        <Link to="/showcart" >
        <IconButton icon={<BsCart3 />} 
          disabled={isButtonDisabled}
          appearance='primary'
          
        ></IconButton>
     
        </Link>
        
        </div>
          <div className='bookdisplay'>
          {Books.map(selectedBooks)}
          </div>
      </div>
    </div>
  );
  }


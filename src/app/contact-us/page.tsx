"use client";

import axios from 'axios';
import { useEffect, useState } from 'react'
import { IGetProducts } from '../about/page';

function ContactUs() {

    const [products, setProducts] = useState([]);

  useEffect(() => {
        axios("http://localhost:8000/results").then((result)=> {  
            setProducts(result.data);
        });
    }, [])

  return (
    <div>
        {products.map((item: IGetProducts)=> (
            <div key={item.id} className="bg-slate-400 mb-4">
                <h2>{item.name}</h2>
                <p>{item.overview}</p>
            </div>
        ))}
    </div>
  )
}

export default ContactUs

"use client";

import axios from 'axios';
import { useEffect, useState } from 'react'
import { IGetProducts } from '../about/page';

function ContactUs() {

    const [products, setProducts] = useState([]);

  useEffect(() => {
        axios("https://fakestoreapi.com/products").then((result)=> {

            setProducts(result.data);

        });
    }, [])

  return (
    <div>
        {products.map((item: IGetProducts)=> (
            <div key={item.id} className="bg-slate-400 mb-4">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
  )
}

export default ContactUs

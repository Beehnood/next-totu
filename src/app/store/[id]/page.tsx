import React from 'react'

interface IproductsProps {
  params : Promise<{id:string}>;
  sercheParams: Promise<{}>

}


async function Products(props: IproductsProps) {
 const {id} = await props.params;
  return (
    <div>Products</div>
  )
}

export default Products
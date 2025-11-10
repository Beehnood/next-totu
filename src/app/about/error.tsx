"use client"

import React, { useEffect } from 'react'

function ErrorAbout({error} : {error : Error}) {

    useEffect(()=> {
        console.log(error);
    }, [])
  return (
    <div>Server Error</div>
  )
}

export default ErrorAbout;
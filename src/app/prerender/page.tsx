'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'


export default function Page() {
    const [state, setState] = useState('hello world')
    const caculate = 1000*1000

  return (
    <div className='text-xl'>
        <p>Prerender Page</p>
        <p>{`state: ${state}`}</p>
        <p>{`caculate: ${caculate}`}</p>
    </div>
  )
}

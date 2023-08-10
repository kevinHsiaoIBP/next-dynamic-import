'use client'
import React, { useState } from 'react'

export default function Default() {
  const [ state, setState] = useState(0)

  return (
    <div>
      <span>Component  {state}</span>
      <span className='text-red-500'>pre-rendered!</span>
    </div>
  )
}

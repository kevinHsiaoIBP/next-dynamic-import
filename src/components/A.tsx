'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function A() {

  return (
    <div>Component A - Lazy 123<span className='text-red-500'> pre-rendered!</span></div>
  )
}

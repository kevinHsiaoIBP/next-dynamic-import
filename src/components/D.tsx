'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function D() {

  return (
    <div>Component D - Lazy<span className='text-red-500'> pre-rendered!</span></div>
  )
}

'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function C() {

  return (
    <div>Component C - Lazy<span className='text-red-500'> ssr: false, no-pre-rendered!</span></div>
  )
}

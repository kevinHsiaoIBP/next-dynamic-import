'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function ExampleClient() {
  /**
   * usePathname is a Client Component hook
   * 會找到使用這個元件的 Page 來做判斷
   */
  const pathname = usePathname()

  return (
    <div className='mt-[300px]'>
      <p>pathname: {pathname}</p>
    </div>
  )
}

'use client'
import React, { useState } from 'react'
import Component from '@/components/default'
import dynamic from 'next/dynamic'

// client component
const ComponentA = dynamic(()=> import('@/components/A'))
const ComponentB = dynamic(()=> import('@/components/B'), {
  loading: () => <p>Loading B...</p>,
})
const ComponentC = dynamic(()=> import('@/components/C'), {ssr:false})
const ComponentDelay = dynamic(()=> delayForDemo(import('@/components/D')), {
  loading: () => <p>Loading D...</p>,
})

export default function Page() {
  const [show, setShow] = useState(false)

  return (
    <div className='mt-4 text-lg flex flex-col items-center'>
        <section className='flex flex-col items-start'>
          {/* no dynamic import */}
          <Component/>

          {/* should separate client bundle */}
          <ComponentA/>

          {/* Load on demand, only when/if the condition is met */}
          {show && <ComponentB/>}

          {/* Load only on the client side */}
          <ComponentC />

          {show && <ComponentDelay/>}
        </section>

        <div className='flex flex-col mt-3'>
            show: {JSON.stringify(show)}
          <button className='bg-red-500 text-white rounded-2xl cursor-pointer py-1 px-3' onClick={()=>setShow(!show)}>button</button>
        </div>
    </div>
  )
}

function delayForDemo(promise: any) {
  return new Promise(resolve => {
    setTimeout(resolve, 4000);
  }).then(() => promise);
}
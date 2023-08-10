'use client'
import React, { useState } from 'react'

export default function ClientComponent() {
    const [ state, setState] = useState(0)
  
    return (
    <div>client component state: {state}</div>
  )
}

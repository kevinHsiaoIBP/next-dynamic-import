import React from 'react'
import ClientComponent from './client-component'

export default function ServerSideComponent() {
  return (
    <div>
        Server Component
        <ClientComponent/>
    </div>
  )
}

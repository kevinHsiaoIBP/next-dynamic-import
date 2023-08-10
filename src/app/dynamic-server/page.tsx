import dynamic from 'next/dynamic'

// server component
const ComponentB = dynamic(() => import('@/components/server-component'))

export default function Page() {
  return (
    <div className='text-xl'>
        {/* only the Client Components that are children of the Server Component will be lazy-loaded - not the Server Component itself. */}
        <ComponentB />
    </div>
  )
}

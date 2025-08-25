import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='min-h-[calc(100vh-100px)] flex items-center justify-center flex-col gap-6'>
        <h2 className='text-red-500 text-4xl font-bold'>404 | Not Found</h2>
        <p>Ops! This page dosn't exist. You can request to create this page or back to home.</p>
        <Link href={'/'} className='btn btn-error'>Back To Home</Link>
    </div>
  )
}

"use client"
import React,{useEffect, useState} from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Loading from '@/components/loading'
const page = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])
  if (loading) {
    return <Loading />
  }
  return (
    <>
    <Navbar/>
    <div className='flex bg-[#22302f] flex-col h-[89vh] text-white'>
    <h2 className='text-4xl font-bold text-center my-3'>Play Interactive Games</h2>
    <ul className='w-4/5 mx-auto flex flex-col gap-2 text-2xl '>
      <li>

    <Link href={"/tic-tac-toe"}>Tic Tac Toe</Link>
      </li>
      <li>
    <Link href={"/bingo"}>Bingo</Link>
      </li>
      {/* <li>
    <Link href={"/snake"}>Snake</Link>
      </li> */}
    </ul>
    </div>
    </>
  )
}

export default page

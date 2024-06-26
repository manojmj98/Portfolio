"use client";
import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section';
export default function Header() {
  const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
  return (
    <header className='z-[999] relative flex flex-wrap'>
        <motion.div className='fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-black/[0.3] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
        initial={{y:-100, x:"-50%" , opacity :0}}
        animate={{y:0, x:"-50%",opacity:1}}
        transition={{
          type:'spring',
          duration:2
      }}
        >
        </motion.div>
        <nav className='flex fixed left-1/2 top-[0.5rem] -translate-x-1/2 h-12 py-2 sm:top-[1.75rem] sm:h-[initial] sn:py-0'>
            <ul className='flex flex-wrap w-[22rem] items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-5' >
            {links.map(link => <motion.li className='h-3/4 flex item-center justify-items relative' key={link.hash} initial={{y:-100, opacity :0}}
        animate={{y:0,opacity:1}} transition={{
                        type:'spring',
                        duration:1
                    }}>
                <Link className={clsx('w-full items-center justify-center px-3  hover:text-gray-950 transition',{
                  "text-gray-950":link.name === activeSection
                })}  href={link.hash} onClick={()=>{setActiveSection(link.name);setTimeOfLastClick(Date.now())}}>{link.name}</Link>
                {link.name === activeSection &&(<motion.span layoutId="activeSection" transition={{type:"spring", stiffness:380, damping:30}}className='rounded-full bg-gray-200 absolute inset-0 -z-10 py-3 mb-0.5'></motion.span>)}
                </motion.li>)}
            </ul>
        </nav>
    </header>
  )
}

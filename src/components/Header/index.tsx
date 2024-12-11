"use client"

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { MuseoModerno } from "next/font/google";
import ContactUs, { ContactUsForm } from '../ContactUs'

const navLinks = [
  { label: "Works", href: "/#works" },
  { label: "Services", href: "/#services" },
  { label: "About us", href: "/about-us" },
]

const museoModerno = MuseoModerno({ subsets: ['latin'] });

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileContactUsOpen, setMobileContactUsOpen] = useState(false)

  const onMobileClose = () => {
    setMobileContactUsOpen(false)
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-black scroll-smooth">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between p-6 md:px-8" aria-label="Global">
        <div className="flex md:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <div className="uppercase text-white text-xl md:text-4xl">
              <span className={museoModerno.className}>WONDER LAB</span>
            </div>
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3BottomRightIcon className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {navLinks.map((link, key) => (
            <Link href={link.href} className="text-xl leading-6 text-white" key={key}>
              {link.label}
            </Link>
          ))}
          <ContactUs />
        </div>
      </nav>
      <Dialog className="md:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed !bg-black inset-y-0 right-0 z-10 w-full overflow-y-auto lg:bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between">
              <div className="w-1"></div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={onMobileClose}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-10 w-10" aria-hidden="true" />
              </button>
            </div>
            {mobileContactUsOpen ? (
              <ContactUsForm setIsOpen={setMobileContactUsOpen}/>
            ) : (
              <div className="flex flex-col justify-center h-full">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-[90px] py-6">
                    {navLinks.map((link, key) => (
                      <Link
                        href={link.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-4xl leading-7 text-white hover:bg-gray-50"
                        key={key}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <button className="text-4xl leading-7 text-white" onClick={() => setMobileContactUsOpen(true)}>Contact us</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogPanel >
      </Dialog >
    </header >
  )
}

'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#', current: false },
  { name: 'Products', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-md border-b border-gray-200"
    >
      {({ open }) => (
        <>
          <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              
              <div className="flex items-center space-x-2">
                <img
                  src="/vercel.svg"
                  alt="Company Logo"
                  className="h-8 w-auto"
                />
                <span className="text-gray-900 font-bold text-lg tracking-wide">
                  Unicorn ERP
                </span>
              </div>

  
              <div className="hidden sm:flex space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'text-orange-600 after:block after:h-[2px] after:bg-orange-600 after:rounded-full after:mt-1'
                        : 'text-gray-600 hover:text-orange-600 hover:scale-105 transition-all duration-200',
                      'px-3 py-2 text-sm font-medium relative'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <span className="sr-only">main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden bg-white shadow-md border-t border-gray-200">
            <div className="space-y-1 px-4 pt-2 pb-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

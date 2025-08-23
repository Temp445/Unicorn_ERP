'use client'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useEffect, useMemo } from 'react'
import { jwtDecode } from 'jwt-decode'
import logo from "@/assets/AceLogo.png"
import Image from 'next/image'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type NavigationItem = {
  name: string
  href: string
  onClick?: () => void
}

type DecodedToken = {
  role?: string
  [key: string]: any
}

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userRole, setUserRole] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsAuthenticated(true)
      try {
        const decoded = jwtDecode<DecodedToken>(token)
        if (decoded.role) setUserRole(decoded.role)
      } catch (err) {
        console.error('Failed to decode token:', err)
      }
    } else {
      setIsAuthenticated(false)
      setUserRole(null)
    }
  }, [])

  const handleLogout = (): void => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    setUserRole(null)
    router.push('/login')
  }

  const navigation: NavigationItem[] = useMemo(() => {
    const items: NavigationItem[] = [
      { name: 'About', href: '/about' },
      { name: 'Products', href: '/products' },
      { name: 'Contact Us', href: '/contact' },
    ]

    if (userRole === 'ADMIN') {
      items.push({ name: 'Dashboard', href: '/admin' })
    }

    items.push(
      isAuthenticated
        ? { name: 'Logout', href: '#', onClick: handleLogout }
        : { name: 'Login', href: '/login' }
    )

    return items
  }, [userRole, isAuthenticated])

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-lg border-b border-gray-200">
      {({ open }) => (
        <>
          <div className="mx-auto container px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Image src={logo} alt="Company Logo" className="h-9 md:h-9 w-9" />
                <span className="text-gray-900 font-bold text-base mt-1 tracking-wide">	Unicorn (Bangalore) Pvt. Ltd</span>
              </Link>

              <div className="hidden sm:flex space-x-6">
                {navigation.map((item) => {
                  const isActive = pathname === item.href
                  return item.onClick ? (
                    <button
                      key={item.name}
                      onClick={item.onClick}
                      className={classNames(
                        'relative px-3 py-2 text-sm font-medium transition-all duration-300',
                        'text-gray-800 text-base hover:text-orange-600 hover:scale-105'
                      )}
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        'relative px-3 py-2 text-sm font-medium transition-all duration-300',
                        isActive
                          ? 'text-orange-600 font-semibold after:block after:mt-1 after:h-[2px] after:bg-orange-600 after:rounded-full'
                          : 'text-gray-800  hover:text-orange-600 hover:scale-105'
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>

              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400">
                  <span className="sr-only">Main menu</span>
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-white shadow-md border-t border-gray-200 transition-all duration-300">
            <div className="space-y-1 px-4 pt-2 pb-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return item.onClick ? (
                  <button
                    key={item.name}
                    onClick={item.onClick}
                    className={classNames(
                      'block w-full text-left rounded-md px-3 py-2 text-base font-medium transition-all duration-200',
                      'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                    )}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      'block rounded-md px-3 py-2 text-base font-medium transition-all duration-200',
                      isActive ? 'text-orange-600 font-semibold bg-orange-50' : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                    )}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

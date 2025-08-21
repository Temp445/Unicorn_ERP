'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { InlineWidget } from 'react-calendly'
import axios from 'axios'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const baseCalendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL

export default function DemoClient() {
  const { productPath } = useParams()
  const [calendlyUrl, setCalendlyUrl] = useState('')

  useEffect(() => {
    const fetchProductCalendlyUrl = async () => {
      try {
        const res = await axios.get(`/api/products/product/${productPath}`)
        if (res?.data?.calendlyUrl) {
          setCalendlyUrl(res.data.calendlyUrl)
        }
      } catch (err: any) {
        if (err.response?.status === 404) {
          setCalendlyUrl(baseCalendlyUrl || '')
        } else {
          throw err
        }
      }
    }

    if (productPath) {
      fetchProductCalendlyUrl()
    }
  }, [productPath])

  const widgetUrl = calendlyUrl || baseCalendlyUrl || ''

  return (
    <div>
      <Navbar/>
      <h1 className="mt-10 text-xl md:text-2xl font-bold md:font-extrabold text-center text-shadow-lg/20">
        Book A Free Demo Now!
      </h1>
      <div className="w-full h-screen">
        <InlineWidget url={widgetUrl} styles={{ height: '100%', width: '100%' }} />
      </div>

      <Footer />
    </div>
  )
}

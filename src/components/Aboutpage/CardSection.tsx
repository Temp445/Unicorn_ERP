import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const CardSection = () => {
  return (
    <section className="container mx-auto px-4 pb-16 lg:py-16">
      <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-600/10 via-orange-500/10 to-transparent p-8 md:p-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
             High-Quality <span className="text-orange-500">Auto Turned Parts</span> & Components Maker
            </h3>
            <p className="mt-3 text-gray-700 max-w-2xl">
              We build, design, and optimize high-precision auto components with unmatched quality. Partner with us to enhance your manufacturing efficiency.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-orange-500 text-white font-semibold shadow-lg shadow-orange-500/20 hover:bg-orange-400 transition"
              >
                Explore Products <ArrowRight className="size-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border hover:border-orange-600 text-gray-800 hover:text-gray-900 transition"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="lg:grid grid-cols-2 gap-4 hidden">
            <div className="rounded-lg border border-gray-300 bg-gray-50 p-6 text-center">
              <p className="xl:text-xl font-bold text-gray-900">+91 9710946801</p>
              <p className="text-sm text-gray-500">Phone</p>
            </div>

            <div className="rounded-lg border border-gray-300 bg-gray-50 p-6 w-60 xl:w-auto text-center">
              <p className="xl:text-xl font-bold text-gray-900">unicornpdy@gmail.com</p>
              <p className="text-sm text-gray-500">Email Id</p>
            </div>

            <div className="rounded-lg border border-gray-300 bg-gray-50 p-6 text-center">
              <p className="text-xl font-bold text-gray-900">&lt; 2 hrs</p>
              <p className="text-sm text-gray-500">Avg. response</p>
            </div>

            <div className="rounded-lg border border-gray-300 bg-gray-50 p-6 text-center">
              <p className="text-xl font-bold text-gray-900">300+</p>
              <p className="text-sm text-gray-500">Happy clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CardSection

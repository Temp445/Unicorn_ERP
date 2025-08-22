import Link from 'next/link';
import { Facebook, Instagram , Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from "@/assets/AceLogo.png"
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 lg:pr-10 py-12 flex  md:flex-row gap-20 flex-wrap md:justify-evenly">
        <div>
          <div className='flex gap-2'>
            <Image src={logo} alt="Company Logo" className="h-9 md:h-10 -mt-1  w-auto" />
          <h2 className="text-2xl font-bold text-white mb-4">Unicorn ERP</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-sm flex gap-2">
          <MapPin className="w-14 h-10 text-orange-500 -mt-2" />  #306, 2nd Floor, NSIC-Software Technology Business Park, B-24, Guindy Industrial Estate, Ekkatuthangal, Chennai-600032, India
          </p>

        </div>

        <div className='hidden md:block'>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-orange-500 transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 mb-4 max-w-sm">
            
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-orange-500" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-orange-500" />
              <span>info@unicornerp.com</span>
            </li>
          </ul>
          
          <div className="flex gap-4 mt-4">
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <Instagram  className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </div>

          <div className=" w-full md:w-72 h-46 rounded-lg overflow-hidden border border-gray-700 lg:hidden xl:block">
            <iframe
              title="Unicorn ERP Location"
             src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31098.12104086999!2d80.206727!3d13.018781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52669470c1b127%3A0xe3512b101f4ee3ad!2sACE%20Software%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1755083848522!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
      </div>

      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400">
        © 2025 Unicorn ERP. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

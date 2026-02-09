import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Music, Mail, Phone, MapPin, CreditCard } from "lucide-react"
import aj_logo from "../assets/aj_logo.png"

const Footer = () => {
  const footerLinks = {
    support: [
      { name: "Partnership", href: "#" },
      { name: "Landlords & Letting Agents", href: "#" },
      { name: "How to Book Online", href: "#" },
      { name: "FAQ", href: "#" },
    ],
    company: [
      { name: "Cookie Policy", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Contact", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Music, href: "#", label: "TikTok" },
  ]

  return (
    <footer className="bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-6 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10 items-start">
          {/* Brand Column */}
          <div>
            <img src={aj_logo} alt="AJ & J Homes" className="w-20 sm:w-24 mb-4" />
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Your trusted partner for premium rental homes across the UK. Experience comfort, quality, and exceptional service.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-brand-yellow flex-shrink-0 mt-0.5" />
                <span className="text-xs text-white/80">128 City Road, London. EC1V 2NX</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-brand-yellow flex-shrink-0" />
                <a href="tel:+4407308181461" className="text-xs text-white/80 hover:text-brand-yellow transition-colors duration-300">
                  +44 0730 818 1461
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-brand-yellow flex-shrink-0" />
                <a href="mailto:contact@ajandjhomes.com" className="text-xs text-white/80 hover:text-brand-yellow transition-colors duration-300">
                  contact@ajandjhomes.com
                </a>
              </div>
            </div>
          </div>

          {/* Support Column */}
          <div className="mt-0 lg:mt-28">
            <h3 className="text-lg font-bold mb-3 text-brand-yellow">Support</h3>
            <ul className="space-y-1.5">
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-brand-yellow transition-colors duration-300 inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="mt-0 lg:mt-28">
            <h3 className="text-lg font-bold mb-3 text-brand-yellow">Company</h3>
            <ul className="space-y-1.5">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-brand-yellow transition-colors duration-300 inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div className="mt-0 lg:mt-28">
            <h3 className="text-lg font-bold mb-3 text-brand-yellow">Social</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-brand-yellow hover:border-brand-yellow transition-all duration-300 group"
                >
                  <social.icon size={16} className="text-white group-hover:text-brand-green transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-white/60 text-center sm:text-left">
              © 2025 AJ & J Homes. All Rights Reserved.
            </p>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              {/* Mastercard */}
              <div className="bg-white rounded px-1.5 py-0.5 flex items-center justify-center">
                <svg className="h-3" viewBox="0 0 48 32" fill="none">
                  <circle cx="15" cy="16" r="10" fill="#EB001B"/>
                  <circle cx="33" cy="16" r="10" fill="#F79E1B"/>
                  <path d="M24 8.5C21.5 10.5 20 13.5 20 16.5C20 19.5 21.5 22.5 24 24.5C26.5 22.5 28 19.5 28 16.5C28 13.5 26.5 10.5 24 8.5Z" fill="#FF5F00"/>
                </svg>
              </div>
              
              {/* Visa */}
              <div className="bg-white rounded px-1.5 py-0.5 flex items-center justify-center">
                <svg className="h-3" viewBox="0 0 48 16" fill="none">
                  <path d="M18.5 2L14 14H10.5L8 4.5C7.8 3.8 7.6 3.5 7 3.2C6 2.7 4.5 2.2 3 2V1.5H9C10 1.5 10.8 2.2 11 3.2L12.5 10.5L16 1.5H19.5L18.5 2ZM32 10C32 13.5 27.5 13.5 27.5 11.5C27.5 10.5 28.5 10 30 9.8C31 9.7 31.5 9.5 32 9.2V10ZM35.5 14H32.5V12.5C31.5 13.5 30 14 28.5 14C26.5 14 25 12.8 25 10.8C25 8.2 27.5 7.5 30 7.2C31.5 7 32 6.8 32 6.2C32 5.5 31.5 5 30.5 5C29.5 5 28.5 5.5 28.5 6.5H25C25 4 27.5 2.5 30.5 2.5C33.5 2.5 35.5 4 35.5 6.5V14ZM45 14H41.5L41 12.5C40 13.5 38.5 14 37 14C34.5 14 32.5 12 32.5 8.5C32.5 5 34.5 3 37 3C38.5 3 40 3.5 41 4.5V1.5H44.5V14H45ZM41 8.5C41 6.5 40 5.5 38.5 5.5C37 5.5 36 6.5 36 8.5C36 10.5 37 11.5 38.5 11.5C40 11.5 41 10.5 41 8.5ZM24 2.5C21.5 2.5 19.5 4.5 19.5 8C19.5 11.5 21.5 13.5 24 13.5C25.5 13.5 27 13 28 12V9.5C27 10.2 25.8 10.5 24.5 10.5C23 10.5 22 9.8 22 8.5H28.5C28.5 4.5 26.5 2.5 24 2.5ZM24 5C25 5 25.5 5.5 25.5 6.5H22C22 5.5 22.5 5 24 5Z" fill="#1434CB"/>
                </svg>
              </div>

              {/* PayPal */}
              <div className="bg-white rounded px-1.5 py-0.5 flex items-center justify-center">
                <svg className="h-3" viewBox="0 0 48 16" fill="none">
                  <path d="M18 2H13L10 14H13L14 10H16C19 10 21 8 21 5C21 3 20 2 18 2ZM17 7H15L16 4H17C18 4 18 5 18 5C18 6 17 7 17 7Z" fill="#003087"/>
                  <path d="M28 6C28 4 27 3 25 3C23 3 21 4 21 7C21 9 22 10 24 10C25 10 26 10 27 9L27 8C26 8 25 8 24 8C23 8 23 7 23 7H28C28 7 28 6 28 6ZM25 5C26 5 26 6 26 6H23C23 5 24 5 25 5Z" fill="#003087"/>
                  <path d="M35 3L34 7C34 7 33 3 31 3C30 3 29 4 29 4L29 3H27L25 14H27L28 9C28 9 29 10 30 10C32 10 33 8 33 6C33 4 33 3 33 3C33 3 34 3 35 3ZM32 6C32 7 31 8 30 8C29 8 29 7 29 7L29 6C29 5 30 5 30 5C31 5 32 5 32 6Z" fill="#003087"/>
                  <path d="M40 3L39 7C39 7 38 3 36 3C35 3 34 4 34 4L34 3H32L30 14H32L33 9C33 9 34 10 35 10C37 10 38 8 38 6C38 4 38 3 38 3C38 3 39 3 40 3ZM37 6C37 7 36 8 35 8C34 8 34 7 34 7L34 6C34 5 35 5 35 5C36 5 37 5 37 6Z" fill="#009CDE"/>
                  <path d="M45 3L44 7C44 7 43 3 41 3C40 3 39 4 39 4L39 3H37L35 14H37L38 9C38 9 39 10 40 10C42 10 43 8 43 6C43 4 43 3 43 3C43 3 44 3 45 3ZM42 6C42 7 41 8 40 8C39 8 39 7 39 7L39 6C39 5 40 5 40 5C41 5 42 5 42 6Z" fill="#009CDE"/>
                </svg>
              </div>

              {/* Stripe */}
              <div className="bg-white rounded px-1.5 py-0.5 flex items-center justify-center">
                <svg className="h-3" viewBox="0 0 48 20" fill="none">
                  <path d="M24 4C20 4 18 6 18 8C18 11 22 11 22 12C22 13 21 13 20 13C18 13 16 12 16 12V15C16 15 18 16 20 16C24 16 26 14 26 12C26 9 22 9 22 8C22 7 23 7 24 7C26 7 28 8 28 8V5C28 5 26 4 24 4Z" fill="#635BFF"/>
                  <path d="M32 7V4H30V7H29V9H30V13C30 15 31 16 33 16V14C32 14 32 14 32 13V9H33V7H32Z" fill="#635BFF"/>
                  <path d="M38 7C37 7 36 7 35 8V7H33V16H35V11C35 9 36 9 37 9V7C37 7 38 7 38 7Z" fill="#635BFF"/>
                  <path d="M40 7C38 7 36 8 36 11C36 14 38 16 40 16C42 16 44 14 44 11C44 8 42 7 40 7ZM40 14C39 14 38 13 38 11C38 9 39 9 40 9C41 9 42 10 42 11C42 13 41 14 40 14Z" fill="#635BFF"/>
                  <path d="M11 7C10 7 9 7 8 8V4H6V16H8V11C8 9 9 9 10 9V7C10 7 11 7 11 7Z" fill="#635BFF"/>
                  <path d="M14 7C12 7 10 8 10 11C10 14 12 16 14 16C16 16 18 14 18 11C18 8 16 7 14 7ZM14 14C13 14 12 13 12 11C12 9 13 9 14 9C15 9 16 10 16 11C16 13 15 14 14 14Z" fill="#635BFF"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div 
              className="flex items-center mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/chart-e-logo.png"
                alt="Chart-e Logo"
                width={140}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </motion.div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos tu Odoo en un cerebro empresarial con IA. 
              Especialistas en implementación de Odoo con Inteligencia Artificial 
              para lograr altas ventas y menores costos.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">contacto@chart-e.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">Servicio global</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <div className="space-y-2">
              {[
                { name: 'Inicio', href: '#home' },
                { name: 'Nuestra Solución', href: '#solution' },
                { name: 'Tecnología', href: '#technology' },
                { name: 'Resultados', href: '#results' }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('#management')}
                className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                Para Gerencias
              </button>
              <button
                onClick={() => scrollToSection('#process')}
                className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                Proceso de Trabajo
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="block text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Chart-e. Todos los derechos reservados. Especialistas en Odoo + IA.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Transformando negocios con tecnología DeepAgent y Speech-to-Speech
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
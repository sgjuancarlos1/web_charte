'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Mail, Phone, MapPin, Send, Calendar, Target, Zap } from 'lucide-react'
import { toast } from 'sonner'

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    formType: 'demo'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast.success('¡Mensaje enviado exitosamente! Te contactaremos pronto.')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          formType: 'demo'
        })
      } else {
        throw new Error('Error al enviar el formulario')
      }
    } catch (error) {
      toast.error('Error al enviar el mensaje. Por favor intenta nuevamente.')
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactOptions = [
    {
      icon: Calendar,
      title: "Solicita una Demo",
      description: "Ve en vivo cómo funciona la ruta crítica diaria y las capacidades de IA",
      formType: "demo",
      cta: "Agendar Demo"
    },
    {
      icon: Target,
      title: "Consulta Gratuita",
      description: "Análisis personalizado de tu operación actual y oportunidades de mejora",
      formType: "consultation",
      cta: "Solicitar Consulta"
    },
    {
      icon: Mail,
      title: "Contáctanos",
      description: "¿Tienes preguntas específicas? Nuestros expertos te responden",
      formType: "contact",
      cta: "Enviar Mensaje"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para <span className="text-yellow-400">Transformar</span> tu Negocio?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comienza tu viaje hacia altas ventas y menores costos. 
            Te mostramos exactamente cómo en una demo personalizada.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`bg-gray-800 rounded-xl p-8 text-center hover:bg-gray-700 transition-all duration-300 cursor-pointer ${
                formData.formType === option.formType ? 'ring-2 ring-yellow-400' : ''
              }`}
              onClick={() => handleInputChange('formType', option.formType)}
            >
              <option.icon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{option.title}</h3>
              <p className="text-gray-300 mb-4">{option.description}</p>
              <div className="text-yellow-400 font-medium">{option.cta}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {formData.formType === 'demo' && 'Solicita tu Demo Personalizada'}
              {formData.formType === 'consultation' && 'Agenda tu Consulta Gratuita'}
              {formData.formType === 'contact' && 'Envíanos tu Mensaje'}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Tu nombre completo"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="tu@empresa.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Nombre de tu empresa"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cuéntanos sobre tu negocio y objetivos
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Describe tu operación actual, principales desafíos y qué resultados buscas lograr..."
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 text-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="mr-2 h-5 w-5" />
                    {formData.formType === 'demo' && 'Solicitar Demo'}
                    {formData.formType === 'consultation' && 'Agendar Consulta'}
                    {formData.formType === 'contact' && 'Enviar Mensaje'}
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Compromiso:</strong> Te contactaremos en menos de 24 horas. 
                Tu información está completamente segura y nunca será compartida.
              </p>
            </div>
          </motion.div>

          {/* Contact Info & Value Props */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-gray-800 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-yellow-400" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-300">contacto@chart-e.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-yellow-400" />
                  <div>
                    <div className="font-medium">Teléfono</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-400" />
                  <div>
                    <div className="font-medium">Ubicación</div>
                    <div className="text-gray-300">Servicio global - Consultores locales</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Qué Esperar en Nuestra Demo</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Zap className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Ruta Crítica en Vivo</div>
                    <div className="text-blue-100 text-sm">Ver cómo la IA genera acciones diarias específicas para tu industria</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Análisis de ROI Personalizado</div>
                    <div className="text-blue-100 text-sm">Calculamos el impacto específico en tu operación</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Operación con Voz</div>
                    <div className="text-blue-100 text-sm">Demostración en vivo de juntas de consejo con voz</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgency/Value */}
            <div className="bg-yellow-400 rounded-xl p-8 text-gray-900">
              <h3 className="text-xl font-bold mb-4">¿Por Qué Actuar Ahora?</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span>Cada día sin IA predictiva son oportunidades perdidas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span>Competidores ya están adoptando estas tecnologías</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  <span>ROI se ve desde los primeros 90 días</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Settings, Cpu, GraduationCap, Users, TrendingUp, CheckCircle2, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const processSteps = [
    {
      phase: "Fase 1",
      title: "Análisis y Configuración",
      duration: "2-4 semanas",
      icon: Search,
      description: "Auditoría completa de tu operación actual y diseño de la solución personalizada",
      activities: [
        "Auditoría de datos existentes en Odoo o sistemas actuales",
        "Análisis de procesos y flujos de trabajo específicos",
        "Configuración de pipelines de datos y arquitectura de IA",
        "Entrenamiento inicial de modelos predictivos"
      ]
    },
    {
      phase: "Fase 2", 
      title: "Integración Básica",
      duration: "4-6 semanas",
      icon: Settings,
      description: "Implementación core de Odoo + IA con funcionalidades esenciales",
      activities: [
        "Configuración e implementación de módulos Odoo core",
        "Integración de dashboards predictivos básicos",
        "Configuración de alertas automáticas",
        "Migración y limpieza de datos históricos"
      ]
    },
    {
      phase: "Fase 3",
      title: "Capacidades Avanzadas de IA",
      duration: "6-8 semanas", 
      icon: Cpu,
      description: "Implementación de DeepAgent y capacidades de voz empresarial",
      activities: [
        "Implementación de interfaces de voz (Speech-to-Speech)",
        "Configuración de DeepAgent para automatización avanzada",
        "Desarrollo de ruta crítica diaria personalizada",
        "Personalización específica por industria"
      ]
    },
    {
      phase: "Fase 4",
      title: "Capacitación y Go-Live",
      duration: "2-3 semanas",
      icon: GraduationCap,
      description: "Entrenamiento del equipo y lanzamiento con soporte especializado",
      activities: [
        "Capacitación completa del equipo en nuevas capacidades",
        "Go-live supervisado con soporte 24/7",
        "Ajustes finos basados en feedback inicial",
        "Establecimiento de KPIs y métricas de éxito"
      ]
    },
    {
      phase: "Fase 5",
      title: "Optimización Continua",
      duration: "Permanente",
      icon: TrendingUp,
      description: "Mejora continua y expansión de capacidades según resultados",
      activities: [
        "Refinamiento de modelos basado en datos reales",
        "Expansión a módulos adicionales según necesidades",
        "Integración con sistemas externos",
        "Monitoreo continuo de ROI y optimización"
      ]
    }
  ]

  const guarantees = [
    {
      icon: CheckCircle2,
      title: "Transparencia Total",
      description: "Acceso completo al progreso en tiempo real y documentación detallada de cada paso"
    },
    {
      icon: Clock,
      title: "Tiempos Garantizados", 
      description: "Cumplimiento de cronograma o trabajamos gratis hasta completar la fase"
    },
    {
      icon: Users,
      title: "Equipo Dedicado",
      description: "Consultores especializados asignados exclusivamente a tu proyecto"
    }
  ]

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestro <span className="text-blue-600">Proceso de Trabajo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Metodología probada de "proyecto completo" con transparencia total, 
            tiempos garantizados y resultados medibles en cada fase.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full p-3 mr-4">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-blue-600 font-medium">{step.phase}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <div className="ml-auto bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {step.duration}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{step.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Actividades clave:</h4>
                  {step.activities.map((activity, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Cronograma Típico de Implementación
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-blue-200"></div>
            
            <div className="space-y-6">
              {[
                { week: "Semanas 1-4", phase: "Análisis y Configuración", color: "bg-blue-500" },
                { week: "Semanas 5-10", phase: "Integración Básica", color: "bg-green-500" },
                { week: "Semanas 11-18", phase: "Capacidades Avanzadas", color: "bg-purple-500" },
                { week: "Semanas 19-21", phase: "Capacitación y Go-Live", color: "bg-yellow-500" },
                { week: "Semana 22+", phase: "Optimización Continua", color: "bg-indigo-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center text-white text-sm font-bold z-10`}>
                    {index + 1}
                  </div>
                  <div className="ml-6">
                    <div className="font-semibold text-gray-900">{item.week}</div>
                    <div className="text-gray-600">{item.phase}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 card-hover"
            >
              <guarantee.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{guarantee.title}</h3>
              <p className="text-gray-600">{guarantee.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Support & Success */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Soporte y Éxito Garantizado</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            No solo implementamos, te acompañamos hasta que veas los resultados. 
            Nuestro compromiso es tu éxito medible y sostenible.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-blue-100">Soporte durante Go-Live</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">90 días</div>
              <div className="text-blue-100">Garantía de resultados</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">1 año</div>
              <div className="text-blue-100">Soporte incluido</div>
            </div>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center space-x-4">
              <CheckCircle2 className="h-6 w-6 text-green-400" />
              <span>Implementación supervisada paso a paso</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <CheckCircle2 className="h-6 w-6 text-green-400" />
              <span>Capacitación completa incluida</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <CheckCircle2 className="h-6 w-6 text-green-400" />
              <span>Optimización continua basada en resultados</span>
            </div>
          </div>

          <Button
            onClick={() => scrollToSection('#contact')}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 text-lg"
          >
            Quiero Empezar Mi Transformación
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection
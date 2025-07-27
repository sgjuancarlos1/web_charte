'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mic, MessageSquare, Bot, Cpu, Zap, Volume2, Brain, Target, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TechnologySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const deepAgentFeatures = [
    {
      icon: Bot,
      title: "Agente Autónomo General",
      description: "Ejecuta tareas complejas de múltiples pasos con mínima intervención humana"
    },
    {
      icon: Brain,
      title: "Multiple LLMs Integrados",
      description: "GPT-4, Claude, Gemini y modelos propios Dracarys & Smaug trabajando en conjunto"
    },
    {
      icon: BarChart3,
      title: "Análisis Predictivo Avanzado",
      description: "Forecasting, detección de anomalías y modelos de recomendación personalizados"
    }
  ]

  const speechFeatures = [
    {
      icon: Mic,
      title: "Captura Sin Manos",
      description: "Entrada de datos por voz en tiempo real, ideal para operaciones industriales"
    },
    {
      icon: MessageSquare,
      title: "Procesamiento NLU",
      description: "Interpretación inteligente de intenciones y extracción automática de entidades"
    },
    {
      icon: Volume2,
      title: "Retroalimentación Instantánea",
      description: "Confirmaciones y respuestas por voz para validar acciones en el ERP"
    }
  ]

  const criticalPathBenefits = [
    {
      title: "Análisis Matutino Automático",
      description: "Cada día, la IA analiza estado del negocio, tendencias del mercado y recursos disponibles"
    },
    {
      title: "3-5 Acciones Prioritarias",
      description: "Identifica las actividades con mayor impacto para maximizar ventas ese día"
    },
    {
      title: "Oportunidades de Optimización",
      description: "2-3 acciones específicas para reducir costos y mejorar eficiencia"
    },
    {
      title: "Alertas Proactivas",
      description: "Notificaciones sobre riesgos u oportunidades que requieren atención inmediata"
    }
  ]

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tecnología <span className="text-purple-600">DeepAgent</span> & Speech-to-Speech
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La primera implementación empresarial que combina Odoo con DeepAgent de Abacus.AI 
            y capacidades avanzadas de voz para una operación completamente inteligente.
          </p>
        </motion.div>

        {/* DeepAgent Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <Bot className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">DeepAgent: El Cerebro de tu Operación</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Agente de IA autónomo que transforma tu Odoo en un sistema que piensa, 
                aprende y optimiza automáticamente tus procesos de negocio.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {deepAgentFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                >
                  <feature.icon className="h-10 w-10 text-purple-600 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Speech-to-Speech Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <Mic className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Operación con Voz: El Futuro es Hoy</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tecnología Speech-to-Speech que permite operar tu ERP completamente por voz, 
                ideal para entornos industriales y juntas de consejo ejecutivas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {speechFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                >
                  <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Casos de Uso Reales con Voz
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h5 className="font-semibold text-blue-600">Operaciones Industriales:</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      "Confirmar recepción de 500 unidades producto X"
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      "Actualizar inventario almacén norte"
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      "Registrar mantenimiento máquina 03"
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h5 className="font-semibold text-blue-600">Juntas Ejecutivas:</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      "Muéstrame las ventas del trimestre"
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      "¿Cuál es la ruta crítica de hoy?"
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      "Genera reporte para la junta de consejo"
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Critical Path Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl shadow-2xl p-8 text-white"
        >
          <div className="text-center mb-12">
            <Target className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">La "Ruta Crítica Diaria" que Marca la Diferencia</h3>
            <p className="text-blue-100 max-w-3xl mx-auto text-lg">
              Cada mañana, tu sistema de IA analiza todos los datos y te presenta 
              las acciones exactas que debes tomar para maximizar ventas y minimizar costos ese día.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {criticalPathBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">{benefit.title}</h4>
                <p className="text-blue-100">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Example Critical Path */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-black/30 rounded-xl p-6"
          >
            <h4 className="text-xl font-semibold text-yellow-400 mb-4 text-center">
              Ejemplo: Ruta Crítica de Hoy
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-green-500/20 rounded-lg p-3">
                <span className="text-green-300">🎯 Contactar Cliente ABC - Propuesta Adicional</span>
                <span className="text-green-300 text-sm">85% probabilidad conversión</span>
              </div>
              <div className="flex items-center justify-between bg-blue-500/20 rounded-lg p-3">
                <span className="text-blue-300">💰 Ajustar precio Producto X (+15% margen)</span>
                <span className="text-blue-300 text-sm">Momento óptimo detectado</span>
              </div>
              <div className="flex items-center justify-between bg-yellow-500/20 rounded-lg p-3">
                <span className="text-yellow-300">⚠️ Revisar inventario Almacén Norte</span>
                <span className="text-yellow-300 text-sm">Riesgo sobrestock</span>
              </div>
              <div className="flex items-center justify-between bg-purple-500/20 rounded-lg p-3">
                <span className="text-purple-300">💡 Tendencia emergente Sector W</span>
                <span className="text-purple-300 text-sm">Oportunidad nueva</span>
              </div>
            </div>
          </motion.div>

          <div className="text-center mt-8">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3"
            >
              Quiero Mi Ruta Crítica Diaria
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnologySection
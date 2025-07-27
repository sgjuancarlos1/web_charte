'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BarChart3, PieChart, TrendingUp, Target, Mic, Monitor, Calendar, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const ManagementSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const dashboardFeatures = [
    {
      icon: BarChart3,
      title: "Métricas en Tiempo Real",
      description: "KPIs actualizados automáticamente con alertas proactivas",
      metrics: ["Ventas por hora", "Margen por producto", "Conversión de leads"]
    },
    {
      icon: PieChart,
      title: "Análisis de Rentabilidad",
      description: "Visibilidad completa de márgenes por cliente, producto y región",
      metrics: ["ROI por campaña", "Costo por adquisición", "Lifetime value"]
    },
    {
      icon: TrendingUp,
      title: "Predicciones Inteligentes",
      description: "Forecasting avanzado para planificación estratégica",
      metrics: ["Ventas próximos 90 días", "Demanda por producto", "Flujo de caja"]
    }
  ]

  const voiceMeetingFeatures = [
    {
      title: "Juntas de Consejo con Voz",
      description: "Reportes ejecutivos generados y presentados automáticamente por IA",
      example: '"Muéstrame el desempeño del trimestre y las 3 oportunidades principales"'
    },
    {
      title: "Análisis Conversacional",
      description: "Pregunta cualquier cosa sobre tu negocio y obtén respuestas instantáneas",
      example: '"¿Por qué bajaron las ventas en la región norte el mes pasado?"'
    },
    {
      title: "Decisiones Asistidas por IA",
      description: "Recomendaciones estratégicas basadas en análisis profundo de datos",
      example: '"¿Cuál es la mejor estrategia para aumentar ventas este trimestre?"'
    }
  ]

  return (
    <section id="management" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Para <span className="text-blue-600">Gerencias</span> que Buscan Resultados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dashboards ejecutivos en tiempo real y juntas de consejo con voz que transforman 
            la forma en que tomas decisiones estratégicas y monitoreas el desempeño.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl shadow-2xl p-8 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">Dashboard Ejecutivo en Tiempo Real</h3>
            
            {/* Simulated Dashboard */}
            <div className="bg-white rounded-xl p-6 text-gray-900">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">+32%</div>
                  <div className="text-sm text-gray-600">Ventas vs mes anterior</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">87%</div>
                  <div className="text-sm text-gray-600">Meta trimestral</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600">-15%</div>
                  <div className="text-sm text-gray-600">Reducción costos</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">🎯 Acciones Prioritarias Hoy</h4>
                  <div className="space-y-2">
                    <div className="bg-green-100 rounded-lg p-3 text-sm">
                      <strong>Cliente ABC:</strong> 85% prob. compra adicional - Contactar antes 2pm
                    </div>
                    <div className="bg-blue-100 rounded-lg p-3 text-sm">
                      <strong>Producto X:</strong> Momento óptimo subir precio (+15% margen)
                    </div>
                    <div className="bg-yellow-100 rounded-lg p-3 text-sm">
                      <strong>Inventario:</strong> Riesgo sobrestock - Revisar almacén Norte
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">📊 Insights de IA</h4>
                  <div className="space-y-2">
                    <div className="bg-purple-100 rounded-lg p-3 text-sm">
                      <strong>Tendencia:</strong> Sector W muestra 40% crecimiento
                    </div>
                    <div className="bg-indigo-100 rounded-lg p-3 text-sm">
                      <strong>Predicción:</strong> Demanda Producto Y +25% próxima semana
                    </div>
                    <div className="bg-pink-100 rounded-lg p-3 text-sm">
                      <strong>Alerta:</strong> Competidor bajó precios 8% - Evaluar respuesta
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {dashboardFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 card-hover"
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="space-y-2">
                {feature.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {metric}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Voice Meetings Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-xl p-8"
        >
          <div className="text-center mb-12">
            <Mic className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Juntas de Consejo con Voz: El Futuro de las Reuniones Ejecutivas
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Imagina poder hacer preguntas sobre tu negocio y recibir respuestas inmediatas 
              con análisis profundo, gráficos y recomendaciones estratégicas, todo por voz.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {voiceMeetingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="bg-purple-100 rounded-lg p-3">
                  <p className="text-purple-800 text-sm italic">{feature.example}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Voice Meeting Demo */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Ejemplo de Junta de Consejo con Voz
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white rounded-full p-2 flex-shrink-0">
                  <Mic className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-blue-800">"¿Cómo está el desempeño de ventas este trimestre?"</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 text-white rounded-full p-2 flex-shrink-0">
                  <Monitor className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="bg-purple-50 rounded-lg p-3">
                    <p className="text-purple-800 font-medium">Respuesta automática de IA:</p>
                    <p className="text-gray-700 mt-2">
                      "Las ventas están 32% arriba vs trimestre anterior. Hemos superado la meta en 87%. 
                      Los principales drivers son: Cliente ABC (+150%), Producto X (+45%), y nueva región Sur (+78%). 
                      Recomiendo duplicar inversión en región Sur y contactar 3 prospectos similares a Cliente ABC."
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-500 text-white rounded-full p-2 flex-shrink-0">
                  <BarChart3 className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-green-800">
                      <strong>Automáticamente genera:</strong> Gráficos de tendencias, comparativos por región, 
                      análisis de rentabilidad y plan de acción para próximos 30 días.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Actionable Reports */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gray-900 text-white rounded-xl p-8">
            <FileText className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Reportes Accionables</h3>
            <p className="text-gray-300 mb-6">
              Cada reporte incluye no solo métricas, sino recomendaciones específicas 
              de qué hacer y cuándo hacerlo para maximizar resultados.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Plan de acción semanal personalizado</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Alertas proactivas sobre oportunidades</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Benchmarking automático vs industria</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-600 text-white rounded-xl p-8">
            <Calendar className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-2xl font-bold mb-4">Seguimiento Automático</h3>
            <p className="text-blue-100 mb-6">
              El sistema monitorea automáticamente el progreso de las recomendaciones 
              y ajusta la estrategia según los resultados obtenidos.
            </p>
            <ul className="space-y-2 text-blue-100">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Tracking de implementación de recomendaciones</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Ajuste automático de estrategias</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-2">•</span>
                <span>Medición continua de ROI</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => scrollToSection('#contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
          >
            Quiero Ver una Demo del Dashboard Ejecutivo
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ManagementSection
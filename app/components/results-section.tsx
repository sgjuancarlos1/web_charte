'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingUp, DollarSign, Clock, Users, Award, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ResultsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const successCases = [
    {
      industry: "Manufactura",
      company: "Ardent Mills (Referencia Odoo.com)",
      results: {
        sales: "+15%",
        costs: "-20%",
        efficiency: "+25%"
      },
      description: "Implementación de Odoo + IA para optimización de producción y reducción de retrasos",
      achievements: [
        "20% reducción en retrasos de producción",
        "Predicción precisa de demanda de materias primas",
        "Optimización automática de inventarios"
      ]
    },
    {
      industry: "E-commerce",
      company: "Vinos Cruzados (Referencia Odoo.com)",
      results: {
        sales: "+35%",
        costs: "-15%",
        efficiency: "+40%"
      },
      description: "Transformación digital con Odoo + IA para maximizar ventas online",
      achievements: [
        "35% aumento en ventas online",
        "Recomendaciones personalizadas por IA",
        "Optimización de precios dinámica"
      ]
    },
    {
      industry: "Logística",
      company: "Transworld Logistics (Referencia Odoo.com)",
      results: {
        sales: "+25%",
        costs: "-40%",
        efficiency: "+50%"
      },
      description: "Implementación integral con IA para optimización de rutas y costos operacionales",
      achievements: [
        "40% reducción en costos operacionales",
        "Optimización automática de rutas",
        "Predicción de mantenimiento preventivo"
      ]
    }
  ]

  const transformationBenefits = [
    {
      icon: TrendingUp,
      title: "Crecimiento Acelerado",
      description: "Promedio de 20-50% aumento en ventas en los primeros 6 meses",
      metric: "+35%"
    },
    {
      icon: DollarSign,
      title: "Reducción de Costos",
      description: "Optimización automática que reduce gastos operacionales significativamente",
      metric: "-28%"
    },
    {
      icon: Clock,
      title: "Eficiencia Operacional",
      description: "Automatización inteligente que libera tiempo para actividades estratégicas",
      metric: "+45%"
    },
    {
      icon: Users,
      title: "Satisfacción del Cliente",
      description: "Mejor servicio gracias a predicciones y personalización por IA",
      metric: "+30%"
    }
  ]

  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resultados que <span className="text-green-600">Hablan por Sí Solos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Casos de éxito reales con métricas verificables que demuestran 
            el impacto transformador de Odoo + IA en empresas de diversos sectores.
          </p>
        </motion.div>

        {/* Success Cases */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {successCases.map((case_, index) => (
            <motion.div
              key={case_.company}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 card-hover"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {case_.industry}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{case_.company}</h3>
                <p className="text-gray-600 text-sm">{case_.description}</p>
              </div>

              {/* Results Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{case_.results.sales}</div>
                  <div className="text-xs text-gray-500">Ventas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{case_.results.costs}</div>
                  <div className="text-xs text-gray-500">Costos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{case_.results.efficiency}</div>
                  <div className="text-xs text-gray-500">Eficiencia</div>
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                {case_.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Transformation Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Transformación Operacional Completa
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-gray-900 font-bold text-lg px-3 py-1 rounded-full">
                    {benefit.metric}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-2xl p-8 text-white text-center"
        >
          <Award className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Garantía de Resultados</h3>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Estamos tan seguros de nuestros resultados que ofrecemos garantía: 
            Si no ves mejoras medibles en los primeros 90 días, trabajamos gratis hasta lograrlo.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">90 días</div>
              <div className="text-green-100">Para ver primeros resultados</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">6 meses</div>
              <div className="text-green-100">ROI completo garantizado</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-green-100">Satisfacción garantizada</div>
            </div>
          </div>

          <Button
            onClick={() => scrollToSection('#contact')}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 text-lg"
          >
            Quiero Estos Resultados en Mi Empresa
          </Button>
        </motion.div>

        {/* Before vs After */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-white rounded-2xl shadow-xl p-8"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            El Antes y Después de la Transformación
          </h3>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Before */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-red-600 mb-6 text-center">
                ❌ ANTES: Operación Tradicional
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Decisiones basadas en intuición o datos históricos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Reacción a problemas cuando ya aparecieron</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Oportunidades perdidas por falta de visibilidad</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Costos ocultos no identificados</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Procesos manuales y repetitivos</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-green-600 mb-6 text-center">
                ✅ DESPUÉS: Operación Inteligente
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Decisiones basadas en IA y análisis predictivo</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Prevención proactiva de problemas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Identificación automática de oportunidades</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Optimización automática de costos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Automatización inteligente total</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResultsSection
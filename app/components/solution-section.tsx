'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Settings, Brain, TrendingUp, BarChart3, Zap, Database, Target, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SolutionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const odooFeatures = [
    {
      icon: Settings,
      title: "Implementación Integral",
      description: "Odoo 17, 18, 19 Community y Enterprise configurado específicamente para tu industria"
    },
    {
      icon: Database,
      title: "30+ Módulos Integrados",
      description: "CRM, Ventas, Inventario, Contabilidad, RRHH y más, funcionando como un solo sistema"
    },
    {
      icon: Zap,
      title: "Configuración Inteligente",
      description: "Setup optimizado que aprende de tu negocio y se adapta automáticamente"
    }
  ]

  const aiFeatures = [
    {
      icon: Brain,
      title: "Análisis Predictivo",
      description: "ML que predice demanda, identifica oportunidades y optimiza recursos"
    },
    {
      icon: TrendingUp,
      title: "Forecasting Avanzado",
      description: "Predicciones de ventas con 90%+ precisión usando datos históricos y tendencias"
    },
    {
      icon: Target,
      title: "Ruta Crítica Diaria",
      description: "IA que define las 3-5 acciones más importantes para maximizar resultados"
    },
    {
      icon: Lightbulb,
      title: "Insights Automáticos",
      description: "Descubrimiento automático de patrones y oportunidades ocultas en tus datos"
    }
  ]

  return (
    <section id="solution" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestra Solución: <span className="text-blue-600">Odoo + IA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mientras otros implementan Odoo, nosotros lo hacemos inteligente. 
            Transformamos tu ERP en un cerebro empresarial que piensa, predice y optimiza.
          </p>
        </motion.div>

        {/* Comparison: Traditional vs AI-Powered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            La Diferencia que Marca la Diferencia
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional Odoo */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-700 mb-4">📊 Odoo Tradicional</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Reportes históricos que muestran lo que ya pasó</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Decisiones basadas en intuición o experiencia</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Identificación manual de oportunidades</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Reaccionar cuando los problemas ya aparecieron</span>
                </div>
              </div>
            </div>

            {/* Chart-e AI-Powered */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-blue-600 mb-4">🧠 Chart-e: Odoo + IA</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Predicciones precisas de lo que va a pasar</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Ruta crítica diaria basada en datos y IA</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">IA descubre oportunidades automáticamente</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">Prevenir problemas antes que sucedan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              Quiero la Versión Inteligente
            </Button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Odoo Implementation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <Settings className="h-10 w-10 text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Implementación Odoo</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Base sólida con la plataforma ERP más versátil del mundo, 
              configurada específicamente para tu industria y procesos.
            </p>

            <div className="space-y-4">
              {odooFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                >
                  <feature.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI Enhancement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <Brain className="h-10 w-10 text-purple-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">Inteligencia Artificial</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Capa de IA avanzada que transforma datos en insights accionables 
              y decisiones inteligentes para maximizar resultados.
            </p>

            <div className="space-y-4">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white/70 rounded-lg hover:bg-white transition-colors duration-300"
                >
                  <feature.icon className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ROI Calculator Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">¿Cuál sería tu ROI con Chart-e?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Empresas similares a la tuya han logrado aumentos de 20-50% en ventas 
            y reducciones de 25-40% en costos en los primeros 6 meses.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-300">+35%</div>
              <div className="text-blue-100">Promedio Ventas</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-300">-28%</div>
              <div className="text-blue-100">Reducción Costos</div>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-300">6 meses</div>
              <div className="text-blue-100">Para ver resultados</div>
            </div>
          </div>

          <Button
            onClick={() => scrollToSection('#contact')}
            className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3"
          >
            Calcula tu ROI Personalizado
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionSection
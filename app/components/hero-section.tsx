'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, DollarSign, Brain, Zap } from 'lucide-react'

const HeroSection = () => {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const benefits = [
    {
      icon: TrendingUp,
      title: "Altas Ventas",
      description: "Predicción inteligente de oportunidades y optimización de precios"
    },
    {
      icon: DollarSign,
      title: "MENOS Costos", 
      description: "IA que identifica y elimina gastos innecesarios automáticamente"
    },
    {
      icon: Brain,
      title: "Decisiones Inteligentes",
      description: "Ruta crítica diaria basada en análisis predictivo"
    }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6">
              <Zap className="h-5 w-5 text-yellow-300 mr-2" />
              <span className="text-white font-medium">Líder en Odoo + Inteligencia Artificial</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-shadow">
              Transforma tu Odoo en un{' '}
              <span className="text-yellow-300">Cerebro Empresarial</span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Logra <strong className="text-yellow-300">Altas Ventas</strong> y{' '}
              <strong className="text-yellow-300">MENOS Costos</strong> con la ruta crítica diaria exacta 
              para resultados y márgenes totalmente a tu favor
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={() => scrollTo('#contact')}
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Solicita una Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollTo('#solution')}
                variant="outline"
                size="lg"
                className="bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg"
              >
                Descubre la Ruta Crítica
              </Button>
            </div>

            {/* Quick Benefits */}
            <div className="grid sm:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <benefit.icon className="h-8 w-8 text-yellow-300 mx-auto mb-3" />
                  <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-blue-100 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual/Dashboard Preview */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-2xl">
              <div className="bg-gray-900 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">Ruta Crítica Diaria</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-green-500/20 rounded-lg p-3">
                    <span className="text-green-300 text-sm">🎯 Contactar Cliente ABC</span>
                    <span className="text-green-300 text-xs">85% probabilidad</span>
                  </div>
                  <div className="flex items-center justify-between bg-blue-500/20 rounded-lg p-3">
                    <span className="text-blue-300 text-sm">💰 Optimizar inventario Norte</span>
                    <span className="text-blue-300 text-xs">-15% costos</span>
                  </div>
                  <div className="flex items-center justify-between bg-yellow-500/20 rounded-lg p-3">
                    <span className="text-yellow-300 text-sm">⚠️ Alerta: Tendencia Sector W</span>
                    <span className="text-yellow-300 text-xs">Acción requerida</span>
                  </div>
                </div>
              </div>
              
              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-green-300">+35%</div>
                  <div className="text-green-200 text-sm">Ventas</div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-300">-28%</div>
                  <div className="text-blue-200 text-sm">Costos</div>
                </div>
              </div>
            </div>

            {/* Floating brain icon */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg">
              <Brain className="h-6 w-6 text-gray-900" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
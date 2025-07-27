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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Transforma tu{' '}
              <span className="text-yellow-300">Odoo</span>{' '}
              con{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Inteligencia Artificial
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Especialistas en implementación de Odoo con IA - Logra{' '}
              <strong className="text-yellow-300">Altas Ventas</strong> y{' '}
              <strong className="text-yellow-300">MENOS Costos</strong> con la ruta crítica diaria exacta para resultados y márgenes totalmente a tu favor
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={() => scrollTo('#contact')}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 text-lg"
              >
                Comenzar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollTo('#solution')}
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              >
                Ver Solución
              </Button>
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-400 rounded-lg p-3">
                      <Icon className="h-6 w-6 text-black" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-white/80">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '500+', label: 'Empresas Transformadas' },
            { number: '85%', label: 'Reducción de Costos' },
            { number: '300%', label: 'Aumento en Ventas' },
            { number: '24/7', label: 'Soporte IA' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
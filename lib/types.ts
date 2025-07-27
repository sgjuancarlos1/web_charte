export interface Contact {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  service: string
  createdAt: Date
}

export interface ServiceOption {
  value: string
  label: string
}

export const serviceOptions: ServiceOption[] = [
  { value: 'consulting', label: 'Consultoría Estratégica' },
  { value: 'implementation', label: 'Implementación de Soluciones' },
  { value: 'training', label: 'Capacitación y Entrenamiento' },
  { value: 'support', label: 'Soporte Técnico' },
  { value: 'other', label: 'Otro' }
]
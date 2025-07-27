import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, email, company, phone, message, formType } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nombre, email y mensaje son requeridos' },
        { status: 400 }
      )
    }

    // Create contact object
    const contact = {
      id: Date.now().toString(),
      name,
      email,
      company: company || null,
      phone: phone || null,
      message,
      formType: formType || 'contact',
      status: 'new',
      createdAt: new Date().toISOString()
    }

    // Save to JSON file (for demo purposes)
    const filePath = join(process.cwd(), 'contacts.json')
    try {
      await writeFile(filePath, JSON.stringify(contact, null, 2))
    } catch (fileError) {
      console.log('File write error (expected in demo):', fileError)
    }

    return NextResponse.json(
      { 
        message: 'Contacto guardado exitosamente',
        id: contact.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error saving contact:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
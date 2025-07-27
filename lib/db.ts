import { Contact } from './types'

// Simple in-memory storage for demo purposes
// In production, you would use a real database
let contacts: Contact[] = []

export async function saveContact(contact: Omit<Contact, 'id' | 'createdAt'>): Promise<Contact> {
  const newContact: Contact = {
    ...contact,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date()
  }
  
  contacts.push(newContact)
  return newContact
}

export async function getContacts(): Promise<Contact[]> {
  return contacts
}
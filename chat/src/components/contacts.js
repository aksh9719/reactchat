import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/contactsProvider';

export default function contacts() {
  const { contacts } = useContacts()

  return (
    <ListGroup variant="flush">
      {contacts.map(contact => (
        <ListGroup.Item key={contact.id}>
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

import React from 'react'
import sidebar from './sidebar';
import openConversation from './openConversation';
import { useConversations } from '../contexts/conversationsProvider';

export default function dashboard({ id }) {
  const { selectedConversation } = useConversations()

  return (
    <div className="d-flex" style={{ height: '100vh' }}>
      <sidebar id={id} />
      {selectedConversation && <openConversation />}
    </div>
  )
}

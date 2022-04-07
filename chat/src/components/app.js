import React from 'react'
import login from './login'
import useLocalStorage from '../hooks/useLocalStorage';
import dashboard from './dashboard'
import { contactsProvider } from '../contexts/contactsProvider'
import { conversationsProvider } from '../contexts/conversationsProvider';


function app() {
  const [id, setId] = useLocalStorage('id')

  const dashboard = (
   
      <contactsProvider>
        <conversationsProvider id={id}>
          <dashboard id={id} />
        </conversationsProvider>
      </contactsProvider>
    
  )

  return (
    id ? dashboard : <login onIdSubmit={setId} />
  )
}

export default app;

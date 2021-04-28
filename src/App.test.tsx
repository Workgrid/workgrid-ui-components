import React from 'react'
import { mount } from '@cypress/react'

function App() {
  return (
    <div>
      <a>Learn React</a>
    </div>
  )
}

it('renders learn react link', () => {
  mount(<App />)
  cy.get('a').contains('Learn React')
})

import React from 'react'
import LocationDateDeserve from './LocationDateReserve'

describe('<LocationDateDeserve />', () => {

  let testObj: {dateHandler: Function, locationHandler: Function}

  beforeEach(() => {
    testObj = {
      dateHandler: () => {},
      locationHandler: () => {}
    }
    cy.spy(testObj, 'locationHandler').as('locationSpy')
  })

  //Test Rendering Component
  it('should select correct location', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LocationDateDeserve onDateChange={testObj.dateHandler} onLocationChange={testObj.locationHandler} />)
    cy.get("#location").parent().click().get('ul > li[data-value="CNX"]').click()
    cy.get("@locationSpy").should("be.calledOnce")
    cy.get("@locationSpy").should("be.calledWith", "CNX")
  })
})
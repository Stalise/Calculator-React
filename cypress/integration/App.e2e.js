
describe('Calculator App', () => {
   it('should have 2 pages', () => {
      cy.visit('/')
      cy.get('[class*="CalculatorWrapper"]')

      cy.visit('/settings')
      cy.get('[class*="SettingsWrapper"]')
   });

   it('check navigate buttons', () => {
      cy.contains('Calculator App').click()
      cy.get('[class*="CalculatorWrapper"]')

      cy.get('a > p').contains('Main').click()
      cy.get('[class*="CalculatorWrapper"]')

      cy.get('a > p').contains('Settings').click()
      cy.get('[class*="SettingsWrapper"]')
   })
})

describe('Settings component', () => {
   it('theme should change', () => {
      cy.visit('/setting')

      cy.get('a > p').contains('Settings').click()

      cy.get('select').select('Dark')
      cy.get('[class*="LayoutWrapper"]').should('have.css', 'background-color', 'rgb(128, 128, 128)')

      cy.get('a > p').contains('Main').click()

      cy.get('[class*="LayoutWrapper"]').should('have.css', 'background-color', 'rgb(128, 128, 128)')

      cy.get('a > p').contains('Settings').click()

      cy.get('select').select('Light')
      cy.get('[class*="LayoutWrapper"]').should('have.css', 'background-color', 'rgb(215, 231, 252)')
   })
})

describe('Calculator component', () => {

   it('display showed entered values', () => {
      cy.visit('/')

      cy.get('button').contains('1').click()
      cy.get('button').contains('2').click()
      cy.get('button').contains('3').click()
      cy.get('button').contains('4').click()
      cy.get('button').contains('5').click()
      cy.get('button').contains('6').click()
      cy.get('button').contains('7').click()
      cy.get('button').contains('8').click()
      cy.get('button').contains('9').click()
      cy.get('[class*="DisplayText"]').contains('123456789')

      cy.get('button').contains('+').click()
      cy.get('[class*="DisplayText"]').contains('123456789 +')

      cy.get('button').contains('-').click()
      cy.get('[class*="DisplayText"]').contains('123456789 -')

      cy.get('button').contains('/').click()
      cy.get('[class*="DisplayText"]').contains('123456789 /')

      cy.get('button').contains('*').click()
      cy.get('[class*="DisplayText"]').contains('123456789 *')

      cy.get('button').contains('%').click()
      cy.get('[class*="DisplayText"]').contains('123456789 %')
   })

   it('check work CE button', () => {
      cy.get('button').contains('C').click()
      cy.get('[class*="DisplayText"]').contains('0')

      cy.get('button').contains('1').click()
      cy.get('button').contains('2').click()
      cy.get('button').contains('+').click()
      cy.get('button').contains('4').click()
      cy.get('button').contains('3').click()

      cy.get('button').contains('CE').click()
      cy.get('[class*="DisplayText"]').contains('12 +')
      cy.get('button').contains('CE').click()
      cy.get('[class*="DisplayText"]').contains('12')
      cy.get('button').contains('CE').click()
      cy.get('[class*="DisplayText"]').contains('0')
   })

   it('check working arithmetic operations', () => {

   })
})

describe('Calculator component', () => {

   it('"C" button', () => {
      cy.visit('/')

      cy.get('button').contains('1').click()
      cy.get('button').contains('2').click()
      cy.get('button').contains('+').click()
      cy.get('button').contains('4').click()
      cy.get('button').contains('3').click()

      cy.get('button').contains('C').click()
      cy.get('[class*="DisplayText"]').contains('0')
   })

   it('"CE" button', () => {
      cy.visit('/')

      cy.get('button').contains('1').click()
      cy.get('button').contains('2').click()
      cy.get('button').contains('+').click()
      cy.get('button').contains('4').click()
      cy.get('button').contains('3').click()

      cy.get('button').contains('CE').click()
      cy.get('[class*="DisplayText"]').contains('12 +')
      cy.get('button').contains('CE').click()
      cy.get('[class*="DisplayText"]').contains('12')
      cy.get('button').contains('CE').click()
      cy.get('[class*="DisplayText"]').contains('0')
   })

   it('"←" button', () => {
      cy.visit('/')

      cy.get('button').contains('1').click()
      cy.get('button').contains('2').click()
      cy.get('button').contains('+').click()
      cy.get('button').contains('4').click()
      cy.get('button').contains('3').click()

      cy.get('button').contains('←').click()
      cy.get('[class*="DisplayText"]').contains('12 + 4')
      cy.get('button').contains('←').click()
      cy.get('[class*="DisplayText"]').contains('12 +')
      cy.get('button').contains('←').click()
      cy.get('[class*="DisplayText"]').contains('12')
      cy.get('button').contains('←').click()
      cy.get('[class*="DisplayText"]').contains('1')
      cy.get('button').contains('←').click()
      cy.get('[class*="DisplayText"]').contains('0')
   })

   it('"." button', () => {
      cy.visit('/')

      cy.get('button').contains('1').click()
      cy.get('button').contains('.').click()

      cy.get('[class*="DisplayText"]').contains('1.')
   })
})


describe('Calculator component', () => {

   it('check working addition', () => {
      cy.visit('/')

      cy.get('button').contains('1').click()
      cy.get('button').contains('5').click()
      cy.get('button').contains('+').click()
      cy.get('button').contains('5').click()
      cy.get('button').contains('=').click()

      cy.get('[class*="DisplayText"]').contains('20')
      cy.get('button').contains('C').click()
   })

   it('check working subtraction', () => {

      cy.get('button').contains('3').click()
      cy.get('button').contains('7').click()
      cy.get('button').contains('-').click()
      cy.get('button').contains('1').click()
      cy.get('button').contains('3').click()
      cy.get('button').contains('=').click()

      cy.get('[class*="DisplayText"]').contains('24')
      cy.get('button').contains('C').click()
   })

   it('check working division', () => {

      cy.get('button').contains('5').click()
      cy.get('button').contains('0').click()
      cy.get('button').contains('/').click()
      cy.get('button').contains('5').click()
      cy.get('button').contains('=').click()

      cy.get('[class*="DisplayText"]').contains('10')
      cy.get('button').contains('C').click()
   })

   it('check working multiplication', () => {

      cy.get('button').contains('2').click()
      cy.get('button').contains('2').click()
      cy.get('button').contains('*').click()
      cy.get('button').contains('4').click()
      cy.get('button').contains('=').click()

      cy.get('[class*="DisplayText"]').contains('88')
      cy.get('button').contains('C').click()
   })

   it('check working remains', () => {

      cy.get('button').contains('5').click()
      cy.get('button').contains('0').click()
      cy.get('button').contains('%').click()
      cy.get('button').contains('4').click()
      cy.get('button').contains('=').click()

      cy.get('[class*="DisplayText"]').contains('2')
      cy.get('button').contains('C').click()
   })
})


describe('Calculator component', () => {

   it('check working history', () => {
      cy.visit('/')

      cy.get('button').contains('1').click()
      cy.get('button').contains('5').click()
      cy.get('button').contains('+').click()
      cy.get('button').contains('5').click()
      cy.get('button').contains('=').click()
      cy.get('[class*="DisplayText"]').contains('20')

      cy.get('[class*="HistoryCotainer"] > ul > li').contains('15 + 5')

      cy.get('button').contains('*').click()
      cy.get('button').contains('5').click()
      cy.get('button').contains('=').click()
      cy.get('[class*="DisplayText"]').contains('100')

      cy.get('[class*="HistoryCotainer"] > ul > li').contains('20 * 5')

      cy.contains('Settings').click()
      cy.get('[class*="ClearButton"]').click()
      cy.contains('Main').click()

      cy.get('[class*="HistoryCotainer"] > ul > li').should('have.length', '0')
   })

})
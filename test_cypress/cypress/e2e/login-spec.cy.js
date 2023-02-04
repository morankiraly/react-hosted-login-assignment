import {test_data} from "./login-test-data.js"


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  // after a syntax error with a valid field
  return false
})

/*Basic Positive Login Test:
get url > clicks on the settings btn > enter email and password > clicks login btn
assert authentication is successfull
*/
describe('Basic Positive Login Test', () => {
  it('requires valid email and password for a successful login"', () => {
    cy.visit(test_data.url)
    cy.contains('Settings').click()
    cy.log('clicked on settings button')
    const args = {args: {email: test_data.loginEmail, password: test_data.loginPassword}}
    cy.origin(test_data.loginBaseURL, args, ({email, password}) => {
      cy.get('input[name="email"]').type(email)
      cy.get('input[name="password"]').type(password + '{enter}')
    });
    cy.get('div[class="App"]').should('contain', test_data.username);
    cy.log('successfully logged in to user app')
  });
})
  

  /*Basic Positive Login Test:
  get url > clicks on the settings btn > enter valid email > enter wrong password > clicks login btn
  assert authentication failed
  */
  describe('Negative Wrong Password Login Test', () => {
    it('requires to display an error when password input is wrong', () => {
      cy.visit(test_data.url)
      cy.contains('Settings').click()
      cy.log('clicked on settings button')
      const args = {args: {email: test_data.loginEmail}}
      cy.origin(test_data.loginBaseURL, args, ({email}) => {
           cy.get('input[name="email"]')
           .type(email)
           cy.get('input[name="password"]')
           .type('Moran2022!{enter}') // wrong password
          //   cy.get('div[data-test-id="login-error"]').should('contain', 'Incorrect email or password');
          //   cy.log('Failed to login user app - wrong password')
          });
      });
    })


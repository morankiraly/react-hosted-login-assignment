import {test_data} from "./login-test-data.js"
import {Integration} from "../pages/Integration"
import {Login} from "../pages/Login"
const login = new Login();
const integration = new Integration();


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  // after a syntax error with a valid field
  return false
})
 
describe('Basic Login Test', () => {
  beforeEach('navigate to integarated app',() => {
    integration.navigateInApp();
  })
  
  it('requires valid email and password for a successful login"', () => {
    const args = {args: {email: test_data.loginEmail, password: test_data.loginPassword}}
    cy.origin(test_data.loginBaseURL, args, ({email, password}) => {
      //login.login(email,password)
      //login.validateSuccessfulAccess('successfully logged in to user app')
      cy.get('input[name="email"]').type(email)
      cy.get('input[name="password"]').type(password + '{enter}')
    });
    login.validateSuccessfulAccess();
  });

  it('requires to display an error when password input is wrong', () => {
    const args = {args: {email: test_data.loginEmail}}
    cy.origin(test_data.loginBaseURL, args, ({email}) => {
       // login.login(email,'Moran2022!') // wrong password
         cy.get('input[name="email"]').type(email)
         cy.get('input[name="password"]').type('Moran2022!{enter}') // wrong password
        // login.invalidCredentials('Incorrect email or password')
        });
    });
})
  

  
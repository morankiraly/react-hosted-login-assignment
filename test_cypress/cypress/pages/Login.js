import { test_data } from "../e2e/login-test-data";

export class Login {
    login(email, password){
        cy.get('input[name="email"]').type(email)
        cy.get('input[name="password"]').type(password + '{enter}')
        return this;
    }

    invalidCredentials(errorMessage){
        cy.get('div[data-test-id="login-error"]').should('contain', errorMessage);
        cy.log('Failed to login user app - wrong password')
        return this;

    }
    validateSuccessfulAccess(expectedText){
        cy.get('div[class="App"]').should('contain', test_data.username);
        cy.log(expectedText)
        return this;
    }
    
}
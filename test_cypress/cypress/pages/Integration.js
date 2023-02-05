import { test_data } from "../e2e/login-test-data";

export class Integration {
    navigateInApp(){
        cy.visit(test_data.url);
        cy.contains('Settings').click()
        cy.log('clicked on settings button')
    };
};
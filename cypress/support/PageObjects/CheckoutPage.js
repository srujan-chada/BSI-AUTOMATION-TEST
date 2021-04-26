class CheckoutPage {
    
    getCheckoutButton() {
        return cy.get('.cart_navigation > .button > span');
    }
    
    getTermsandConditions(){
        cy.get('[type="checkbox"]').check();
    }
    
}
export default CheckoutPage
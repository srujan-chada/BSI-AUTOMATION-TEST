class BillingPage {
   
    getCheque() {
        return cy.get('.cheque');
    }
    
    getBankWire() {
        return cy.get('.bankwire');
    }
    
    
}
export default BillingPage
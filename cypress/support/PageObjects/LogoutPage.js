class LogoutPage {
   
    getLogout() {
        return cy.get('.logout');
    }   
   getPageHeading(){
       return cy.get('.page-heading');
   }    
}
export default LogoutPage
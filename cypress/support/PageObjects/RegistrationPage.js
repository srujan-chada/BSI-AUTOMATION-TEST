class RegistrationPage {
    
    getGender(){
        return cy.get('#id_gender1');
    }
    
    getFirstName(){
        return cy.get('#customer_firstname');
    }
    
    getLastName(){
        return cy.get('#customer_lastname');
    }

    getPassword(){
        return cy.get('#passwd');
    }

    getAddress1(){
        return cy.get('#address1');
    }

    getCity(){
        return cy.get('#city');
    }

    getState(){
        return cy.get('#id_state');
    }

    getPostCode(){
        return cy.get('#postcode');
    }

    getMobile(){
        return cy.get('#phone_mobile');
    }

    getRegister(){
        return cy.get('#submitAccount');
    }

    getPageHeading(){
        return cy.get('.page-heading');
    
    }

}
export default RegistrationPage
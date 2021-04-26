class SignInPage {

    getSignInLink(){
        return cy.get('.login');
    }

    getEmail(){
        return cy.get('input#email');
    }
    
    getPassword(){
        return cy.get('input#passwd');
    }
    
    getSignInButton(){
        return cy.get('#SubmitLogin');
    }

    getCreateEmail(){
        return cy.get('input#email_create');
    }

    getCreateAccountButton(){
        return cy.get('#SubmitCreate');
    }
}
export default SignInPage
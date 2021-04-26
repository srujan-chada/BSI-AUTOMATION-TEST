
import CheckoutPage from '../support/PageObjects/CheckoutPage';
import BillingPage from '../support/PageObjects/BillingPage';
import RegistrationPage from '../support/PageObjects/RegistrationPage';
import SignInPage from '../support/PageObjects/SignInPage';
import ProductPage from '../support/PageObjects/ProductPage';
import LogoutPage from '../support/PageObjects/LogoutPage';

const faker = require('faker');
const Logout = new LogoutPage();

describe('User registration', () => {

  const randomEmail = faker.internet.email();
  

  before(function(){
    cy.fixture('UserDetails').then((data) =>
    {
        this.data=data 
    })
 })
  after(function() {
    // runs once after all tests in the block
    Logout.getLogout().click();
    Logout.getPageHeading().contains('Authentication');
  })
    
    it('User registers and Buys a product', function() {

        //cy.visit(Cypress.env('url'));
        cy.visit('');
        const SignIn = new SignInPage();
        const Checkout = new CheckoutPage();
        const Billing = new BillingPage();
        const Registration = new RegistrationPage();
        const Product = new ProductPage();

        
       SignIn.getSignInLink().click();
       SignIn.getCreateEmail().type(randomEmail);
       SignIn.getCreateAccountButton().click();
       //Fills the registration form
       Registration.getFirstName().type(this.data.firstname);
       Registration.getLastName().type(this.data.lastname);
       Registration.getPassword().type(this.data.pass);
       Registration.getAddress1().type(this.data.address1);
       Registration.getCity().type(this.data.city);
       Registration.getState().select(this.data.state);
       Registration.getPostCode().type(this.data.postcode);
       Registration.getMobile().type(this.data.mobile);
       Registration.getRegister().click();
       cy.wait(1000);
       Registration.getPageHeading().contains('My account'); 
        //user navigated to Tshirts page 
        Product.getTshirts().click();
        Product.getProductsBlock().should('be.visible');
        Product.getAddToCart().eq(1).click();
        Product.getBasketLayer().contains('Product successfully added to your shopping cart').should('be.visible');
        Product.getBasketCheckoutButton().click();
        Checkout.getCheckoutButton().click();
        Checkout.getCheckoutButton().click();
        //Checkout.getTermsandConditions().check();
        Checkout.getTermsandConditions();
        Checkout.getCheckoutButton().click();
        Billing.getBankWire().click();
        Checkout.getCheckoutButton().click();
        cy.contains('Your order on My Store is complete.').should('be.visible');   
        
        
    });
});


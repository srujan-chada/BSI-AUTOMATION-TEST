import CheckoutPage from '../support/PageObjects/CheckoutPage';
import BillingPage from '../support/PageObjects/BillingPage';
import SignInPage from '../support/PageObjects/SignInPage';
import ProductPage from '../support/PageObjects/ProductPage';
import LogoutPage from '../support/PageObjects/LogoutPage';

const Logout = new LogoutPage();

// eslint-enable-next-line no-undef
describe('Purchase a product using Cheque', () => {
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

      it('Purchase a T-shirt', function() {
        cy.visit('');
        const SignIn = new SignInPage();
        const Checkout = new CheckoutPage();
        const Billing = new BillingPage();
        const Product = new ProductPage();

        //user navigated to Tshirts page 
        Product.getTshirts().click();
        cy.get('ul.sf-menu li').eq(0).click();
        Product.getProductsBlock().should('be.visible');
        Product.getAddToCart().eq(1).click();
        Product.getBasketLayer().contains('Product successfully added to your shopping cart').should('be.visible');
        Product.getBasketCheckoutButton().click();
        Checkout.getCheckoutButton().click();
        SignIn.getEmail().type(this.data.email);
        SignIn.getPassword().type(this.data.pass);
        SignIn.getSignInButton().click();
        
        Checkout.getCheckoutButton().click();
        //Checkout.getTermsandConditions().check();
        Checkout.getTermsandConditions();
        Checkout.getCheckoutButton().click();
        Billing.getCheque().click();
        Checkout.getCheckoutButton().click();
        cy.contains('Your order on My Store is complete.').should('be.visible');   
       
          
       });
  });
  
  
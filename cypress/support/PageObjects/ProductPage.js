class ProductPage {
   
    getTshirts(){
        return cy.get('.sf-menu > :nth-child(2) > .sf-with-ul');
    }
    
    getWomens(){
        return cy.get('ul.sf-menu li').eq(0);
    }

    getProductDetails(){
        return cy.get(':nth-child(2) > .product-container > .right-block > .button-container > .lnk_view > span');
    }

    getSize(){
        return cy.get('#group_1');
    }
    getProductsBlock() {
        return cy.get('.product_list');
    }

    getproductAddToCart(){
        return cy.get('.exclusive > span');
    }

    getAddToCart(){
        return cy.get('.button.ajax_add_to_cart_button');
    }

    getBasketLayer(){
        return cy.get('#layer_cart');
    }

    getBasketCheckoutButton(){
        return cy.get('.button.button-medium').contains('Proceed to checkout');
    }
    
}
export default ProductPage
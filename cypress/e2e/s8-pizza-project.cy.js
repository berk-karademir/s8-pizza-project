describe('Home Page Tests', () => {
  
  it('Loads the home page correctly.', () => {
    
    cy.visit('http://localhost:5173/')
  });

  it("All text in home page are getting viewed correctly.", () => {
    cy.visit('http://localhost:5173/')
    cy.contains('TEKNOLOJiK YEMEKLER').should('be.visible'); 
    cy.contains('KOD ACIKTIRIR').should('be.visible');
      
  })

  it("I'M HUNGRY button viewed correctly. ", () => {
    cy.visit('http://localhost:5173/')
    cy.get('button')
      .contains("I'M HUNGRY") 
      .should('be.visible');
})
});
describe('Order Page Tests', () => {
  
  it("Navigate to order page correctly.", () => {
    cy.visit('http://localhost:5173/'); 
    cy.get('button') 
      .contains("I'M HUNGRY") 
      .click();
    cy.contains('Teknolojik Yemekler').should('be.visible')
    cy.contains('Position Absolute Pizza').should('be.visible')
  });

  it('Place Order button is disabled until size, dough, and crust are selected.', () => {
    cy.visit('http://localhost:5173/'); 
    cy.get('button') 
      .contains("I'M HUNGRY") 
      .click();
    
    cy.get('.place-order-btn').should('be.disabled');
  });

  it('Should enable Place Order button when size, dough, and crust are selected.', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button') 
    .contains("I'M HUNGRY") 
    .click();

    cy.get('input[name="size"][value="Large"]').click();

    cy.get('select[name="dough"]').select('Thin');
   
    cy.get('select[name="crust"]').select('Garlic');

    cy.get('button.place-order-btn').should('not.be.disabled');
  });
})

describe('Total Price Calculation', () => {

  it('Should calculate the total price correctly for 1 pizza, 1 extra topping, 1 extra sauce, and fast delivery. They should cost $ 42.', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button') 
    .contains("I'M HUNGRY") 
    .click();

    cy.get('input[name="size"][value="Small"]').click();

    cy.get('select[name="dough"]').select('Thin');

    cy.get('select[name="crust"]').select('Garlic');

    cy.get('input[name="toppingSelect"][value="Pepperoni"]').click();

    cy.get('input[name="extraSauces"][value="Ketchup"]').click();

    cy.get('input[name="fastDelivery"]').check();

    cy.get('.grand-total').should('have.text', 'Grand Total: $42');
  });

  it('Should calculate the total price correctly for 5 pizzas, 7 extra toppings, 5 extra sauces, and fast delivery. They should cost $ 380.', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button') 
    .contains("I'M HUNGRY") 
    .click();
    
    cy.get('input[name="size"][value="Small"]').click(); 
    cy.get('select[name="dough"]').select('Thin'); 
    cy.get('select[name="crust"]').select('Garlic'); 

    const toppings = ["Pepperoni", "BBQ Chicken", "Corn", "Garlic", "Pineapple", "Sausage", "Onion"];
    toppings.forEach(topping => {
      cy.get(`input[name="toppingSelect"][value="${topping}"]`).click();
    });

   
    const sauces = ["Ketchup", "Mayonnaise", "Garlic Mayonnaise", "Ranch", "Chili Sauce"];
    sauces.forEach(sauce => {
      cy.get(`input[name="extraSauces"][value="${sauce}"]`).click();
    });

    cy.get('input[name="fastDelivery"]').check();

    cy.get('.plus-btn').click();
    cy.get('.plus-btn').click();
    cy.get('.plus-btn').click();
    cy.get('.plus-btn').click();

    cy.get('.grand-total').should('have.text', 'Grand Total: $380');
  });
});


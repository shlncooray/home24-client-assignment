describe('product list page functionalities', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  // #TODO Improve this test to be more dynamic
  it('should able to create a post', () => {
    cy.visit('http://localhost:3000/products/Lamps');
    cy.get('[data-testId="Stehleuchte Tripod Stabilo"]').click();
    cy.get('div.Toastify').should(
      'have.text',
      'You have added "Stehleuchte Tripod Stabilo" to shopping cart!',
    );
  });
});

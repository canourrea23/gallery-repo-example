describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/')
    cy.get(':nth-child(1) > img').should('be.visible')
    cy.get(':nth-child(2) > img').should('be.visible')
  })
})

describe('Image Carousel Test', () => {
  it('checks image visibility and parent visibility', () => {
    cy.visit('/'); // Replace with your website's URL


    cy.get('.carousel-container').then(imgs => {
      cy.wrap(imgs[0]).should('not.be.visible');
      cy.wrap(imgs[1]).should('be.visible');
      cy.wrap(imgs[2]).should('not.be.visible');
    });
    // Check if carousel container is hidden
    // cy.get('.carousel-container').should('be.hidden');

    // // Check if images are visible
    // cy.get('.carousel-item img').should('be.visible').should('have.length.at.least', 1);
  });
});
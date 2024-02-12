describe('Challenge Q2', () => {
  it('Test register succeed', () => {
    cy.visit('https://preprod.backmarket.fr/register');
    cy.get('[id^="firstName"]').type('Mohamed', { force: true });
    cy.get('[id^="lastName"]').type('Ebarhmatin', { force: true });
    cy.get('[id^="signup-email"]').type('mohamed.ebarhmatin@yahoo.fr', { force: true });
    cy.get('[id^="signup-password"]').type('NnZqaDGMP8ZREyB', { force: true });
    cy.get('[data-qa="signup-submit-button"]').click({ force: true });
  });

  it('Test register failed', () => {
    cy.visit('https://preprod.backmarket.fr/register');
    cy.get('[id^="firstName"]').type('', { force: true });
    cy.get('[id^="lastName"]').type('', { force: true });
    cy.get('[id^="signup-email"]').type('mohamed.fr@yahoo.fr', { force: true });
    cy.get('[id^="signup-password"]').type('```````', { force: true });
    cy.get('[data-qa="signup-submit-button"]').click({ force: true });
  });

  it('Test authentification', () => {
    cy.visit('https://preprod.backmarket.fr/register');
    cy.get('[id^="signin-email"]').type('mohamed.ebarhmatin@yahoo.fr', { force: true });
    cy.get('[id^="signin-password"]').type('NnZqaDGMP8ZREyB', { force: true });
    cy.get('[data-qa="signin-submit-button"]').click({ force: true });
  });
});

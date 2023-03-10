export function get(selector) {
  return cy.get(selector).click();
}

export function forceGet(selector) {
  return cy.get(selector).click({ force: true });
}

export function fillfield(selector, value) {
  return cy.get(selector).clear().type(value).should("have.value", value);
}

export function click(selector, ...args) {
  return cy.get(selector).click(...args);
}

export function select(selector, value) {
  return cy.get(selector).select(value);
}

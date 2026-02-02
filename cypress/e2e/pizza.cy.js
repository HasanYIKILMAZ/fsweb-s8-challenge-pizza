
describe("HomeHeader navigation test", () => {
  beforeEach(() => {
    cy.visit("/"); 
  });

  it("Clicking ACIKTIM button navigates to /order", () => {
    cy.get("button[data-cy='home-order-btn']").click();
    cy.url().should("include", "/order");
  });
});

describe("Order Page E2E Test", () => {
  beforeEach(() => {
    cy.visit("/order");
  });

  it("fills the form, selects extras, and submits order", () => {
    
    cy.get("input[name='size']")
      .check("Orta", { force: true }) // görünmez input
      .should("be.checked");          

    cy.get("select[name='dough']").select("Orta");

    
    const extras = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara"];

    extras.forEach((extra) => {
      cy.contains("label", extra).click({ force: true });
    });

    
    extras.forEach((extra) => {
      cy.contains("label", extra)
        .find("input[type='checkbox']")
        .should("be.checked");
    });

   
    cy.get("textarea[name='note']").type("Hızlı gelsin, lütfen!");

    
    cy.get("button").contains("+").click();

    
    cy.contains("SİPARİŞ VER")
      .should("not.be.disabled")
      .click();

    
    cy.url().should("include", "/success");
  });
});

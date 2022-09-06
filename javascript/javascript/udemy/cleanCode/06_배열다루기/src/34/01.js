/**
 * 배열 요소에 접근하기
 */

function operateTime(inputs, operators, is) {
  inputs[0].split("").forEach((num) => {
    cy.getRandomValues(".digit").contains(num).click();
  });

  inputs[1].split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}

// refactoring_1
function operateTime(inputs, operators, is) {
  const [firstInput, secondInput] = inputs;
  firstInput.split("").forEach((num) => {
    cy.getRandomValues(".digit").contains(num).click();
  });

  secondInput.split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}

// refactoring_2
function operateTime([firstInput, secondInput], operators, is) {
  firstInput.split("").forEach((num) => {
    cy.getRandomValues(".digit").contains(num).click();
  });

  secondInput.split("").forEach((num) => {
    cy.get(".digit").contains(num).click();
  });
}

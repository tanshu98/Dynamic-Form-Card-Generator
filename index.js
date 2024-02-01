// Select the button -

const generateCardButton = document.querySelector("#generate-button");
const resetCardButton = document.querySelector("#reset-button");
const input = document.querySelector("input");
const cardContainer = document.querySelector(".card-container");
const cardContainerID = document.querySelector("#card-container");

// Event listner on Generate Button
generateCardButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (cardContainer.innerHTML) {
    cardContainer.innerHTML = "";
    generateCards();
    input.value = "";
  } else {
    generateCards();
    input.value = "";
  }
});

// Event Listner on Reset Button -
resetCardButton.addEventListener("click", (e) => {
  e.preventDefault();
  cardContainer.innerHTML = "";
});

const generateCards = function () {
  let inputValue = input.value;
  
  for (let i = 0; i < inputValue; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card-class");
    card.setAttribute("backgroundColor", "red");
    card.innerHTML = `Card ${i + 1}`;
    cardContainerID.appendChild(card);
  }
  inputValue = "";
};

// Select the button -

const generateCardButton = document.querySelector("#generate-button");
const resetCardButton = document.querySelector("#reset-button");
const input = document.querySelector("input");
const cardContainer = document.querySelector(".card-container");
const cardContainerID = document.querySelector("#card-container");
let count = 0;
const cardForm = document.querySelector("#card-form");
const closeModal = document.querySelector(".close");

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
  input.value = "";
});

const generateCards = function () {
  let inputValue = input.value;
  for (let i = 0; i < inputValue; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card-class");
    card.setAttribute("id", `id-${i}`);
    card.setAttribute("backgroundColor", "red");
    // card.setAttribute("h4", "Heading-4");
    card.innerHTML = `Card ${i + 1}`;
    
    // Create Para element
    let paraCard = document.createElement("p", "");
    paraCard.style.margin = "10px";
    card.appendChild(paraCard);
    card.style.cursor = "pointer";
    cardContainerID.appendChild(card);
  }
  inputValue = "";
};

cardContainer.addEventListener("click", function (e) {
  // Create ModalContent on click -
  let modalContent = document.createElement("div");
  modalContent.setAttribute("class", "modal-content");
  document.body.appendChild(modalContent);

  let inputContent = document.createElement("input");
  inputContent.setAttribute("type", "text");
  inputContent.setAttribute("placeholder", "Jot down something");
  modalContent.appendChild(inputContent);

  let spanContent = document.createElement("span");
  spanContent.setAttribute("class", "close");
  spanContent.innerHTML = "&times;";
  modalContent.appendChild(spanContent);

  let submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.setAttribute("id", "modal-btn");
  modalContent.appendChild(submitButton);

  // Adding styling to created Modal Content Card

  inputContent.style.outline = "none";
  inputContent.style.border = "none";
  inputContent.style.backgroundColor = "transparent";
  submitButton.style.padding = "10px";

  let dataObj = {
    id: e.target.id,
    data: "",
  };

  // Store data in an object when user clicks on submit button
  submitButton.addEventListener("click", function () {
    dataObj.data = inputContent.value;

    // Storing the modal submitted data in the resp card

    e.target.childNodes[1].innerHTML = dataObj.data;
    modalContent.style.display = "none";
  });

  spanContent.addEventListener("click", function () {
    modalContent.style.display = "none";
  });

  modalContent.style.display = "flex";
});

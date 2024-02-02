// Select the button -

const generateCardButton = document.querySelector("#generate-button");
const resetCardButton = document.querySelector("#reset-button");
const input = document.querySelector("input");
const cardContainer = document.querySelector(".card-container");
const cardContainerID = document.querySelector("#card-container");
let count = 0;
const cardForm = document.querySelector('#card-form');
// const modalContent = document.querySelector('.modal-content');
// console.log(modalContent);
const closeModal = document.querySelector('.close');
console.log(closeModal);


// Event listner on Generate Button
generateCardButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (cardContainer.innerHTML) {
    cardContainer.innerHTML = "";
    generateCards();
    console.log(card);
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
  console.log(inputValue,'inputValue=========>');
  for (let i = 0; i < inputValue; i++) {
    let card = document.createElement("div");
    card.setAttribute("class", "card-class");
    card.setAttribute("id", `id-${i}`);
    card.setAttribute("backgroundColor", "red");
    // card.setAttribute("h4", "Heading-4");
    // card.innerHTML = `Card ${i + 1}`;
    card.innerHTML = `<h4>Card-${i+1}</h4>`;
    card.style.cursor = 'pointer';
    cardContainerID.appendChild(card);
  }
  inputValue = "";
};


cardForm.addEventListener('click', function(e) {
  console.log(e.target.id);
  console.log(e);

  // Create ModalContent on click - 
  let modalContent = document.createElement('div');
  modalContent.setAttribute('class', 'modal-content');
  document.body.appendChild(modalContent);

  let inputContent = document.createElement('input');
  inputContent.setAttribute('type', 'text');
  inputContent.setAttribute('placeholder', 'Jot down something');
  modalContent.appendChild(inputContent);

  let spanContent = document.createElement('span');
  spanContent.setAttribute('class', 'close');
  spanContent.innerHTML = '&times;';
  modalContent.appendChild(spanContent);

  let submitButton = document.createElement('button');
  submitButton.innerHTML = 'Submit';
  submitButton.setAttribute('id', 'modal-btn');
  modalContent.appendChild(submitButton);

  // Adding styling to created Modal Content Card

  inputContent.style.outline = 'none';
  inputContent.style.border = 'none';
  inputContent.style.backgroundColor = 'transparent';
  submitButton.style.padding = '10px';

  let dataObj = {
    id: e.target.id,
    data: ''
  };

  // Logic for adding data in the Modal Card

  console.log(dataObj);

  submitButton.addEventListener('click', function() {
    console.log('clicked inside submit button');
    dataObj.data = inputContent.value;
    console.log('dataObj', dataObj);

    // Storing the data in local storage
    
    localStorage.setItem = dataObj;
  })
  modalContent.style.display = 'flex';
})

// Close the modal - 
closeModal.addEventListener('click', function() {
  modalContent.style.display = 'none';
})
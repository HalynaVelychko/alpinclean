const pricesArray = [10, 20, 30, 40, 50, 60, 70, 80];

document.querySelectorAll(".form-check-input").forEach((element) =>
  element.addEventListener("click", function () {
    let levelDirty = document.querySelector('input[name="radio"]:checked')
      .value;
  })
);

document.querySelector(".btn-calc").addEventListener("click", () => {
  let formControl = document.querySelector(".custom-select").value;
  let priceService = pricesArray[parseInt(formControl) - 1];
  const meterInput = parseFloat(document.querySelector(".form-control").value);
  const startDate = Date.parse(document.querySelector("#start").value);
  const finishDate = Date.parse(document.querySelector("#finish").value);
  const quantityDays = (finishDate - startDate) / 86400000;
  let levelDirty = document.querySelector('input[name="radio"]:checked').value;
  const price = (priceService * quantityDays * meterInput * levelDirty).toFixed(
    1
  );
  resultPrice.innerHTML = `Ваша ціна за обраними параметрами складає ${price} грн`;
});


//Modal windows
const firstModal = document.querySelector('#myModalFirst');
const secondModal = document.querySelector('#myModalSecond');
const thirdModal = document.querySelector('#myModalThird');
const fourthModal = document.querySelector('#myModalFourth');
const fifthModal = document.querySelector('#myModalFifth');
const sixthModal = document.querySelector('#myModalSixth');

const firstBtn = document.querySelector('#first-btn');
const secondBtn = document.querySelector('#second-btn');
const thirdBtn = document.querySelector('#third-btn');
const fourthBtn = document.querySelector('#fourth-btn');
const fifthBtn = document.querySelector('#fifth-btn');
const sixthBtn = document.querySelector('#sixth-btn');

const firstClose = document.querySelector('#closeFirst');
const secondClose = document.querySelector('#closeSecond');
const thirdClose = document.querySelector('#closeThird');
const fourthClose = document.querySelector('#closeFourth');
const fifthClose = document.querySelector('#closeFifth');
const sixthClose = document.querySelector('#closeSixth');

document
    .querySelectorAll('.more-information')
    .forEach(button => button.addEventListener('click', openModaWindow));

function openModaWindow (ev){
  if(firstBtn ===ev.target) {
    firstModal.style.display = "block";
  }
  if(secondBtn ===ev.target) {
    secondModal.style.display = "block";
  }
  if(thirdBtn ===ev.target) {
    thirdModal.style.display = "block";
  }
  if(fourthBtn ===ev.target) {
    fourthModal.style.display = "block";
  }
  if(fifthBtn ===ev.target) {
    fifthModal.style.display = "block";
  }
  if(sixthBtn===ev.target) {
    sixthModal.style.display = "block";
  }
}

document
    .querySelectorAll('.closeBtn')
    .forEach(span => span.addEventListener('click', closeModalWindow));

function closeModalWindow(ev) {
  if(firstClose ===ev.target){
    firstModal.style.display = "none";
  }
  if(secondClose ===ev.target) {
    secondModal.style.display = "none";
  }
  if(thirdClose ===ev.target) {
    thirdModal.style.display = "none";
  }
  if(fourthClose ===ev.target) {
    fourthModal.style.display = "none";
  }
  if(fifthClose ===ev.target) {
    fifthModal.style.display = "none";
  }
  if(sixthClose===ev.target) {
    sixthModal.style.display = "none";
  }
}



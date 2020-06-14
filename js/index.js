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

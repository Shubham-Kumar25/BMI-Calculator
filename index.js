const form = document.querySelector("form");
const result = document.querySelector("#results");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if (
    height == "" ||
    weight == "" ||
    height < 0 ||
    weight < 0 ||
    isNaN(height) ||
    isNaN(weight)
  ) {
    displayResult("Please give valid Height & Weight");
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  const note = getBMIStatus(bmi);

  displayResult(`${bmi} <br /> ${note}`);

  function getBMIStatus(bmi) {
    if (bmi < 18.6) {
      return "You're Underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      return "You're Normal";
    } else {
      return "You're Overweight";
    }
  }
});

function displayResult(message) {
  result.innerHTML = `<span>${message}</span>`;
}

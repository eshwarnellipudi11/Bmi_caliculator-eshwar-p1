let bmiForm = document.querySelector(".bmi-form");
bmiForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;

  const name = form.querySelector("#name").value;
  const weight = Number(form.querySelector("#weight").value);
  const height = Number(form.querySelector("#height").value);

  console.log(name, weight, height);

  //Logic begins
  let heightInMeters = height / 100;
  let bmi = Number((weight / heightInMeters ** 2).toFixed(2));
  console.log("bmi", bmi);

  let result;
  if (bmi < 18.5) {
    console.log("Under Weight");
    result = "Under Weight";
  } else if (bmi >= 18.5 && bmi < 25) {
    console.log("Healthy");
    result = "Healthy";
  } else if (bmi >= 25 && bmi < 30) {
    console.log("Over Weight");
    result = "Over Weight";
  } else {
    console.log("Obse");
    result = "Obse";
  }
  //Logic ends

  form.querySelector(
    "#result"
  ).textContent = `${name.toUpperCase()}, You are ${result}`;
});

document.querySelector("#reset").addEventListener("click", function (e) {
  bmiForm.querySelector("#name").value = "";
  bmiForm.querySelector("#weight").value = "";
  bmiForm.querySelector("#height").value = "";
  bmiForm.querySelector("#result").textContent = "";
});

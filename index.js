let togglePlanElement = document.getElementById("planToggler");
let basicPlanPriceElement = document.getElementById("basicPlanPrice");
let professionalPlanPriceElement = document.getElementById(
  "professionalPlanPrice"
);

let masterPlanPriceElement = document.getElementById("masterPlanPrice");

togglePlanElement.addEventListener("click", (event) => {
  if (!togglePlanElement.checked) {
    basicPlanPriceElement.textContent = "199.99";
    professionalPlanPriceElement.textContent = "249.99";
    masterPlanPriceElement.textContent = "399.99";
  } else {
    basicPlanPriceElement.textContent = "19.99";
    professionalPlanPriceElement.textContent = "24.99";
    masterPlanPriceElement.textContent = "39.99";
  }
});

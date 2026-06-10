const baseInput = document.querySelector("#base");
const portionsInput = document.querySelector("#portions");
const result = document.querySelector("#result");

const filetesPorPorcion = {
  carne: 2,
  pollo: 2,
  berenjena: 3,
};

function updateRecipe() {
  const portions = Number(portionsInput.value);
  const base = baseInput.value;
  const filetes = portions * filetesPorPorcion[base];
  const huevos = Math.max(1, Math.ceil(portions * 0.75));
  const pan = portions * (base === "berenjena" ? 45 : 55);
  const nombre = base === "carne" ? "filetes" : base === "pollo" ? "supremas" : "rodajas";

  result.value = `${portions} porciones: ${filetes} ${nombre}, ${huevos} huevos y ${pan} g de pan rallado.`;
  result.textContent = result.value;
}

baseInput.addEventListener("change", updateRecipe);
portionsInput.addEventListener("input", updateRecipe);
updateRecipe();

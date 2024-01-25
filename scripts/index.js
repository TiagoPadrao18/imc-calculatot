let heightValue = document.getElementById("height");
let weightValue = document.getElementById("weight");
let image = document.getElementById("image-result");
let valueImc = document.getElementById("title-imc")
const slimString = "Slim"
const normalString = "Normal"
const overWeightString = "Overweight"
const obeseString ="Obese";
const monsterString ="Monster";

function calculateImc() {
  const finalHeightValue = heightValue.value * 2;
  const result = weightValue.value / finalHeightValue;
  resultRounded = Math.round(result);
  console.log(resultRounded);
  changeImages(resultRounded,weightValue.value);
}

function changeImages(result,weight) {
  if (result <= 18) {
    image.src = "./resources/magro.png";
    valueImc.innerText = slimString+ " - " + result + "%";

  } else if (result <= 25) {
    image.src = "./resources/normal.png";
    valueImc.innerText = normalString + " - " + result + "%";
  } else if (result <= 30) {
    image.src = "./resources/sobrepeso.png";
    valueImc.innerText = overWeightString + " - " + result + "%";
  } else {
    image.src = "./resources/obeso.png";
    valueImc.innerText = obeseString + " - " + result + "%";
  }

if (weight>150){
    image.src ="./resources/godzilla.png";
    valueImc.innerText =  monsterString + " - " + result + "%";
}

}

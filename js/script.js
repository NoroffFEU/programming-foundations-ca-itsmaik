var ipad = {
  brand: "Apple",
  model: "iPad PRO X",
  inStock: true,
  size:  [17, 20, 25],
  price: ["4000kr", "5500kr", "6500kr"],
  color: ["Black", "Silver", "Nude", "White"],
  
  options: [
  {
  name: "Option 1",
  screensize: 17,
  instock: 15,
  color: "Black" ,
  price: "4000kr" },
  
  {
  name: "Option 2",
  screensize: 20,
  instock: 2,
  color: "Silver",
  price: "5500kr" },
  
  {
  name: "Option 3",
  screensize: 25,
  instock: 11,
  color: "Nude",
  price: "6500kr" },
  {
  name: "Option 4",
  screensize: 20,
  instock: 6,
  color: "White",
  price: "6500kr" }
  ]}
  
console.log(ipad);

document.getElementById("brand").textContent = ipad.brand;
document.getElementById("model").textContent = ipad.model;

function displayColorName(elementID, number){
  var colorBtn = document.getElementById(elementID);
  colorBtn.addEventListener("click", function () {
  document.getElementById("color-opt").textContent = ipad.color[number];
  });  
}

displayColorName("color1", 0);
displayColorName("color2", 1);
displayColorName("color3", 2);
displayColorName("color4", 3);

// How do make this work so that when you select a size, the price on the bottom changes accordingly to the object. 

function displayPrice(option, number){
  var sizeBtn = document.getElementById(option);
  sizeBtn.addEventListener("click", function () {
  document.getElementById("price").textContent = ipad.price[number];
  });  
}

displayPrice("option1", 0);
displayPrice("option2", 1);
displayPrice("option3", 2);

// How do make this work so that when you select a size, the price on the bottom changes accordingly to the object. 

var ipad = {
    name: "iPad Pro",
    brand: "Apple",
    model: "iPad Pro",
    storage: ["32GB", "64GB", "120GB"],
    batteryLife: 100,
    hasSimCard: true,
    apps: [
      {
        name: "Home",
        batteryConsumption: 30,
      },
      {
        name: "Photos",
        batteryConsumption: 50,
      },
      { name: "Contacts", batteryConsumption: 20 },
      {
        name: "Camera",
        batteryConsumption: 30,
      },
      {
        name: "TV",
        batteryConsumption: 30,
      },
      {
        name: "FaceTime",
        batteryConsumption: 70,
      },
  
      {
        name: "Calendar",
        batteryConsumption: 10,
      },
    ],
    openApp: function (app) {
      return ipad.batteryLife - app.batteryConsumption;
    },
  };
  
  var appsDiv = document.querySelector(".apps");
  
  ipad.apps.forEach(function (app) {
    var button = document.createElement("button");
    button.textContent = app.name;
    appsDiv.appendChild(button);
  
    button.addEventListener("click", function () {
      console.log(app);
      var batteryLife = ipad.openApp(app);
      var batterySpan = document.getElementById("battery-life");
      batterySpan.textContent = batteryLife + "%";
    });
  });

document.getElementById("name").innerHTML = ipad.name;
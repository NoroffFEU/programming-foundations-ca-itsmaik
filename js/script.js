var ipad = {
    name: "iPad Pro",
    brand: "Apple",
    model: "iPad Pro",
    storage: ["32GB","64GB", "120GB"],
    batteryLife: 100,
    hasSimCard: true,
    apps: [
        {
            name: "Home",
            batteryConsumption: 30
        },
        {
            name: "Photos",
            batteryConsumption: 50
        },
        {  name: "Contacts",
           batteryConsumption: 20
            
        },
        {
            name: "Camera",
            batteryConsumption: 30
        },
        {
            name: "TV",
            batteryConsumption: 30
        },
        {  
            name: "FaceTime",
            batteryConsumption: 70
        },

        {
            name: "Calendar",
            batteryConsumption: 10
        },
    ],
    openApp: function(app){
        return ipad.batteryLife - ipad.apps[app].batteryConsumption;
    }
}

console.log(ipad.apps[0].name);

var appBtn = document.getElementById("appButton");

appBtn.addEventListener("click", displayBatteryLife);

function displayBatteryLife(){
console.log(appBtn.innerText);
var appName = appBtn.innerText;
 for(var i = 0; i < ipad.apps.length; i++ ) {
    console.log(JSON.stringify(i));
 }

}


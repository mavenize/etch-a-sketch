
const Container = document.getElementById("table");

for(i=0 ; i < 16*16; i++) {
    individualDiv = document.createElement("div");
    individualDiv.setAttribute("class", "tile");;
    Container.appendChild(individualDiv);
}



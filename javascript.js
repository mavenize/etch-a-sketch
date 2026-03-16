
// Button functionality


const Container = document.getElementById("table");

for(i=0 ; i < 16 * 16; i++) {
    individualDiv = document.createElement("div");
    individualDiv.setAttribute("class", "tile");;
    Container.appendChild(individualDiv);
}

const tiles = document.querySelectorAll('.tile');

function hoverIn() {
  this.style.backgroundColor = 'orange';
}

function hoverOut() {
  this.style.backgroundColor = 'beige';
}

tiles.forEach(tile => {
  tile.addEventListener('mouseover', hoverIn);
  tile.addEventListener('mouseout', hoverOut);
});






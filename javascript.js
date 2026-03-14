let containerTable = document.getElementById("table");


for (let i = 0; i < 16*16; i++) {
    let inidividualDiv = document.createElement("div");
    inidividualDiv.setAttribute("class", "tile");
    containerTable.appendChild(inidividualDiv);
}

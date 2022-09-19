function openConfigOverlay(event){
    nameOverlay.style.display="block";
    backdrop.style.display="block";
    targetPlayer = +event.target.dataset.id;
}

function closeConfigOverlay(){
    nameOverlay.style.display="none";
    backdrop.style.display="none";
    noInputError.textContent = "";
    document.getElementById("player-name").value = "";
}

function saveConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("player-name").trim();
    if(name === ""){
        noInputError.textContent = "Empty name not allowed!";
        noInputError.style.color= "red";
        return;
    }
    document.getElementById("player"+targetPlayer).querySelector("h2").textContent = name;
    players[targetPlayer-1].name = name;
    closeConfigOverlay();
}

//graphs

function showImage() {
    const element = document.getElementById("statsImage");
    element.src = "stat1.jpg";
    document.getElementById("data").style.borderColor = "black";
    document.getElementById("test").style.borderColor = "white";

}

document.querySelector("#data").addEventListener("click", showImage);

function showGamesImage() {
    const element = document.getElementById("statsImage");
    element.src = "stat3.jpg";

    document.getElementById("test").style.borderColor = "black";
    document.getElementById("data").style.borderColor = "white";

}

document.querySelector("#test").addEventListener("click", showGamesImage);





//popups

function openPopup(popupName) {
    var popup = document.getElementById(popupName);
    popup.classList.add("show");
}

function closePopup(popupName) {
    var popup = document.getElementById(popupName);
    popup.classList.remove("show");
}

function otherfunction() {
    console.log("blah")
}

function addGoalToList() {
    //to be completed
    console.log("added a goal!!")
}
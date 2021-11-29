
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

popupOpen=false;

function openPopup(popupName) {
    if(!popupOpen){
        var popup = document.getElementById(popupName);
        popup.classList.add("show");
    }
    
    popupOpen=true;
}

function closePopup(popupName) {
    var popup = document.getElementById(popupName);
    popup.classList.remove("show");
    popupOpen=false;

    var selectHours = document.getElementById("selectHours");
    selectHours.innerHTML = "-Select Hours-";

    var selectDay = document.getElementById("selectDay");
    selectDay.innerHTML = "-Select Day-";

    var selectMonth = document.getElementById("selectMonth");
    selectMonth.innerHTML = "-Select Month-";

    var selectYear = document.getElementById("selectYear");
    selectYear.innerHTML = "-Select Year-";

    var selectGame = document.getElementById("selectGame");
    selectGame.innerHTML = "-Select Game-";



    var most = document.getElementById("option1");
    most.style.borderColor = "white";
    var least = document.getElementById("option2");
    least.style.borderColor = "white";

    selected="none";
}

function otherfunction() {
    console.log("blah")
}



function addHoursGoalToList(input) {
    var currentGoals = document.getElementById("current-goals-ul");

    var canBeAdded = false;

    var text = "nothing1";
    const NONE = "none";
    if( ! (selected === NONE)  &&  !((document.getElementById("selectHours").innerHTML) === "-Select Hours-"))  {
        //add the goal
        text = "Play ";
        
        if( selected === "least") {
            text = text + "at least ";
        } else {
            text = text + "at most ";
        }
        text = text + document.getElementById("selectHours").innerHTML + " hours per week"


        //add the goal
        var thing1 = document.createElement("li");
        var thing2 = document.createTextNode(text);
        thing1.appendChild(thing2);

        currentGoals.appendChild(thing1);
        console.log("added a goal!!" + text);

        canBeAdded = true;

    }
    
    if( canBeAdded ){
        closePopup(input);
    }
    
}





function addGameGoalToList(input) {
    var currentGoals = document.getElementById("current-goals-ul");

    var canBeAdded = false;

    var text = "nothing1";
    const NONE = "none";
    if( !((document.getElementById("selectDay").innerHTML) === "-Select Day-") && !((document.getElementById("selectMonth").innerHTML) === "-Select Month-")
          &&  !((document.getElementById("selectYear").innerHTML) === "-Select Year-")  && !((document.getElementById("selectGame").innerHTML) === "-Select Game-")  
          &&    checkDate() )  {
        //add the goal
        text = "Finish ";
        
        
        text = text + document.getElementById("selectGame").innerHTML + " by "
        text = text + document.getElementById("selectMonth").innerHTML + " "
        text = text + document.getElementById("selectDay").innerHTML + ", "
        text = text + document.getElementById("selectYear").innerHTML


        //add the goal
        var thing1 = document.createElement("li");
        var thing2 = document.createTextNode(text);
        thing1.appendChild(thing2);

        currentGoals.appendChild(thing1);
        console.log("added a goal!!" + text);

        canBeAdded = true;

    }
    
    if( canBeAdded ){
        closePopup(input);
    }
    
}


function checkDate() {
    if( ((document.getElementById("selectMonth").innerHTML) === "September") || ((document.getElementById("selectMonth").innerHTML) === "April")
        ||  ((document.getElementById("selectMonth").innerHTML) === "June") || ((document.getElementById("selectMonth").innerHTML) === "November")   ) {
            if( (document.getElementById("selectDay").innerHTML) === "31" ) {
                return false;
            }
        }

    if( (document.getElementById("selectMonth").innerHTML) === "February" ){
        if( ((document.getElementById("selectDay").innerHTML) === "31") || ((document.getElementById("selectDay").innerHTML) === "30") ) {
            return false;
        }
    }




    return true;
}





//dropdowns

function changeHours(numHours) {
    var button = document.getElementById("selectHours");
    button.innerHTML = numHours.innerHTML;
}


function changeDay(day) {
    var button = document.getElementById("selectDay");
    button.innerHTML = day.innerHTML;
}


function changeMonth(month) {
    var button = document.getElementById("selectMonth");
    button.innerHTML = month.innerHTML;
}


function changeYear(year) {
    var button = document.getElementById("selectYear");
    button.innerHTML = year.innerHTML;
}


function changeGame(game) {
    var button = document.getElementById("selectGame");
    button.innerHTML = game.innerHTML;
}





//at most vs at least
var selected="none";

function selectMost() {
    var most = document.getElementById("option1");
    most.style.borderColor = "black";
    var least = document.getElementById("option2");
    least.style.borderColor = "orange";
    selected="most";

}

function selectLeast() {
    var most = document.getElementById("option1");
    most.style.borderColor = "orange";
    var least = document.getElementById("option2");
    least.style.borderColor = "black";
    selected="least";
}
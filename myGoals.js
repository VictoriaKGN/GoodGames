
//graphs - obsolete


/*
function showImage() {
    const element = document.getElementById("stats-image");
    element.src = "stat1.jpg";
    document.getElementById("data").style.borderColor = "black";
    document.getElementById("test").style.borderColor = "white";

}

document.querySelector("#data").addEventListener("click", showImage);



function showGamesImage() {
    const element = document.getElementById("stats-image");
    element.src = "stat3.jpg";

    document.getElementById("test").style.borderColor = "black";
    document.getElementById("data").style.borderColor = "white";

}

document.querySelector("#test").addEventListener("click", showGamesImage);
*/




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

    var selectHours2 = document.getElementById("select-hours");
    selectHours2.innerHTML = "-Select Hours-";

    var selectMins = document.getElementById("select-minutes");
    selectMins.innerHTML = "-Select Minutes-";

    var selectGame2 = document.getElementById("select-game");
    selectGame2.innerHTML = "-Select Game-";

    var selectDay = document.getElementById("select-day");
    selectDay.innerHTML = "-Select Day-";




    document.getElementById("warning1").style.opacity = "0%";
    document.getElementById("warning2").style.opacity = "0%";
    document.getElementById("warning3").style.opacity = "0%";

    var most = document.getElementById("option1");
    most.style.borderColor = "lightgray";
    var least = document.getElementById("option2");
    least.style.borderColor = "lightgray";

    selected="none";


    console.log("closed a popup");
}

function otherfunction() {
    console.log("blah")
}


var y=1;

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
        thing1.id = "" + document.getElementById("selectHours").innerHTML + "-hours-" + y;
        y++;
        //thing1.class = "hours";
        thing1.addEventListener("click", function(){ doStuff(this); } );

        var thing2 = document.createTextNode(text);
        thing1.appendChild(thing2);

        currentGoals.appendChild(thing1);
        console.log("added a goal!!" + text);

        canBeAdded = true;

    } else {
        console.log("gave a warning!!");
        document.getElementById("warning2").style.opacity = "100%";
        console.log( "" + document.getElementById("warning2").style.opacity );
    }
    
    if( canBeAdded ){
        closePopup(input);
    }
    
}



var x=1;

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
        
        
        text = text + document.getElementById("selectGame").innerHTML + " by ";
        text = text + document.getElementById("selectMonth").innerHTML + " ";
        text = text + document.getElementById("selectDay").innerHTML + ", ";
        text = text + document.getElementById("selectYear").innerHTML + "";


        //add the goal
        var thing1 = document.createElement("li");
        //thing1.class = "finish";
        thing1.id = "new-finish-goal-" + x;
        x++;
        thing1.addEventListener("click", function(){ doStuff(this); } );
        
        var thing2 = document.createTextNode(text);
        thing1.appendChild(thing2);

        currentGoals.appendChild(thing1);
        console.log("added a goal!!" + text);

        canBeAdded = true;

    } else {
        console.log("gave a warning!!");
        document.getElementById("warning1").style.opacity = "100%";
        console.log( "" + document.getElementById("warning1").style.opacity );
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
    //other checks?  (leap year?)
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

function changeHours2(numHours) {
    var button = document.getElementById("select-hours");
    button.innerHTML = numHours.innerHTML;
}

function changeMins(numMins) {
    var button = document.getElementById("select-minutes");
    button.innerHTML = numMins.innerHTML;
}

function changeGame2(game) {
    var button = document.getElementById("select-game");
    button.innerHTML = game.innerHTML;
}

function changeDay2(day) {
    var button = document.getElementById("select-day");
    button.innerHTML = day.innerHTML;
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









//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=====================================================================
//GRAPHS
//=====================================================================
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


var myChart;
var myChart2;


//==================
//show graphs
//===============

/*
function showGraph() {
    const element = document.getElementById("stats-image");
    element.src = "stat1.jpg";
    document.getElementById("data").style.borderColor = "black";
    document.getElementById("test").style.borderColor = "white";

}

document.querySelector("#data").addEventListener("click", showImage);
*/
function changeBorderColor() {
    var arr = document.getElementsByTagName("li");
    for( i=0; i< arr.length; i++ ) {
        arr[i].style.borderColor = "lightgray";
    }
}

var zeldaArchived = false;
var hoursGoalArchived = false;

function doStuff(input) {

    if(myChart != null) {
        myChart.destroy();
    }
    if(myChart2 != null) {
        myChart2.destroy();
    }
    
    deactivateButtons();
    changeBorderColor();
    

    if( input.id == "hours" || input == "hours" ) {
        myChart = createHoursChart(StatsHoursWeekData, 'line', "Week", "# of hours", "Hours");
        activateViewByMonth();
        document.getElementById("hours").style.borderColor = "black";
    }
    else if ( input.id == "games" || input == "new" ) {
        myChart = createMonthChart(StatsNewGamesData, 'bar', "Month", "# of new games", "New Games");
        activateViewCompleted();
        document.getElementById("games").style.borderColor = "black";
    }
    else if(input.id == "finish-zelda") {
        myChart = createHoursChart(finishZeldaData, 'line', "Date", "Percent Completed", "Percent Complete");
        //myChart.options.scales.y.max = 100;
        myChart2 = createChart2(finishZeldaPie);
        if(!zeldaArchived) {
            activateArchiveButton()
            activateAddDataButton(false);
        }
        document.getElementById("finish-zelda").style.borderColor = "black";
    }
    else if(input.id =="hours-less-20" || input == "hours-less-20") {
        myChart = createHoursChart(hoursLess20WeekData, 'bar', "Date", "# of hours", "Hours");
        myChart2 = createChart2(hoursLess20WeekPie);
        if(!hoursGoalArchived) {
            activateArchiveButton();
            activateAddDataButton(true);
        }

        document.getElementById("hours-less-20").style.borderColor = "black";
    }
    else if(input.id == "finish-portal") {
        myChart = createHoursChart(finishPortalData, 'line', "Date", "Percent Completed", "Percent Complete");
        //myChart.options.scales.y.max = 100;
        myChart2 = createChart2(finishPortalPie);
        document.getElementById("finish-portal").style.borderColor = "black";
    }
    else if(input.id == "finish-fallout") {
        myChart = createHoursChart(finishFalloutData, 'line', "Date", "Percent Completed", "Percent Complete");
        //myChart.options.scales.y.max = 100;
        myChart2 = createChart2(finishFalloutPie);
        document.getElementById("finish-fallout").style.borderColor = "black";
    }
    else if(input.id == "hours-more-5" || input == "hours-more-5-week-2") {
        myChart = createHoursChart(hoursMore5WeekDataWeek2, 'bar', "Date", "# of hours", "Hours");
        myChart2 = createChart2(hoursMore5WeekPieWeek2);
        activateLeftArrowButton();
        document.getElementById("hours-more-5").style.borderColor = "black";
    }
    else if(input.id == null  && input == "hours-more-5-week-1" ) {
        myChart = createHoursChart(hoursMore5WeekDataWeek1, 'bar', "Date", "# of hours", "Hours");
        myChart2 = createChart2(hoursMore5WeekPieWeek1);
        activateRightArrowButton();
        document.getElementById("hours-more-5").style.borderColor = "black";
    }
    else if(input.id == null && input == "hours-by-month") {
        myChart = createMonthChart(StatsHoursMonthData, 'line', "Month", "# of hours", "Hours");
        activateViewByWeek();
        document.getElementById("hours").style.borderColor = "black";
    }
    else if(input.id == null && input =="completed") {
        myChart = createMonthChart(StatsCompletedGamesData, 'bar', "Month", "# of games completed", "Games Completed");
        activateViewNew();
        document.getElementById("games").style.borderColor = "black";
    }
    else{
        var name = input.id.split("-");
        if( name[1] == "finish") {
            myChart = createHoursChart(gameNewGoalData, 'line', "Date", "Percent Completed", "Percent Complete");
            //myChart.options.scales.y.max = 100;
            myChart2 = createChart2(gameNewGoalPie);
            activateArchiveButton()
            activateAddDataButton(false);
            document.getElementById(input.id).style.borderColor = "black";
        }
        else if( name[1] == "hours") {
            myChart = createHoursChart(hoursNewGoalData, 'bar', "Date", "# of hours", "Hours");
            myChart2 = createChart2(hoursNewGoalPie);
            activateArchiveButton();
            activateAddDataButton(false);
            document.getElementById(input.id).style.borderColor = "black";
        }
    }


}











function activateViewByMonth() {
    document.getElementById("button-1").style.display = "block";
    document.getElementById("button-1").innerHTML = "View Data By Month";
    document.getElementById("button-1").addEventListener("click", viewByMonth );
}
function viewByMonth() {
    doStuff("hours-by-month");
}

function activateViewByWeek() {
    document.getElementById("button-1").style.display = "block";
    document.getElementById("button-1").innerHTML = "View Data By Week";
    document.getElementById("button-1").addEventListener("click", viewByWeek );
}
function viewByWeek() {
    doStuff("hours");
}

function activateViewCompleted() {
    document.getElementById("button-1").style.display = "block";
    document.getElementById("button-1").innerHTML = "View Completed Games Data";
    document.getElementById("button-1").addEventListener("click", viewCompleted );
}
function viewCompleted() {
    doStuff("completed");
}
function activateViewNew() {
    document.getElementById("button-1").style.display = "block";
    document.getElementById("button-1").innerHTML = "View New Games Data";
    document.getElementById("button-1").addEventListener("click", viewNew );
}
function viewNew() {
    doStuff("new");
}

function deactivateButtons() {
    document.getElementById("button-1").style.display = "none";
    document.getElementById("button-2").style.display = "none";
    document.getElementById("left").style.opacity = "15%";
    document.getElementById("right").style.opacity = "15%";
    document.getElementById("button-1").style.opacity = "100%";

    document.getElementById("right").removeEventListener("mouseover", changeRight100 );
    document.getElementById("right").removeEventListener("mouseout", changeRight60 );
    document.getElementById("right").removeEventListener("click", callWeek2 );
    document.getElementById("left").removeEventListener("mouseover", changeLeft100 );
    document.getElementById("left").removeEventListener("mouseout", changeLeft60 );
    document.getElementById("left").removeEventListener("click", callWeek1 );

    document.getElementById("button-1").removeEventListener("click", viewByMonth );
    document.getElementById("button-1").removeEventListener("click", viewByWeek );

    document.getElementById("button-1").removeEventListener("click", viewCompleted );
    document.getElementById("button-1").removeEventListener("click", viewNew );

    document.getElementById("button-2").removeEventListener("click", checkIfWantToArchive );
    document.getElementById("button-1").removeEventListener("click", addData );
}

function activateArchiveButton() {
    document.getElementById("button-2").style.display = "block";
    document.getElementById("button-2").innerHTML = "Archive Goal";
    document.getElementById("button-2").addEventListener("click", checkIfWantToArchive );
}
function checkIfWantToArchive(){
    openPopup("archive-warning");
}
function archiveCurrentGoal() {
    console.log("Running archive goal");
    var arr = document.getElementsByTagName("li");
    let uniqueArr = [...new Set(arr)];
    console.log("We have " + uniqueArr);
    for( i=0; i< arr.length; i++ ) {
        console.log("i is " + i);
        if( uniqueArr[i].style.borderColor == "black" ) {
            console.log("Looking at the arr[i] of " + uniqueArr[i].id);
            //then we delete the node and add it to the archived goals ul
            document.getElementById("archived-list-ul").appendChild(document.getElementById(uniqueArr[i].id));
            if(uniqueArr[i].id == "finish-zelda") {
                zeldaArchived = true;
                console.log("Archived zelda goal!!!");
            }
            else if(uniqueArr[i].id == "hours-less-20") {
                hoursGoalArchived = true;
                console.log("Archived hours goal!!!!");
            }
        }
    }
    document.getElementById("button-1").style.display = "none";
    document.getElementById("button-2").style.display = "none";
}

function activateAddDataButton(willWork) {
    document.getElementById("button-1").style.display = "block";
    document.getElementById("button-1").innerHTML = "Add Data";

    if(!willWork) {
        document.getElementById("button-1").style.opacity = "25%";
    }
    else {
        document.getElementById("button-1").addEventListener("click", addData );
    }
}

function activateLeftArrowButton() {
    document.getElementById("left").addEventListener("click", callWeek1 );
    document.getElementById("left").addEventListener("mouseover", changeLeft100 );
    document.getElementById("left").addEventListener("mouseout", changeLeft60 );
    document.getElementById("left").style.opacity = "60%";

    document.getElementById("right").removeEventListener("mouseover", changeRight100 );
    document.getElementById("right").removeEventListener("mouseout", changeRight60 );
    document.getElementById("right").removeEventListener("click", callWeek2 );
    document.getElementById("right").style.opacity = "15%";
}

function activateRightArrowButton() {
    document.getElementById("right").addEventListener("click", callWeek2 );
    document.getElementById("right").addEventListener("mouseover", changeRight100 );
    document.getElementById("right").addEventListener("mouseout", changeRight60 );
    document.getElementById("right").style.opacity = "60%";

    document.getElementById("left").removeEventListener("mouseover", changeLeft100 );
    document.getElementById("left").removeEventListener("mouseout", changeLeft60 );
    document.getElementById("left").removeEventListener("click", callWeek1 );
    document.getElementById("left").style.opacity = "15%";
}

function changeLeft100() {
    document.getElementById("left").style.opacity = "100%";
}
function changeLeft60() {
    document.getElementById("left").style.opacity = "60%";
}
function changeRight100() {
    document.getElementById("right").style.opacity = "100%";
}
function changeRight60() {
    document.getElementById("right").style.opacity = "60%";
}
function callWeek1() {
    doStuff("hours-more-5-week-1");
}
function callWeek2() {
    doStuff("hours-more-5-week-2");
}




function addData() {
    /*
    var arr = document.getElementsByTagName("li");
    //we need to know the chart data we are editing, what kind is it?
    var lineItem;
    for( i=0; i< arr.length; i++ ) {
        if( arr[i].style.borderColor == "black" ) {
            lineItem = arr[i];
        }
    }

    var name = input.id.split("-");
    if(name[1] == "finish") { //if the data is a game goal
        //then we open the game go popup
    }
    else if(name[1] == "hours") { //if the data is a 

    }
    */

    //we know we are editing data in the play < 20 hours per week goal
    openPopup("editing-data");
    console.log("the add data button was hit");
}


function addDataToGraph() {
    var canBeAdded = false;

    var hours = document.getElementById("select-hours");
    var mins = document.getElementById("select-minutes");
    var game = document.getElementById("select-game");
    var day = document.getElementById("select-day");

    if(hours != null && hours.innerHTML != null && hours.innerHTML != "-Select Hours-") {
        if(mins!=null && mins.innerHTML!=null && mins.innerHTML!="-Select Minutes-") {
            if(game!=null && game.innerHTML!=null && game.innerHTML!="-Select Game-") {
                if(day!=null && day.innerHTML!=null && day.innerHTML!="-Select Day-") {
                    canBeAdded = true;
                }
            }
        }
    }

    if(canBeAdded) {
        var nodeIValue;
        if(day.innerHTML == "Jan 09, 2022") { nodeIValue=0; }
        else if(day.innerHTML == "Jan 10, 2022") { nodeIValue=1; }
        else if(day.innerHTML == "Jan 11, 2022") { nodeIValue=2; }
        else if(day.innerHTML == "Jan 12, 2022") { nodeIValue=3; }
        else if(day.innerHTML == "Jan 13, 2022") { nodeIValue=4; }
        else if(day.innerHTML == "Jan 14, 2022") { nodeIValue=5; }
        else if(day.innerHTML == "Jan 15, 2022") { nodeIValue=6; }

        var numToAdd = parseFloat(hours.innerHTML) + (parseFloat(mins.innerHTML)/60);

        console.log("hours" + hours.innerHTML);
        console.log("mins" + mins.innerHTML);
        console.log("numToAdd" + numToAdd);
        hoursLess20WeekData[nodeIValue].hours = hoursLess20WeekData[nodeIValue].hours + numToAdd;

        //reset pie chart
        hoursLess20WeekDataHoursPlayed = sumHours(hoursLess20WeekData);
        hoursLess20WeekDataHoursLeft = getHoursLeft(20, hoursLess20WeekData);

        hoursLess20WeekPie = [
            {'name': "Hours Played", 'hours': hoursLess20WeekDataHoursPlayed},
            {'name': "Hours Left", 'hours': hoursLess20WeekDataHoursLeft},
        ];

        doStuff("hours-less-20")
        closePopup("editing-data");

    } else {
        console.log("gave a warning!!");
        document.getElementById("warning3").style.opacity = "100%";
        console.log( "" + document.getElementById("warning3").style.opacity );
    }
}











function reloadData() {
    HoursData[2].hours = 10;
    console.log(HoursData);
    if( myChart != null ){
        myChart.destroy();
    }
    myChart = createChart();

    hoursPlayed = sumHours(HoursData);
    hoursLeft = getHoursLeft();
    pieData = [
        {'name': "Hours Played", 'hours': hoursPlayed},
        {'name': "Hours Left", 'hours': hoursLeft},
    ];

    if(myChart2 != null){
        myChart2.destroy();
    }
    myChart2 = createChart2();
}

















addFunctionToTags();

function addFunctionToTags() {
    var arr = document.getElementsByTagName("li");
    for( i=0; i< arr.length; i++ ) {
        arr[i].addEventListener("click", function(){ doStuff(this); } );
    }
}

















//DATA:


//ZELDA - line
var finishZeldaData = [
    {'date': new Date('10/09/2021'), 'hours': 5},
    {'date': new Date('10/10/2021'), 'hours': 10},
    {'date': new Date('10/11/2021'), 'hours': 10},
    {'date': new Date('10/12/2021'), 'hours': 10},
    {'date': new Date('10/13/2021'), 'hours': 10},
    {'date': new Date('10/14/2021'), 'hours': 20},
    {'date': new Date('10/15/2021'), 'hours': 25},
];

var finishZeldaPie = [
    {'name': "Completed", 'hours': 25},
    {'name': "Left", 'hours': 75},
];

//HOURS PER WEEK - <20 - bar
var hoursLess20WeekData = [
    {'date': new Date('01/09/2022'), 'hours': 2},
    {'date': new Date('01/10/2022'), 'hours': 3},
    {'date': new Date('01/11/2022'), 'hours': 0},
    {'date': new Date('01/12/2022'), 'hours': 5},
    {'date': new Date('01/13/2022'), 'hours': 1},
    {'date': new Date('01/14/2022'), 'hours': 1},
    {'date': new Date('01/15/2022'), 'hours': 2},
];

var hoursLess20WeekDataHoursPlayed = sumHours(hoursLess20WeekData);
var hoursLess20WeekDataHoursLeft = getHoursLeft(20, hoursLess20WeekData);

var hoursLess20WeekPie = [
    {'name': "Hours Played", 'hours': hoursLess20WeekDataHoursPlayed},
    {'name': "Hours Left", 'hours': hoursLess20WeekDataHoursLeft},
];

//ARCHIVED

//PORTAL - line
var finishPortalData = [
    {'date': new Date('04/14/2021'), 'hours': 5},
    {'date': new Date('04/15/2021'), 'hours': 10},
    {'date': new Date('04/16/2021'), 'hours': 30},
    {'date': new Date('04/17/2021'), 'hours': 30},
    {'date': new Date('04/18/2021'), 'hours': 30},
    {'date': new Date('04/19/2021'), 'hours': 30},
    {'date': new Date('04/20/2021'), 'hours': 45},
    {'date': new Date('04/21/2021'), 'hours': 45},
    {'date': new Date('04/22/2021'), 'hours': 75},
    {'date': new Date('04/23/2021'), 'hours': 75},
    {'date': new Date('04/24/2021'), 'hours': 75},
    {'date': new Date('04/25/2021'), 'hours': 80},
    {'date': new Date('04/26/2021'), 'hours': 80},
    {'date': new Date('04/27/2021'), 'hours': 80},
    {'date': new Date('04/28/2021'), 'hours': 80},
    {'date': new Date('04/29/2021'), 'hours': 80},
    {'date': new Date('04/30/2021'), 'hours': 100},
];

var finishPortalPie = [
    {'name': "Completed", 'hours': 100},
    {'name': "Left", 'hours': 0},
];

//FALLOUT - line
var finishFalloutData = [
    {'date': new Date('05/24/2021'), 'hours': 25},
    {'date': new Date('05/25/2021'), 'hours': 25},
    {'date': new Date('05/26/2021'), 'hours': 25},
    {'date': new Date('05/27/2021'), 'hours': 25},
    {'date': new Date('05/28/2021'), 'hours': 35},
    {'date': new Date('05/29/2021'), 'hours': 35},
    {'date': new Date('05/30/2021'), 'hours': 40},
    {'date': new Date('05/31/2021'), 'hours': 40},
    {'date': new Date('06/01/2021'), 'hours': 50},
    {'date': new Date('06/02/2021'), 'hours': 60},
    {'date': new Date('06/03/2021'), 'hours': 60},
    {'date': new Date('06/04/2021'), 'hours': 70},
    {'date': new Date('06/05/2021'), 'hours': 75},
    {'date': new Date('06/06/2021'), 'hours': 75},
    {'date': new Date('06/07/2021'), 'hours': 75},
    {'date': new Date('06/08/2021'), 'hours': 80},
];

var finishFalloutPie = [
    {'name': "Completed", 'hours': 80},
    {'name': "Left", 'hours': 20},
];

//HOURS PER WEEK - >5
var hoursMore5WeekDataWeek1 = [
    {'date': new Date('11/28/2021'), 'hours': 0},
    {'date': new Date('11/29/2021'), 'hours': 0},
    {'date': new Date('11/30/2021'), 'hours': 0.25},
    {'date': new Date('12/01/2021'), 'hours': 0},
    {'date': new Date('12/02/2021'), 'hours': 1},
    {'date': new Date('12/03/2021'), 'hours': 1},
    {'date': new Date('12/04/2021'), 'hours': 0},
];

var hoursMore5WeekDataWeek1HoursPlayed = sumHours(hoursMore5WeekDataWeek1);
var hoursMore5WeekDataWeek1HoursLeft = getHoursLeft(5, hoursMore5WeekDataWeek1);

var hoursMore5WeekPieWeek1 = [
    {'name': "Hours Played", 'hours': hoursMore5WeekDataWeek1HoursPlayed},
    {'name': "Hours Left", 'hours': hoursMore5WeekDataWeek1HoursLeft},
];
//week2
var hoursMore5WeekDataWeek2 = [
    {'date': new Date('12/05/2021'), 'hours': 0.333},
    {'date': new Date('12/06/2021'), 'hours': 1},
    {'date': new Date('12/07/2021'), 'hours': 2},
    {'date': new Date('12/08/2021'), 'hours': 0},
    {'date': new Date('12/09/2021'), 'hours': 1},
    {'date': new Date('12/10/2021'), 'hours': 2},
    {'date': new Date('12/11/2021'), 'hours': 0},
];

var hoursMore5WeekDataWeek2HoursPlayed = sumHours(hoursMore5WeekDataWeek2);
var hoursMore5WeekDataWeek2HoursLeft = getHoursLeft(5, hoursMore5WeekDataWeek2);

var hoursMore5WeekPieWeek2 = [
    {'name': "Hours Played", 'hours': hoursMore5WeekDataWeek2HoursPlayed},
    {'name': "Hours Left", 'hours': hoursMore5WeekDataWeek2HoursLeft},
];



//STATS - No pies!, all lines!

//HOURS

var StatsHoursWeekData = [
    {'date': new Date('11/14/2021'), 'hours': 12},
    {'date': new Date('11/21/2021'), 'hours': 13},
    {'date': new Date('11/28/2021'), 'hours': 10},
    {'date': new Date('12/05/2021'), 'hours': 3},
    {'date': new Date('12/12/2021'), 'hours': 7},
    {'date': new Date('12/19/2021'), 'hours': 5},
    {'date': new Date('12/26/2021'), 'hours': 8},
];


var StatsHoursMonthData = [
    {'month': "January 2021",   'hours': 40},
    {'month': "February 2021",  'hours': 36},
    {'month': "March 2021",     'hours': 20},
    {'month': "April 2021",     'hours': 15},
    {'month': "May 2021",       'hours': 92},
    {'month': "June 2021",      'hours': 104},
    {'month': "July 2021",      'hours': 115},
    {'month': "August 2021",    'hours': 61},
    {'month': "September 2021", 'hours': 38},
    {'month': "October 2021",   'hours': 35},
    {'month': "November 2021",  'hours': 39},
    {'month': "December 2021",  'hours': 23},
];


var StatsNewGamesData = [
    {'month': "January 2021",   'hours': 0},
    {'month': "February 2021",  'hours': 0},
    {'month': "March 2021",     'hours': 0},
    {'month': "April 2021",     'hours': 1},
    {'month': "May 2021",       'hours': 4},
    {'month': "June 2021",      'hours': 8},
    {'month': "July 2021",      'hours': 2},
    {'month': "August 2021",    'hours': 4},
    {'month': "September 2021", 'hours': 0},
    {'month': "October 2021",   'hours': 0},
    {'month': "November 2021",  'hours': 1},
    {'month': "December 2021",  'hours': 3},
];

var StatsCompletedGamesData = [
    {'month': "January 2021",   'hours': 0},
    {'month': "February 2021",  'hours': 0},
    {'month': "March 2021",     'hours': 0},
    {'month': "April 2021",     'hours': 1},
    {'month': "May 2021",       'hours': 0},
    {'month': "June 2021",      'hours': 3},
    {'month': "July 2021",      'hours': 0},
    {'month': "August 2021",    'hours': 0},
    {'month': "September 2021", 'hours': 1},
    {'month': "October 2021",   'hours': 0},
    {'month': "November 2021",  'hours': 0},
    {'month': "December 2021",  'hours': 0},
];




//NEW HOURS GOAL
var hoursNewGoalData = [
    {'date': new Date('01/16/2022'), 'hours': 0},
    {'date': new Date('01/17/2022'), 'hours': 0},
    {'date': new Date('01/18/2022'), 'hours': 0},
    {'date': new Date('01/19/2022'), 'hours': 0},
    {'date': new Date('01/20/2022'), 'hours': 0},
    {'date': new Date('01/21/2022'), 'hours': 0},
    {'date': new Date('01/22/2022'), 'hours': 0},
];

var hoursLess20WeekDataHoursLeft = 10;

var hoursNewGoalPie = [
    {'name': "Hours Played", 'hours': 0},
    {'name': "Hours Left", 'hours': hoursLess20WeekDataHoursLeft},
];

//NEW GAME GOAL
var gameNewGoalData = [
    {'date': new Date('01/16/2022'), 'hours': 0},
    {'date': new Date('01/17/2022'), 'hours': 0},
    {'date': new Date('01/18/2022'), 'hours': 0},
    {'date': new Date('01/19/2022'), 'hours': 0},
    {'date': new Date('01/20/2022'), 'hours': 0},
    {'date': new Date('01/21/2022'), 'hours': 0},
    {'date': new Date('01/22/2022'), 'hours': 0},
];
var gameNewGoalPie = [
    {'name': "Completed", 'hours': 0},
    {'name': "Left", 'hours': 100},
];



/*

var HoursData = [
    {'date': new Date('01/09/2022'), 'hours': 2},
    {'date': new Date('01/10/2022'), 'hours': 3},
    {'date': new Date('01/11/2022'), 'hours': 0},
    {'date': new Date('01/12/2022'), 'hours': 5},
    {'date': new Date('01/13/2022'), 'hours': 1},
    {'date': new Date('01/14/2022'), 'hours': 1},
    {'date': new Date('01/15/2022'), 'hours': 2},
];

var hoursPlayed = sumHours(HoursData);
var hoursLeft = getHoursLeft();

var pieData = [
    {'name': "Hours Played", 'hours': hoursPlayed},
    {'name': "Hours Left", 'hours': hoursLeft},
];
*/


function sumHours(hoursData) {
    var sum = 0;
    for( i=0; i<hoursData.length; i++ ){
        console.log("Hours data at " + i + " is " + hoursData[i].hours)
        sum = sum + hoursData[i].hours;
    }
    console.log("Here is the sum: " + sum);
    return sum;
}

function getHoursLeft(goal, hoursData) {
    //var goal = document.getElementById("goal");
    //var numHours = goal.innerHTML;
    //var numHours = 20;
    //console.log(numHours);
    var hoursPlayed = sumHours(hoursData)
    if(goal-hoursPlayed > 0 ){
        return goal-hoursPlayed;
    }
    else {
        return 0;
    }
}

//Get data

//functions


function getDates(hoursData) {
    var data = [];
    for( i=0; i< hoursData.length; i++ ){
        data[i] = hoursData[i].date.toDateString();
    }
    console.log(data);
    return data;
}

function getHours(hoursData) {
    var data = [];
    for( i=0; i<hoursData.length; i++ ){
        data[i] = hoursData[i].hours;
    }
    console.log(data);
    return data;
}

function getMonths(hoursData) {
    var data = [];
    for( i=0; i<hoursData.length; i++ ){
        data[i] = hoursData[i].month;
    }
    console.log(data);
    return data;
}



function getNames(pieData) {
    var data = [];
    for( i=0; i<pieData.length; i++ ){
        data[i] = pieData[i].name;
    }
    console.log(data);
    return data;
}







//get the graph holder
const ctx = document.getElementById('graph-1').getContext('2d');

//make the graph

//var myChart = createChart();


function createHoursChart(hoursData, typeOfChart, xTitle, graphLabel, yTitle) {
    return chart = new Chart(ctx, {
        type: typeOfChart,
        data: {
            labels: getDates(hoursData),
            datasets: [{
                label: graphLabel,
                data: getHours(hoursData),
                backgroundColor: [
                    'rgba(255, 159, 64, 0.5)'
                ],
            }]
        },
        options: {
            parsing: {
                xAxisKey: xTitle,
                yAxisKey: 'hours'
            },
            scales: {
                xAxis: {
                    title: xTitle,
                    display: false
                },
                x: {
                    display: true,
                    title: {
                    display: true,
                    text: xTitle,
                    }
                },
                y: {
                    display: true,
                    title: {
                    display: true,
                    text: yTitle,
                    },
                    min: 0,
                },
            },
            responsiveness: true,
            interaction: {
                mode: 'x'
            },
            //onClick: function (e) {
              //  var activeBars = myChart.getBarsAtEvent(e); 
               // console.log(activeBars[0]);
            //},
        } 
    });
}


function createMonthChart(hoursData, typeOfChart, xTitle, graphLabel, yTitle) {
    return chart = new Chart(ctx, {
        type: typeOfChart,
        data: {
            labels: getMonths(hoursData),
            datasets: [{
                label: graphLabel,
                data: getHours(hoursData),
                backgroundColor: [
                    'rgba(255, 159, 64, 0.5)'
                ],
            }]
        },
        options: {
            parsing: {
                xAxisKey: xTitle,
                yAxisKey: 'hours'
            },
            scales: {
                xAxis: {
                    title: xTitle,
                    display: false
                },
                x: {
                    display: true,
                    title: {
                    display: true,
                    text: xTitle,
                    }
                },
                y: {
                    display: true,
                    title: {
                    display: true,
                    text: yTitle,
                    },
                    min: 0,
                },
            },
            responsiveness: true,
            interaction: {
                mode: 'x'
            },
            //onClick: function (e) {
              //  var activeBars = myChart.getBarsAtEvent(e); 
               // console.log(activeBars[0]);
            //},
        } 
    });
}


//graph 2

const ctx2 = document.getElementById('graph-2').getContext('2d');

//var myChart2 = createChart2();

function createChart2(pieData) {
    return chart = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: getNames(pieData),
            datasets: [{
                label: '# of hours',
                data: getHours(pieData),
                backgroundColor: [
                    'rgba(255, 240, 64, 0.5)',
                    'rgba(40, 255, 150, 0.5)',
                ],
            }]
        },
        options: {
        responsive: true,
        },
    });
}




const database = 
[
    {
        gameName: "It Takes Two",
        gameTags: ["Strategy", "Adventure", "Multiplayer", "3D"],
        gameConsoles: ["PS4", "XBOX One", "PS5", "PC"],
        gameRating: "4.9/5",
        gamePicture: "itTakesTwo.png"
    },
    {
        gameName: "Portal 2",
        gameTags: ["Strategy", "Adventure", "Multiplayer", "3D"],
        gameConsoles: ["PS3", "XBOX 360", "PC"],
        gameRating: "4.8/5",
        gamePicture: "portal2.jpg"
    },
    {
        gameName: "Team Fortress 2",
        gameTags: ["3D", "Multiplayer", "Competitive", "Action", "Shooter"],
        gameConsoles: ["PS3", "XBOX 360", "PC"],
        gameRating: "4.8/5",
        gamePicture: "teamFortress.jpg"
    },
    {
        gameName: "Half-Life 2",
        gameTags: ["3D", "Strategy", "Action", "Adventure", "Shooter"],
        gameConsoles: ["XBOX", "PC"],
        gameRating: "4.7/5",
        gamePicture: "halfLife.jpg"
    },
    {
        gameName: "Counter-Strike: Global Offensive",
        gameTags: ["Strategy", "Multiplayer", "Shooter", "Competitive"],
        gameConsoles: ["PS3", "XBOX 360", "PC"],
        gameRating: "4.4/5",
        gamePicture: "csgo.jpg"
    },
    {
        gameName: "Among Us",
        gameTags: ["2D", "Multiplayer", "Action"],
        gameConsoles: ["PS4", "XBOX One", "PC", "Nintendo Switch"],
        gameRating: "3.7/5",
        gamePicture: "amongUs.jpg"
    },
];

var added = 
[
    {
        gameName: "Mario Kart 8",
        gameTags: ["Multiplayer","Action"],
        gamePicture: "marioKart8.jpg",
        gameRating: "4.1"
    },
    {
        gameName: "Call of Duty: Black Ops ",
        gameTags: ["Multiplayer", "Shooter", "Competitive"],
        gamePicture: "codBlop.jpg",
        gameRating: "4.5"
    },
    {
        gameName: "Minecraft",
        gameTags: ["3D", "Action", "Adventure"],
        gamePicture: "minecraft.png",
        gameRating: "4.0"
    },
    {
        gameName: "Pacman",
        gameTags: ["2D","Action","Strategy"],
        gamePicture: "pacman.jpg",
        gameRating: "3.9"
    },
    {
        gameName: "Wii Sports",
        gameTags: ["3D", "Multiplayer"],
        gamePicture: "wiiSports.jpg",
        gameRating: "3.6"
    },
];

function selectElement(selector){
    return document.querySelector(selector);
}

var displayed = [];
var favs = [];

//Displays games under my games on page load

function add(){
    let addName = sessionStorage.getItem("gameToAdd");
    if(sessionStorage.getItem("gameToAdd") != undefined){
        let addIndex = gameSearch(addName);
            selectElement('.myGamesInside').innerHTML = `
                    <div class = "item">
                        <div id="gameImage">
                            <img src=${database[addIndex].gamePicture} alt="profile image" style="width:100px; height:150px; border-radius: 5px;">
                        </div>

                        <div id = "gameName">
                            <h4>${database[addIndex].gameName}</h4>
                        </div>

                        <div id = "gameRating">
                            <div class="rate">
                                <input type="radio" id="star${displayed.length*5+5}" name="rate${displayed.length}" value="5" />
                                    <label for="star${displayed.length*5+5}" title="text">5 stars</label>
                                <input type="radio" id="star${displayed.length*5+4}" name="rate${displayed.length}" value="4" />
                                    <label for="star${displayed.length*5+4}" title="text">4 stars</label>
                                <input type="radio" id="star${displayed.length*5+3}" name="rate${displayed.length}" value="3" />
                                    <label for="star${displayed.length*5+3}" title="text">3 stars</label>
                                <input type="radio" id="star${displayed.length*5+2}" name="rate${displayed.length}" value="2" />
                                    <label for="star${displayed.length*5+2}" title="text">2 stars</label>
                                <input type="radio" id="star${displayed.length*5+1}" name="rate${displayed.length}" value="1" />
                                    <label for="star${displayed.length*5+1}" title="text">1 star</label>
                            </div>
                        </div>

                        <button id = btn type = "button" onclick="addFav(${displayed.length})">Add to My Favourites</button>
                    </div>

                ` + selectElement('.myGamesInside').innerHTML;
                displayed.push(database[addIndex]);
    }
}

//displays previously added games from added games database

function displayGames(){
    for (let i = 0; i < added.length; i++){
        selectElement('.myGamesInside').innerHTML += `
                <div class = "item">
                    <div id="gameImage">
                        <img src=${added[i].gamePicture} alt="profile image" style="width:100px; height:150px; border-radius: 5px;">
                    </div>

                    <div id = "gameName">
                        <h4>${added[i].gameName}</h4>
                    </div>

                    <div id = "gameRating">
                        <div class="rate">
                            <input type="radio" id="star${displayed.length*5+5}" name="rate${displayed.length}" value="5" />
                                <label for="star${displayed.length*5+5}" title="text">5 stars</label>
                            <input type="radio" id="star${displayed.length*5+4}" name="rate${displayed.length}" value="4" />
                                <label for="star${displayed.length*5+4}" title="text">4 stars</label>
                            <input type="radio" id="star${displayed.length*5+3}" name="rate${displayed.length}" value="3" />
                                <label for="star${displayed.length*5+3}" title="text">3 stars</label>
                            <input type="radio" id="star${displayed.length*5+2}" name="rate${displayed.length}" value="2" />
                                <label for="star${displayed.length*5+2}" title="text">2 stars</label>
                            <input type="radio" id="star${displayed.length*5+1}" name="rate${displayed.length}" value="1" />
                                <label for="star${displayed.length*5+1}" title="text">1 star</label>
                        </div>
                    </div>

                    <button id = btn type = "button" onclick="addFav(${i})">Add to My Favourites</button>
                </div>

            `;
            displayed.push(added[i]);

    }
}

//Adds game to favourites

function addFav(game){
    if(favs.includes(displayed[game]) == false){
        favs.push(displayed[game]);
        var stars = document.querySelectorAll('.rate')[game];
        selectElement('.favGamesInside').innerHTML += `
            <div class = "favItem">
                <div id="gameImage">
                    <img src=${displayed[game].gamePicture} alt="profile image" style="width:100px; height:150px; border-radius: 5px;">
                </div>

                <div id = "gameName">
                    <h4>${displayed[game].gameName}</h4>
                </div>
                <div id = "gameRating">
                    <h5>${Math.floor((Math.random() * 20) + 1)} Hours Played</h5>
                </div>

                <button id = btn type = "button" onclick="removeFav(favSearch(displayed[${game}].gameName))">Remove</button>
            </div>

        `;
    
    }
}

//counts the amount a tag appears in my games 

function tagCount(tag){
    var count = 0;
    for(let i = 0; i < displayed.length; i++){
        if(displayed[i].gameTags.includes(tag)){
            count++;
        }
    }
    return count;
}

/*
google.charts.load('current', {'packages':['corechart']});
google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(drawChart);
*/

//implements the pie graph 
/*
function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Genre', 'Amount'],
    ['Multiplayer',tagCount("Multiplayer")],
    ['SinglePlayer',tagCount("SinglePlayer")],
    ['Indie',tagCount("Indie")],
    ['Adventure',tagCount("Adventure")],
    ['Casual',tagCount("Casual")],
    ['Strategy',tagCount("Strategy")],
    ['RPG',tagCount("RPG")],
    ['3D',tagCount("3D")],
    ['2D',tagCount("2D")],
    ['Action',tagCount("Action")],
    ['Shooter',tagCount("Shooter")],
    ['Competitive',tagCount("Competitive")]
  ]);

  var options = {
    legend: 'none',
    pieSliceText: 'label',
    backgroundColor: 'transparent'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);

}
*/

//counts the amount of games in my games 
function gameCount(){
    selectElement('.totalGamesInside').innerHTML += `
        <h1>${displayed.length}</h1>
    `;
}

//finds the game in the displayed list and returns its index 

function gameSearch(name){

    return database.findIndex(x => x.gameName === name);
}

//finds the game in the fav game list and returns its index

function favSearch(name){
    return favs.findIndex(x => x.gameName === name);
}

//removes an item from the fav game list on the page

function removeFav(index){
    var toDelete = document.querySelectorAll('.favItem')[index];
    toDelete.outerHTML = ``;
    favs.splice(index,1);
}



//timeline graph



var StatsNewGamesData = [
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
        } 
    });
}

const ctx2 = document.getElementById('pie-graph').getContext('2d');


function createChart2(pieData) {
    return chart = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: getNames(pieData),
            datasets: [{
                label: '# of games',
                data: getHours(pieData),
                backgroundColor: [
                    'rgba(255, 240, 64, 0.5)',
                    'rgba(40, 255, 150, 0.5)',
                    'rgba(56, 255, 245, 0.5)',
                ],
            }]
        },
        options: {
        responsive: true,
        },
    });
}

var pieChartData = [
    {'name': "Open World", 'hours': 2},
    {'name': "Arcade", 'hours': 2},
    {'name': "Racing", 'hours': 1},
];

var myChart;
var myChart2;
const ctx = document.getElementById('timeline-graph').getContext('2d');
console.log("hello");
makeGraphs();

function makeGraphs() {
    console.log("about to make graph");
    myChart = createMonthChart(StatsNewGamesData, 'bar', "Month", "# of new games", "New Games");
    myChart2 = createChart2(pieChartData);
    console.log("made graph");
}


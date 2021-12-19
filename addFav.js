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


function selectElement(selector){
    return document.querySelector(selector);
}

var displayed = [];

//Displays games under my games on page load

function displayGames(){
    let addName = sessionStorage.getItem("gameToAdd");
    let addIndex = gameSearch(addName);
    displayed.push(database[addIndex]);
            selectElement('.myGamesInside').innerHTML += `
                <div class = "item">
                    <div id="gameImage">
                        <img src=${database[addIndex].gamePicture} alt="profile image" style="width:100px; height:150px; border-radius: 5px;">
                    </div>

                    <div id = "gameName">
                        <h4>${database[addIndex].gameName}</h4>
                    </div>

                    <div id = "gameRating">
                        <h5>Rating: ${database[addIndex].gameRating}</h5>
                    </div>

                    <button id = btn type = "button" onclick="addFav(${addIndex})">Add to My Favourites</button>
                </div>

            `;
            
}

//Adds game to favourites

function addFav(index){
    selectElement('.favGamesInside').innerHTML += `
        <div class = "item">
            <div id="gameImage">
                <img src=${database[index].gamePicture} alt="profile image" style="width:100px; height:150px; border-radius: 5px;">
            </div>

            <div id = "gameName">
                <h4>${database[index].gameName}</h4>
            </div>

            <div id = "gameRating">
                <h5>Rating: ${database[index].gameRating}</h5>
            </div>

            <button id = btn type = "button">Remove</button>
        </div>

    `;
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

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

//implements the pie graph 

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

//counts the amount of games in my games 

function gameCount(){
    selectElement('.totalGames').innerHTML += `
        <h1>${displayed.length}</h1>
    `;
}

function gameSearch(name){
    return database.findIndex(x => x.gameName === name);
}

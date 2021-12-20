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
                                <input type="radio" id="star5" name="rate" value="5" />
                                    <label for="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" value="4" />
                                    <label for="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" value="3" />
                                    <label for="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                    <label for="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" value="1" />
                                    <label for="star1" title="text">1 star</label>
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
                        <h5>Rating: ${added[i].gameRating}</h5>
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
    selectElement('.favGamesInside').innerHTML += `
        <div class = "favItem">
            <div id="gameImage">
                <img src=${displayed[game].gamePicture} alt="profile image" style="width:100px; height:150px; border-radius: 5px;">
            </div>

            <div id = "gameName">
                <h4>${displayed[game].gameName}</h4>
            </div>

            <div id = "gameRating">
                <h5>Rating: ${displayed[game].gameRating}</h5>
            </div>

            <button id = btn type = "button" onclick="removeFav(${favSearch(displayed[game].gameName)})">Remove</button>
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

google.charts.load('current', {'packages':['corechart']});
google.charts.load("current", {packages:["timeline"]});
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

  var container = document.getElementById('timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'Game' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows();

var options2 = {
    timeline: { showRowLabels: false }
};

  chart.draw(dataTable,options2);

}

//counts the amount of games in my games 

function gameCount(){
    selectElement('.totalGames').innerHTML += `
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



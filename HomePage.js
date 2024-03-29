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
        
                selectElement('#myGamesInside').innerHTML = `
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
                ` + selectElement('#myGamesInside').innerHTML;
                displayed.push(database[addIndex]);
    }
}

//displays previously added games from added games database

function displayGames(){
    for (let i = 0; i < added.length; i++){
        selectElement('#myGamesInside').innerHTML += `
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
                 </div>
            `;
            displayed.push(added[i]);

    }
}


function gameSearch(name){
    return database.findIndex(x => x.gameName === name);
}

function favSearch(name){
    return favs.findIndex(x => x.gameName === name);
}

function removeFav(index){
    var toDelete = document.querySelectorAll('.favItem')[index];
    toDelete.outerHTML = ``;
    favs.splice(index,1);
}
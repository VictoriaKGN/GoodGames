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

// selects element passed in
function selectElement(selector)
{
    return document.querySelector(selector);
}

function clearResults()
{
    selectElement('.topResults-content').innerHTML = "";
}

var myConsoles = [];
var myTags = [];
var search = "";

// gets results from the search bar on the current page
function getResults()
{
    search = document.getElementById("searchBar").value;
    
    checkedBoxes();
    results();

    document.getElementById("searchBar").value = "";
}

// loads results from the 'Advanced Search' page
function loadResults()
{
    search = sessionStorage.getItem("name");
    myConsoles = sessionStorage.getItem("consoles").split(",");
    myTags = sessionStorage.getItem("tags").split(",");

    results();
}

// actually gets the needed results
function results()
{
    clearResults();

    if (search.length > 0)
    {
        for (let i = 0; i < database.length; i++)
        {
            if (database[i].gameName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                //&& (myConsoles.length == 0 || isArrayInArray(database[i].gameConsoles, myConsoles))
                //&& (myTags.length == 0 || isArrayInArray(database[i].gameTags, myTags))
            )
            {
                selectElement('.topResults-content').innerHTML += `
                
                    <div class = "topResults-item">
                        <div id="gameImage">
                            <img src=${database[i].gamePicture} alt="profile image" style="width:100px; height:150px; border-radius: 5px;">
                        </div>

                        <div id = "gameName">
                            <h3>${database[i].gameName}</h3>
                        </div>

                        <div id = "gameRating">
                            <h4>Rating: ${database[i].gameRating}</h4>
                        </div>

                        <button id = btn type = "button">Add to My Games</button>
                    </div>

                `;
            }
        }
    }
    resetBoxes();
}

function isArrayInArray(source, toFind)
{
    let found = false;

    for (let t = 0; t < toFind.length; t++)
    {
        for (let s = 0; s < source.length; s++)
        {
            if (source[s] === toFind[t])
                found = true;
        }

        if (!found)
            return false;

        found = false;
    }

    return true;
}


// checks which boxes are checked in the current page
function checkedBoxes()
{
  for (let i = 1; i <= 10; i++)
  {
    let cb1 = document.getElementById(i.toString());

    if (cb1.checked)
      myConsoles.push(cb1.value);
  }

  for (let i = 11; i <= 22; i++)
  {
    let cb2 = document.getElementById(i.toString());

    if (cb2.checked)
      myTags.push(cb2.value)
  }
}

// reset the checkboxes on the current page
function resetBoxes()
{
    for (let i = 1; i <= 22; i++)
    {
        let cb = document.getElementById(i.toString());
        cb.checked = false;
    }
}



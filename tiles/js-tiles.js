const tileContainer = document.getElementById("tileContainer")
const row = ['a', 'b', 'c','d', 'e','f','g','h']
const tileset = topicArray
let wide = 0
let deep = 0


let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
console.log("vw = "+vw)
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
console.log("vh = "+vh)
console.log("window.devicePixelRatio = "+window.devicePixelRatio)

//for mobile DPR 360 and 427 ***rep/-304
if(vw<300){ wide = 2; deep = 6; } else
if(vw<500){ wide = 3; deep = 6} else
if(vw<700){ wide = 4; deep = 5} else
if(vw<1000){ wide = 5; deep = 4} 
else{ wide = 6; deep = 5} 

const tileCount = wide*deep
const matchCount = tileCount/2
console.log("Matches in Play = "+matchCount)
const matchingTiles = []
const tilesInPlay = JSON.parse(JSON.stringify((shuffle(tileset).splice(0, matchCount))));

         //initialise gameplay grid
init(tilesInPlay);         //initialise gameplay grid

function init(tileArray){
    gridInit();
    //tileArray = shuffle(tileArray);      //initialise gameplay grid
    tileArray = gameTopicInit(tileArray);    //load game topic into array from external file
    tileInit(tileArray);        //randomise game tiles
    // playersInit()
    //buttonInit();
}

function gameTopicInit(tileset){
    console.log("Tiles in Play = "+tileCount)
    tileset.forEach(item => {
        matchingTiles.push([item[0], item[1]])
        matchingTiles.push([item[1], item[0]])
    });

    const shuffleTiles = shuffle(matchingTiles)
    shuffleTiles.forEach(match => {
    console.log("match = "+match)
    })
    return shuffleTiles
}

// The de-facto unbiased shuffle algorithm is the Fisher–Yates (aka Knuth) Shuffle.
function shuffle(array) {
    let currentIndex = array.length;
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

function gridInit(){
    for (let d = 0; d<deep; d++){
        for (let w = 0; w<wide; w++){
            // Create category container and index
            const tileDiv = document.createElement('div');
            const tileId = row[d]+(w+1)
            tileDiv.classList.add('tile');
            tileDiv.id=tileId;
            tileDiv.innerText=tileId;
            tileContainer.appendChild(tileDiv);
        }
    }}

function tileInit(shuffledTiles){
// Get all elements with the specified class
const tiles = document.querySelectorAll('.tile');

// Add the onclick event handler to each element
tiles.forEach((tile, tIndex) => {
    tile.addEventListener('click', tileTurn);
    tile.data = shuffledTiles[tIndex]
    // if (tile.data[0].substr(0,2) === "img"){

    // }
    //tile.value = shuffledTiles[tIndex][1]
    console.log('tile'+tile.id+'; = '+tile.data[0]+' & '+tile.data[1]);
    //tile.d
    
});
}

function tileTurn(){
    console.log('Element clicked! = '+this.id+" data = "+this.data[0]+" data.substr(0,3) = "+this.data[0].substr(0,3));
        if (this.data[0].substr(0,3) === "img"){
        document.getElementById(this.id).innerHTML = '<img src="'+this.data[0]+'" class="imgTile" />'
    }else{
        document.getElementById(this.id).innerText = this.data[0]
    }
    
}

const info = "vw = "+vw+"\nvh = "+vh+"\nwindow.devicePixelRatio = "+window.devicePixelRatio
document.getElementById("info").innerText= info
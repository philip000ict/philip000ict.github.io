    let wide = 6;
    let deep = 5;
    let griditem = "";
    let gridloco = "";
    let tileArray = [];
    let gemPairs = [];
    let wideId = ["A", "B","C","D","E","F"];
    let player = 1;
    let players = [0,0];
    let parentDiv = document.getElementById('grid-container');

    let tile1="";
    let tile2="";
    let choice=0;

    let gameTiles=[];

    class Tile {
            constructor(idtile, mtile, face, match){
                this.idtile = idtile;       //A1
                this.mtile = mtile;         //C3
                this.face = face;           // this face value
                this.match = match;         // matching tile face value
                };
            getmatch(tileid){
                if( this.atile == tileid){this.isface = false; return this;}
                else if ( this.qtile == tileid){this.isface = true; return this}
                else{return false }
            }
            getans(){return this.match};
            getid(){return this.idtile};
        }

    init(csvtiles);


    const tiles = document.querySelectorAll('.tile')
		tiles.forEach((tile) => {
			//console.log(tile)
		});

    function init(tileset){
        console.log("tileset.length = "+tileset.length)
        gridInit();         //initialise gameplay grid
        gameTopicInit(tileset);    //load game topic into array from external file
        arrayInit();        //randomise game tiles
        playersInit()
        //buttonInit();
    }

    function gridInit(){
        console.log("deep = "+deep)
        for(i=0; i< deep; i++){
            for(w=1; w <= wide; w++){
                gridloco = wideId[i] + w;
                tileArray.push(gridloco);
                griditem = '<div class="grid-item tile" id="'+ gridloco + '" >' + gridloco + '</div>';
                let childDiv = document.createElement('div');
                childDiv.innerHTML = griditem;
                childDiv.addEventListener("click", tileturn);
                parentDiv.appendChild(childDiv);
                }
            }
        console.log("gridInit complete"+deep);
        }

    function gameTopicInit(Names){
        for(i=0; i < Names.length; i +=2){
            let gempair = [];
            gempair[0] = '<img src="'+Names[i]+'" />';
            gempair[1] = Names[i+1];
            gemPairs.push(gempair);
            }
            //document.getElementById("playbox").innerHTML="Gems";
            console.log("gameTopicInit complete")
        }  
    function playersInit(){
        document.getElementById("playbox0").innerHTML="Player "+ player ;
            //document.getElementById("playbox").innerHTML="Gems";
            console.log("playerInit complete")
        }
    function arrayInit(){
        //deep copy of variables to preserve content
        qarray = JSON.parse(JSON.stringify(gemPairs));
        tarray = JSON.parse(JSON.stringify(tileArray));

        //assign random q&a to gameTiles array
        let tilecount = wide*deep;
        while(tarray.length>0) {

            let tl = tarray.length;
            let ql = qarray.length
            let getTile1 = Math.floor(Math.random() * tl);
            let getTile2 = Math.floor(Math.random() * (tl-1));
            let getface = Math.floor(Math.random() * ql);

            //get tiles and remove from tarray
            let tile1 = tarray[getTile1];
            tarray.splice(getTile1,1);
            let tile2 = tarray[getTile2];
            tarray.splice(getTile2,1)

            //get Q&A and remove from qarray
            let face1 = qarray[getface][0];
            let match1 = qarray[getface][1];
            qarray.splice(getface,1)
            let tile = new Tile(tile1,tile2, face1, match1);
            gameTiles.push(tile)
            tile = new Tile(tile2,tile1, match1, face1);
            gameTiles.push(tile)
        }
        console.log("arrayInit complete");
    }

function changetheme(){
    console.log("The times they are a' changin'")
    tilereset();
    init(toys);
}

    function tileturn(){
        let clickTile = event.target.getAttribute("id");
        console.log("choice =  "+ choice);
        console.log("clicktile =  "+ clickTile);
        console.log("player = "+player);
        for(i=0; i<gameTiles.length; i++){
            if(choice ===0){
                if(gameTiles[i].getid()===clickTile){
                    console.log("choice = "+choice);
                    tile1 = JSON.parse(JSON.stringify(gameTiles[i]));
                    tile1 = gameTiles[i];
                    console.log("tile1 match = "+tile1.mtile);
                    //console.log("ingame tile1 = " + JSON.stringify(tile1));
                    //tile1.idtile=i; 
                    event.target.innerHTML = tile1.face;
                    //document.getElementById(tile1.idtile).removeEventListener("click", tileturn);
                    event.target.removeEventListener("click", tileturn);
                    choice=1;
                    
                    
                    break;
                }
            }else if(choice === 1){
                if(gameTiles[i].getid()===clickTile){
                    console.log("choice = "+choice);
                    tile2 = JSON.parse(JSON.stringify(gameTiles[i]));
                    //tile2.tileid=i;
                    console.log("ingame tile2 = " + JSON.stringify(tile2));
                    event.target.innerHTML = tile2.face;
                    choice = 2;
                    // event.target.removeEventListener("click", tileturn);
                   // document.getElementById(tile2.idtile).removeEventListener("click", tileturn);
                    console.log("Choice = "+choice+" \ntile1 = "+tile1.mtile+" tile2 = "+tile2.idtile);
                       event.target.removeEventListener("click", tileturn);
                       break;
                    };
                
            }else if(choice === 2){console.log("Choice = "+choice+" \ntile1 = "+tile1.mtile+" tile2 = "+tile2.idtile);
            console.log("player = "+player);
                if(tile1.mtile == tile2.idtile){
                    alert("it's a match");
                    score(player);
                }else if(tile1.mtile != tile2.idtile){
                    alert("No match, try again");
                    document.getElementById(tile1.idtile).innerHTML = tile1.idtile;
                    document.getElementById(tile2.idtile).innerHTML = tile2.idtile;
                }
                player = change(player);
                choice=0;
                console.log("Player = "+player);
                break;
        }
    }}

function score(player){
    play = parseInt(document.getElementById("playbox"+player).innerHTML);
    play += 1;
    document.getElementById("playbox"+player).innerHTML = play;
}

    function change(play){
        if (play == 1){ play = 2;
        }else if (play == 2){play = 1;}
        document.getElementById("playbox0").innerHTML = "Player "+play;
        return play
    }

    function tilereset(){
        tileArray = [];
        document.getElementById("grid-container").innerHTML = "";
        gemPair=[];
        tileArray=[];
        init(toys);
        choice = 0;}//catch(err){console.log(err);}


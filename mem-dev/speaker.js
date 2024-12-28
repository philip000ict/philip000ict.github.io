

    let wide = 2;
    let deep = 5;
    let griditem = "";
    let gridloco = "";
    let tileArray = topicArray[1];
    let tilePairs = [];
    let playArray = [];
    let playPairs = [];
    let wideId = ["A", "B","C","D","E","F"];
    let player = 1;
    let players = [0,0];
    let parentDiv = document.getElementById('grid-container');
    var modal = document.getElementById("myModal");
    var nomodal = document.getElementById("noModal");
    var span = document.getElementsByClassName("close")[0];
    var spun = document.getElementsByClassName("clap")[0];
    var startmodal = document.getElementById("startModal");
    let tile1="";
    let tile2="";
    let turn1="";
    let turn2="";
    let choice=0;

    let gameTiles=[];

    //gridInit();
    // playArray = init(tileArray);
    // console.log("init complete, toys in play = "+playArray);
    //playPairs = gridInit(init(tileArray))
    gridInit(init(tileArray))

    // return 'deep' number of gametiles
    function init(tilesetparam){
        tileset = [];
        gameTiles = [];
        tilePairs = [];
        //console.log("36 tileset = "+tileset)
        tileset = JSON.parse(JSON.stringify(tilesetparam));
        let ql = tileset.length/2
        for(i=0; i<ql; i++){
                tilePairs.push([tileset[i*2+1],tileset[i*2]]);               
            }
        for(i=0; i< deep; i++){
                let tl = tilePairs.length
                let getTile = Math.floor(Math.random() * tl);
                gameTiles.push(tilePairs[getTile]);
                tilePairs.splice(getTile,1);
            }
            // for(i=0; i< 4; i++){
            console.log("49 gameTiles = " + gameTiles);
            // }
            return gameTiles;
        }console.log("52 tileset = " + tileset);

    function startnow(){
        speak('welcome to the game of toys')
        startmodal.style.display = "none";
        }

    function changeGame(arrayTopic){
        // if(arrayTopic == "toys"){tileArray = JSON.parse(JSON.stringify(toysarray));}
        // else if (arrayTopic == "gems"){tileArray = JSON.parse(JSON.stringify(gemsarray));}
        // else if (arrayTopic == "animal"){tileArray = JSON.parse(JSON.stringify(animalarray));}
        // console.log("arrayTopic = "+ arrayTopic)
        tileArray = JSON.parse(JSON.stringify(arrayTopic));
        console.log("tileArray = "+ tileArray)
        gridInit(init(tileArray));
    }

    function gridInit(tilemix){
        console.log(tilemix);    
        qarray = JSON.parse(JSON.stringify(tilemix));
        let ql = qarray.length
        parentDiv.innerHTML = "";
        // let getface = Math.floor(Math.random() * ql);
        // let getmix = [];
        for(i=0; i< deep; i++){
                gridloco = wideId[i] + "1";
                console.log("qarray 65 = " + qarray[i][1]);
        		let qname = qarray[i][0];
                let qimg = "<img src='"+qarray[i][1]+"' name = '"+qname+"'/>";
                console.log("qarray[i][0] 150 = " + qname);
                let griditem1 = "<div class='grid-item tile' id='"+ gridloco + "' name = '"+qname+"'>" + qname + "</div>";
                gridloco = wideId[i] + "2";
                let griditem = "<div class='grid-item tile' id='"+ gridloco + "' >" + qimg + "</div>";
                let childDiv = document.createElement("div");
                childDiv.innerHTML = griditem1;               
                childDiv.addEventListener("click", tileturn);
                parentDiv.appendChild(childDiv);

                childDiv = document.createElement("div");
                childDiv.innerHTML = griditem;               
                childDiv.addEventListener("click", tileturn);
                parentDiv.appendChild(childDiv);
                }
            }

        
    function tileturn(){
        let clickTile = event.target.getAttribute("name");
        console.log("clickTile 171 = " + clickTile);
                    speak(clickTile);
                }

    function gameTopicInit(Names){
        for(i=0; i < Names.length; i +=2){
            let gempair = [];
            gempair[0] = "<img src='"+Names[i]+" />";
            gempair[1] = Names[i+1];
            gemPairs.push(gempair);
            }
            //document.getElementById("playbox").innerHTML="Toys";
            console.log("gameTopicInit complete")
        }  

    function arrayInit(bulkarray){
        //deep copy of variables to preserve content
        qarray = JSON.parse(JSON.stringify(gemPairs));
        tarray = [];
        
        //assign random q&a to gameTiles array
        let tilecount = wide*deep;
        while(tarray.length<tilecount) {
            let bulklength = bulkarray.length;
            let getTile1 = Math.floor(Math.random() *  bulklength);

            //get tiles and remove from tarray
            let tile1 = qarray[getTile1];
            qarray.splice(getTile1,1);
            gameTiles.push(tile1)
            //get Q&A and remove from qarray

            //console.log("tile = "+JSON.stringify(tile));
        }
        //startmodal.style.display = "block";
        console.log("arrayInit complete, " +JSON.stringify(gameTiles));
    }

    
    function speak(tileName){
        const voices = speechSynthesis.getVoices();
            let utterance = new SpeechSynthesisUtterance(tileName)
            //console.log( "voices 129 = " + voices)
            // 4 5 6 7 10 13 -14 -18 -24 30 34 -40 -44
            utterance.voice = voices[44];
            window.speechSynthesis.speak(utterance)
        // }
        }
    
  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
    spun.onclick = function() {
  nomodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    nomodal.style.display = "none"; 
    
  }
}


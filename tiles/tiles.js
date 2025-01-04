const tileContainer = document.getElementById("tileContainer")
const row = ['a', 'b', 'c','d', 'e','f','g','h']
let wide = 0
let deep = 0


let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
console.log("vw = "+vw)
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
console.log("vh = "+vh)
console.log("window.devicePixelRatio = "+window.devicePixelRatio)

//for mobile DPR 360 and 427 ***rep/-304
if(vw<300){ wide = 2; deep = 6} else
if(vw<500){ wide = 3; deep = 6} else
if(vw<700){ wide = 4; deep = 5} else
if(vw<1000){ wide = 5; deep = 4} 
else{ wide = 6; deep = 5} 
//         break;
//     case 2:
//         console.log("400px and up; "+vw+"px")
//         wide = 3
//         deep = 6
//       break;
//     case 3:
//         console.log("600px and up; "+vw+"px")
//         wide = 4
//         deep = 5
//       break;
//     case 4:
//         console.log("800px and up; "+vw+"px")
//         wide = 5
//         deep = 4
//       break;
//     case 5:
//         console.log("1000px and up; "+vw+"px")
//         wide = 5
//         deep = 4
//       break;
//     case 6:
//         console.log("1200px and up; "+vw+"px")
//         wide = 6
//         deep = 5
//       break;
//     default:
//         console.log("resolution; "+vw+"px")
//         wide = 5
//         deep = 4
//   } 

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
}
const info = "vw = "+vw+"\nvh = "+vh+"\nwindow.devicePixelRatio = "+window.devicePixelRatio
document.getElementById("info").innerText= info
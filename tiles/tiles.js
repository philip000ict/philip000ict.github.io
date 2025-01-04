const tileContainer = document.getElementById("tileContainer")
const row = ['a', 'b', 'c','d', 'e','f']
let wide = 0
let deep = 0


let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
console.log("vw = "+vw)
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
console.log("vh = "+vh)
console.log("window.devicePixelRatio = "+window.devicePixelRatio)

switch(Math.floor(vw/304)) {
    case 1:
      console.log("607px and down; "+vw+"px")
      wide = 3
      deep = 6
      break;
    case 2:
        console.log("608px and up; "+vw+"px")
        wide = 4
        deep = 5
      break;
    case 3:
        console.log("912px and up; "+vw+"px")
        wide = 5
        deep = 6
      break;
    case 4:
        console.log("1216px and up; "+vw+"px")
        wide = 6
        deep = 6
      break;
    default:
        console.log("resolution; "+vw+"px")
  } 

for (let d = 0; d<deep; d++){
    for (let w = 0; w<wide; w++){
        // Create category container and index
        const tileDiv = document.createElement('div');
        tileDiv.classList.add('tile');
        tileDiv.id=row[d]+w;
        tileDiv.innerText=row[d]+w;
        tileContainer.appendChild(tileDiv);
    }
}
//-------------------------------
//projet 3
//-------------------------------
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const btnCopy = document.querySelector(".copy");
const success = document.querySelector(".success");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A","B","C","D","E","F"];
//ça fonctionne aussi sans les guillemets
let copyColor;
btn.addEventListener("click",() =>{

let hexColor = "#";
for(let i = 0; i < 6; i++){
    hexColor += hex[getRandom()];
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
console.log(hexColor);
});

function getRandom(){
    return Math.floor(Math.random() * hex.length);
}

btnCopy.addEventListener("click", () =>{

    function copy(){
        copyColor = navigator.clipboard.writeText(color.innerText);
        console.log(color);
    }
    copy();
    success.style.display ="block";


    setTimeout(() => {
        success.style.display ="none";
    }, 2000);
})



color.addEventListener("click", () =>{
    function copy(){
        copyColor = navigator.clipboard.writeText(color.innerText);
        console.log(color);
    }
    copy();
    success.style.display ="block";


    setTimeout(() => {
        success.style.display ="none";
    }, 2000);

})
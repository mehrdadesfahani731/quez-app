const highscore=JSON.parse(localStorage.getItem("highscore"))||[];
const list =document.querySelector('ol');



const content=highscore.map((score,index)=>{
    return `<li>
    <span>${index+1}</span>
    <p>${score.username}</p>
    <span>${score.score}</span>

    
    
    
    </li>`
});
console.log(content)
list.innerHTML=content.join("");
const score=JSON.parse(localStorage.getItem('score'));
const highscore=JSON.parse(localStorage.getItem('highscore' )) ||[];


const input=document.querySelector('input');
const button=document.querySelector('button');
const scoreEle=document.querySelector('p');

scoreEle.innerHTML=score;

const savehandeler=()=>{
    if(!input.value ||score===0){
        alert('invalid username or score')
    }else{
        const finalyscore={score:score ,username:input.value};
        highscore.push(finalyscore);
        
        highscore.sort((a,b)=>b.score-a.score);
        highscore.splice(10);
        localStorage.setItem('highscore',JSON.stringify(highscore));
       // localStorage.removeItem('score');
        window.location.assign("/");
        console.log(finalyscore)
    }

}

button.addEventListener('click',savehandeler)






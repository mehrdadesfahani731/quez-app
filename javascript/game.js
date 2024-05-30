import formatdata from "./helper.js"

const level =localStorage.getItem("level") || "medium";


const loader=document.getElementById('loader');
const container=document.querySelector('.container');
const questiontext=document.getElementById('question-text');
const answerlist=document.querySelectorAll('.answer-text');
const scortext=document.getElementById('score');
const nextbutton =document.getElementById('next-button');
const questionnumber=document.getElementById('qustion-number');
const finishbutton =document.getElementById('finish-button');







const CORRECT_BONUS=10;
const url=
`https://opentdb.com/api.php?amount=10&difficulty=${level}&type=multiple`;

let formattedData=null;
let questionindex=0;
let crrectanswer=null;
let score=0;
let isacsepted=true;

const getdata= async()=>{
const respons=await fetch(url);
const json = await respons.json();
formattedData=formatdata(json.results);
console.log(formattedData)
start()
}

const start=()=>{
    showquestion()
    loader.style.display='none';
    container.style.display='block';
}

const showquestion=()=>{
  questionnumber.innerHTML=questionindex+1
   const {question,answers,correctanswerindex} =formattedData[questionindex];
   crrectanswer=correctanswerindex;
   console.log(crrectanswer)
   questiontext.innerHTML=question;
  answerlist.forEach((button,index) => {
    button.innerText=answers[index];
    
  });
};
const checkanswer=(event,index)=>{
  if(!isacsepted) return;
  isacsepted=false;

const iscorrect= index===crrectanswer ? true:false;
if(iscorrect){
event.target.classList.add("correct");
score+=CORRECT_BONUS;
scortext.innerHTML=score;


}else{
  event.target.classList.add("incorrect")
  answerlist[crrectanswer].classList.add('correct');
}
};
const nexthandeler=()=>{
   questionindex++;
  if(questionindex<formattedData.length){
    isacsepted=true;
    removeclass()
   
  showquestion()
  }else{
  finishhandeler()
}
}
const removeclass=()=>{
  answerlist.forEach(button=>button.className='answer-text')

}
const finishhandeler=()=>{
  localStorage.setItem("score",JSON.stringify(score))
  window.location.assign('/end.html')
}

window.addEventListener('load',getdata);
answerlist.forEach((button,index)=>{
    button.addEventListener('click',(event)=>checkanswer(event,index))
});
nextbutton.addEventListener('click',nexthandeler);
finishbutton.addEventListener('click',finishhandeler)


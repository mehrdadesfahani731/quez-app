const formatdata=(questiondata)=>{
  
    const result=questiondata.map(item=>{
        
        const questionobject={question:item.question};
        const answers=[...item.incorrect_answers];
        const correctanswerindex=Math.floor(Math.random()*4);
        
        answers.splice(correctanswerindex,0,item.correct_answer);
        questionobject.answers=answers;
        questionobject.correctanswerindex=correctanswerindex;
        
        
        return questionobject;
    })

return result;


}
export default formatdata;
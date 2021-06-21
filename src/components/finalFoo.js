let finalResoults = [];

export default function finalFoo(arrayOfAnswers, data, final){

    for(let i = 0; i < arrayOfAnswers.length; i++){
        if(typeof data[i].correct === 'object'){

           if(data[i].correct.length === arrayOfAnswers[i].userAnswer.length){
               finalResoults.push({
                   id: i+1,
                   res: isEqual(data[i].correct, arrayOfAnswers[i].userAnswer),
               })
           } else {
               finalResoults.push({
                   id: i+1,
                   res: false
               })
           }

        } else {
            finalResoults.push({
                id: i+1,
                res: arrayOfAnswers[i].userAnswer === data[i].correct,
            })
        }
    }
    console.log(finalResoults);
    final();
}



function isEqual (a, b) {
    let equal = [];
    a.forEach((el)=>{
       let res = b.filter((string) =>{
           return string === el
       })[0];

       res ? equal.push(true) : equal.push(false);

    })
    return !equal.includes(false); 
}
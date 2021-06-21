export default function isEqual(a, b){
    let equal = [];
    a.forEach((el)=>{
        let res = b.filter((string) =>{
            return string === el
        })[0];
    
        res ? equal.push(true) : equal.push(false);
    
    })
    return !equal.includes(false); 
}
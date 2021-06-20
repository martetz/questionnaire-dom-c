export default function Shuffle(arr){
    let newArr = arr.sort(() => Math.random() - 0.5);
    return newArr;

}
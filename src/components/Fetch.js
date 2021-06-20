let url = 'http://localhost:3001/api/quations';

export default function Fetch(){
    fetch(url)
        .then(res => res.json())
            .then (data => {
                // console.log(data);
                return data;
            }) 
            .catch(err => console.log(err))
}
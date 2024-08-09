const bodyWrite = document.querySelector(".api_body_Question")
const bodyWrite_2 = document.querySelector(".api_body_Answer")

const api_url = "https://official-joke-api.appspot.com/random_joke"

const fetchJokes = () =>{
    const response = fetch(api_url , {
        headers:{
            Accept:"application/JSON"   //!This headers is optional param but used to accept the incoming data in json format from the incoming api
        }
    }).then((val)=>{
        console.log(val);
        return val.json()
    }).then((val)=>{
        console.log(val.setup);
        console.log(val.punchline);
        bodyWrite.innerHTML = val.setup
        bodyWrite_2.innerHTML = val.punchline
        document.getElementById("fetchJoke").innerHTML = "Get Another Joke"
    }).catch((error)=>{
        console.log(error);
        
    })
}

document.getElementById("fetchJoke").addEventListener("click",fetchJokes)
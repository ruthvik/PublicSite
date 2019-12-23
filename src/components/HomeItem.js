import React, {useState, useEffect} from "react"


function HomeItem({match}){
    console.log(match)
    const [state, setState] = useState([])
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`,{
            method: 'GET',
            headers: {
              "Content-type": "application/json"
            }
          })
          .then(response => response.json())
          .then(json => setState(json))
          .catch(err=> console.log(err))
    },[])
    return (
        <div>
           <div>{state.id}</div>
           <div>{state.title}</div>
           <div>{state.body}</div>
        </div>
    )
}

export default HomeItem
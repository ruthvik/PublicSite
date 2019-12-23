import React, {useState, useEffect} from "react"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


function HomeItem({match}){
    console.log(match)
    const [state, setState] = useState([])
    const [LoaderState, setLoader]=useState(false)
    useEffect(()=>{
      setLoader(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`,{
            method: 'GET',
            headers: {
              "Content-type": "application/json"
            }
          })
          .then(response => response.json())
          .then(json => {
            setState(json)
            setLoader(false)
          })
          .catch(err=> console.log(err))
    },[])
    return (
     <div>
        <div class="row">
          
          <div>
        <div className='LoaderPosition'>
         <Loader visible = {LoaderState}
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={300000} //3 secs
       />
       </div>{!LoaderState ?
        <div class="column">
          <div class="card">
            <h3>{state.id}</h3>
            <p>{state.title}</p>
            <p>{state.body}</p>
          </div>
        </div> : ''
        }
        </div>
      </div>
      </div>
          
    )
}

export default HomeItem
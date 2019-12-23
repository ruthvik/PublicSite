import React, {useEffect, useState, useReducer} from "react"
import {Link} from "react-router-dom"

const initialState = {
    id:'',
    title:'',
    body:'',
    posts:[]
}
function appReducer(state, action){
    switch(action.type){
        case 'FIELD':
            return {
                ...state,
                [action.payload.fieldName]: action.payload.value
            }
        case 'SAVE':
            console.log(state)
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: action.payload.formData.id,
                        title: action.payload.formData.title,
                        body: action.payload.formData.body
                    }
                ]
               
        }
        case 'FETCH_SUCCESS':
            console.log(state)
            return {
               ...state,
               posts: action.payload.actualState
        }
    
    default:
        return state;
    }
}

function Blog() {
    const [state, setState] = useState([])
    const [Poststate, dispatch] = useReducer(appReducer, initialState)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'GET',
            headers: {
              "Content-type": "application/json"
            }
          })
          .then(response => response.json())
          .then(json => 
           { console.log(json)
            dispatch({type: 'FETCH_SUCCESS',
          payload: {
              actualState: json,
              isLoaded: true
          }})})
          .catch(err=> console.log(err))
    },[])
   
const renderItems = Poststate.posts.map((item)=> {
        return <Link to={`/Blog/${item.id}`}><li key={item.id}>{item.id}</li></Link>
    })
    const postDetails = (event)=>{
        event.preventDefault()
       
        dispatch({type: 'SAVE',
        payload: {
            formData: Poststate,
            actualState: state,
            isSaved: true
        }})
        //console.log(Poststate, state)
    }
    return(
        <div>
            <form onSubmit={postDetails}>
                <label htmlFor='id'>ID:</label>
                <input type='text' name='id' 
                value={Poststate.id}
                onChange={(e)=> dispatch(
                    {type: 'FIELD',
                    payload: {fieldName:'id',value:e.target.value}
                })}/> <br/>
                <label htmlFor='title'>Title: </label>
                <input type='text' name='title' 
                value={Poststate.title}
                onChange={(e)=>dispatch({type: 'FIELD',
                payload: {fieldName:'title',value:e.target.value}
                 })}/> <br/>
                <label htmlFor='body'>Body: </label>
                <input type='text' name='body'
                value={Poststate.body}
                onChange={(e)=>dispatch({type: 'FIELD',
                payload: {fieldName:'body',value:e.target.value}
                 })} /> <br/>
                <button  className="button">Post</button>
            </form>
        <ul>
            These are the posts
            {renderItems}
        </ul>
        </div>
    )
}


export default Blog
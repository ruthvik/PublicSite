import React, {useContext} from "react"
import {UserContext} from './UserContext'

function Details(props){
    console.log('rops')
    const msg = useContext(UserContext)
    return(
       <div>
           <span>{props.data.firstName}</span><br/>
           <span>{props.data.email}</span><br/>
           <span>{props.data.contact}</span>
           <span>{msg}</span>
       </div>
    )
}


export default Details
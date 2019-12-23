import React, {useState, useReducer} from "react"
import Details from './Details'
import { act } from "react-dom/test-utils";

const initialState = {firstName:'', 
email:'',
contact:'',
isSaved: false
}

function appReducer(state, action){
    switch(action.type){
        case 'FIELD': 
        console.log(action)
        return {
            ...state,
            [action.payload.fieldName]: action.payload.value
        }
        case 'SAVE':
            return {
                ...state,
                isSaved: action.payload.isSaved
            }
        default:
        return state
        
    }
}

function FormComponent()
{
    const [state, dispatch] = useReducer(appReducer, initialState)
    const submitForm = (e) => {
        e.preventDefault()
        console.log(state, window)
        dispatch({type: 'SAVE',
        payload: {
            isSaved: true
        }})
        //window.location.href = window.protocol + "//" + window.host + "/Details"
    }
    console.log('rendering')
    return(
            <aside>
            <h1 className="formHeader">YEAREND SUPER  SPECIAL: $57 4-week introductory membership (worth more than $400). Register now & start in December or January!</h1>
            <p className="formPara">Adults: Get 2 lessons a week for 4 weeks for $57 (worth more than $200) plus a FREE training manual (worth $30).  Join at the end and get one monthâs free training (worth up to $200). Children: ASK about our short-term holiday packages. Register now for your FREE trial lesson and get one monthâs free training (worth up to $200) when you join at the end.</p>
            <form onSubmit={(e) => submitForm(e)}>
                <div className="flex-container">
                <label htmlFor="firstName">Name:</label>
                <input type="text" 
                id="firstName"
                value={state.firstName}
                onChange={(e)=> dispatch(
                    {type: 'FIELD',
                    payload: {fieldName:'firstName',value:e.target.value}
                })}
                />
                </div>
                <br/>
                <div className="flex-container">
                 <label htmlFor="email">Email:</label>
                <input type="text" 
                id="email"
                value={state.email}
                onChange={(e)=> dispatch(
                    {type: 'FIELD',
                    payload: {fieldName:'email',value:e.target.value}
                })}
                />
                </div>
                 <br/>
                 <div className="flex-container">
                 <label htmlFor="contact">Contact:</label>
                <input type="text" 
                id="contact"
                onChange={(e)=> dispatch(
                    {type: 'FIELD',
                    payload: {fieldName:'contact',value:e.target.value}
                })}
                />
                </div>
                 <br/>
                <button 
                className="button"
                >Get More Info
                </button>
                {state.isSaved ?  <div>Saved Successfully</div> : ''}
               
            </form>
            <Details data={state}/>
            </aside>
    )
}

export default FormComponent
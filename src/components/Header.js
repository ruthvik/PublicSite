import React from "react"
import {Link} from "react-router-dom"



class Header extends React.Component {
    render(){
        const navItems = ['Home', 'About','Schedule','Children','Adults','Blog']
        const navListItems = navItems.map((item, index) =>{
            let strConcat = "/" + item
            console.log(strConcat)
       return <li key={index}>
            <Link key={index} to={strConcat}>{item}</Link>
        </li>
        })
        return (
            <header className="site-header">
            <img src="http://flexbox.ninja/assets/images/logo.svg" className="logo" width="170" height="95" alt="Flexbox.ninja" />
            
            <nav className="site-nav">
              <ul>
                {navListItems}
              </ul>
            </nav>
            
            <div className="actions">
               <div className="dropdown">
                 Settings [ User @ Company ]
                 <ul>
                   <li><a href="#0">Sub Item 1</a></li>
                   <li><a href="#0">Sub Item 2</a></li>
                   <li><a href="#0">Sub Item 3</a></li>
                 </ul>
              </div>
              
              <a href="#0" className="sign-out-link">Sign Out</a>
            </div>
          </header>
        
        )
    }
}


export default Header
import React from "react"
import Banner from './BannerComponent'
import ImageComponent from './ImageComponent'
import '../css/Header.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import {PaginationComponent} from './PaginationComponent'

import Header from './Header'

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            photos:[],
            isLoading: false,
            currentPage: 1,
            todosPerPage: 9,
            erroMessage:'',
            searchValue:''
        }
    }

    handleClick = (event) => {
    
      let element = document.querySelectorAll("#page-numbers span.active")
      console.log(element)
      if(element && element.length > 0){
        element.forEach(e=> e.classList.remove('active'))
        let activeElement = document.getElementById(event.target.id);
        activeElement.classList.add('active')
      }else{
        let activeElement = document.getElementById(event.target.id);
        activeElement.classList.add('active')
      }
        this.setState({
          currentPage: Number(event.target.id)
        });
      }


    handleSearch = (event) => {
      console.log(event.target.value)
      this.setState({[event.target.name]:event.target.value})
     
      console.log('Handle '+this.state.searchValue)
    }

    componentDidMount(){
        this.setState({isLoading: true});
        fetch('https://jsonplaceholder.typicode.com/photos',{
      method: 'GET',
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => response.json())
    .then(json => this.setState({photos: json,
    isLoading: false}))
    .catch(err=> this.setState({
        isLoading: false,
        erroMessage: err
    }))
    }

    render(){
      console.log('Re-render' + this.state.searchValue)
        const { photos, currentPage, todosPerPage } = this.state;
        const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(photos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentPhotos = this.state.photos.slice(indexOfFirstTodo, indexOfLastTodo);
        return(
            <div>
          
         <Banner />
         <input type="text" name="searchValue" value={this.searchValue} onChange={this.handleSearch}/>
         {!this.state.isLoading ? 
        <div>
         <div className="ImageflexContainer">
             <ImageComponent data={currentPhotos} searchValue={this.state.searchValue}/>
        </div>
        <div id="render-page-numbers">
        <PaginationComponent page={this.state} handleClick={this.handleClick}/>
        </div>
        </div>
         : 
         <div className='LoaderPosition'>Loading...!!!!
         <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={300000} //3 secs
       />
       </div>
         }
           
           </div>
        )
    }
}

export default Home
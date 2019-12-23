import React from "react"
import '../css/Header.css'

class ImageComponent extends React.Component{
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            filtered: []
        }
    }
    componentDidMount(){  
        console.log('child did mount')
        this.setState({filtered: this.props.data})
    }
    componentWillReceiveProps(nextProps)
    {
        console.log('props')
        if(nextProps.searchValue && nextProps.searchValue !== ''){
            const searchedList = this.state.filtered.filter(item=>{
                let oitem = item.title.toLowerCase()
                let osearchterm = this.props.searchValue.toLowerCase()
                return oitem.includes(osearchterm)
            })
            console.log(searchedList)
           this.setState({filtered: searchedList})
          } else {
              console.log('empty')
            this.setState({filtered: nextProps.data})
          }
        
    }
    render(){
        console.log('child '+ this.props.searchValue)
        
        // else {
        //     this.setState({filtered: this.props.data})
        // }
        return(
            this.state.filtered.map((item, index)=> 
            <ImageList data={item} key={item.id}
            />)
        )
    }
}

export const ImageList = (props) => {
    return (
        <div className="card">
                <img src={props.data.thumbnailUrl} alt="Avatar" style={{width: "100%"}}/>
                    <div className="container">
                        <h4><b>{props.data.title}</b></h4> 
                        <p>{props.data.url}</p> 
                    </div> 
        </div>
    )
   
}

export default ImageComponent
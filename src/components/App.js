import React from 'react';
import SearchBar from './SearchBar'
import ImageList from "./ImageList";
import {fetchImages,sort} from './../actions'
import {connect} from 'react-redux'
import './ImageList.css'
class App extends React.Component{
    
    constructor(props){
        super(props)
        this.onSearchSubmit=this.onSearchSubmit.bind(this)
    }
    componentDidMount(){
        this.props.fetchImages('')

    }
    onSearchSubmit(term){
        this.props.fetchImages(term)
    }
    render(){
        return (
        <div className="ui container" style={{marginTop:'10px'}}>
             <div className="segment">
                     <div className="left-segment">
                     <a onClick={(e)=>{e.preventDefault();this.props.sort('likes')}} style={{marginLeft:'5px'}} href="/#">Most Liked</a>
                     |
                     <a onClick={(e)=>{e.preventDefault();this.props.sort('comments')}} style={{marginLeft:'5px'}} href="/#">Most Commented</a>
                     </div>
                     <div className="right-segment">
            <SearchBar showButton={false} onSearchSubmit={this.onSearchSubmit}/>
            </div>
            </div>
            <ImageList image={this.props.image}/>
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
        return {image:state.images.images}

}
export default connect(mapStateToProps,{fetchImages,sort})(App);
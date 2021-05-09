import React from 'react';
import './ImageList.css'
import SearchBar from './SearchBar'
import CommentList from './CommentList'
import {addPost,like,unlike} from './../actions'
import {connect} from 'react-redux';
import Modal from './modal'
class ImageCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false
          };
        this.onSearchSubmit=this.onSearchSubmit.bind(this)
    }
    onSearchSubmit(term){
        this.props.addPost(term,this.props.image.id)
    }
    showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };
    showButton(){
        if(this.props.image.likedByMe){
            return <a onClick={(e)=>{e.preventDefault();this.props.unlike(this.props.image.id)}} style={{marginLeft:'5px'}} href="/#">Unlike</a>
        }else{
            return <a onClick={(e)=>{e.preventDefault();this.props.like(this.props.image.id)}} style={{marginLeft:'5px'}} href="/#">Like</a>
        }
    }
    
    render(){
        return (
            <div className="card">
                <div onClick={(e)=>{e.preventDefault();this.showModal()}} className="image-box">
                    <img key={this.props.image.id} src={this.props.image.url} alt={this.props.image.Flowers}/>
                </div>
                <div className="card-content">
                    <div>
                    <span>{this.props.image.likes} {this.showButton()}</span>
                    <span style={{float:'right'}}>{this.props.image.category}</span>
                    </div>
                    <SearchBar showButton={true} onSearchSubmit={this.onSearchSubmit}/>
                    <CommentList comments={this.props.image}/>
                    {this.state.show?<Modal handleClose={this.hideModal} show={this.state.show} image={this.props.image} />:null}
                    
                </div>

                
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {show:state.images.showPicture}

}
export default connect(mapStateToProps,{addPost,like,unlike})(ImageCard); 
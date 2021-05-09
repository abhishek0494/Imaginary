import React from 'react';
import './ImageList.css'
import ImageCard from './ImageCard'
import uuid from 'react-uuid'

class ImageList extends React.Component{
    generateImage=(image)=>{
        return image.map((image)=>{
            return <li key={uuid()}><ImageCard image={image} /></li>

        })
    }
    
    render(){
        return (
            <div>
                {this.props.image &&this.props.image.length?<React.Fragment><h5>Found: {this.props.image.length} images</h5>
                
                <div className="image-list"><ul>{this.generateImage(this.props.image)}</ul></div></React.Fragment>:<div>No Images Found</div>}
            </div>
        )
    }
}
export default ImageList;
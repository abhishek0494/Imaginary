import React from "react";
import './ImageList.css'

class SearchBar extends React.Component{
    state={term:""}
    search=(e)=>{
        e.preventDefault()
        this.props.onSearchSubmit(this.state.term)
    }
    
    render(){
        return (
                // <div className="segment">
                //     <div className="left-segment">
                //     <a className="linkbutton">Most Liked</a>
                //     |
                //     <a className="linkbutton">Most Commented</a>
                //     </div>
                //     <div className="right-segment">
                    <form className="form" onSubmit={this.search}>
                        <div className="field">
                            <input type="text" 
                            value={this.state.term}
                            placeholder="Search Images"
                            onChange={event=>this.setState({term:event.target.value})}/>
                            {this.props.showButton?<button className="btn" type="submit">POST</button>:null}
                            
                        </div>
                    </form>
                //     </div>
                    
                // </div>
            )
    }
}

export default SearchBar;
import {combineReducers} from 'redux';
import { FETCH_IMAGES,ADD_POST,LIKE,UNLIKE,SORT,DELETE_POST} from "./../actions/types";
const INITIAL_STATE={
    images:[],
}
const images=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case FETCH_IMAGES:
            return {...state,images:[...action.payload]}
        case ADD_POST:
            const index=state.images.findIndex(el=>el.id===action.payload.id)
            const newArray=[...state.images]
            newArray[index].comments.unshift(action.payload.value)
            return {...state,images:newArray}
        case DELETE_POST:
            const deleteFromindex=state.images.findIndex(el=>el.id===action.payload.id)
            const imgArr=[...state.images]
            imgArr[deleteFromindex].comments.splice(action.payload.listid,1)
            return {...state,images:imgArr}

        case LIKE:
            let ind=state.images.findIndex(el=>el.id===action.payload)
            let newImage=[...state.images]
            newImage[ind].likes+=1;
            newImage[ind].likedByMe=true
            return {...state,images:newImage}
        case UNLIKE:
            let id=state.images.findIndex(el=>el.id===action.payload)
            let newArrayImage=[...state.images]
            newArrayImage[id].likes-=1;
            newArrayImage[id].likedByMe=false
            return {...state,images:newArrayImage}
        case SORT:
            let Sorted=state.images.slice().sort((a,b)=>{
                if(typeof b[action.payload]==='number'){
                    return b[action.payload]-a[action.payload]
                }else if(Array.isArray(a[action.payload])){
                    return b[action.payload].length-a[action.payload].length
                }else{
                    return b[action.payload]-a[action.payload]
                }
            })
            return {...state,images:Sorted}
        default:
            return state
    }
}
export default combineReducers({
    images:images
})
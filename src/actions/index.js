import {FETCH_IMAGES,ADD_POST,LIKE,UNLIKE,SORT,DELETE_POST} from './types'
import imageApi from './../api/api';
export const like=(id)=>{
    return {
        type: LIKE,
        payload:id
    }
}

export const unlike=(id)=>{
    return {
        type: UNLIKE,
        payload:id
    }
}
export const sort=(id)=>{
    return {
        type: SORT,
        payload:id
    }
}
export const addPost=(value,id)=>{
    return {
        type: ADD_POST,
        payload:{value,id}
    }
}
export const deletePost=(listid,id)=>{
    return {
        type: DELETE_POST,
        payload:{listid,id}
    }
}

export const fetchImages=(term)=>async (dispatch)=>{
    if(!term)
        term=''
    let images=await imageApi.get('/Lokenath/MyRepo/master/Test/package.json')
    dispatch({
        type: FETCH_IMAGES,
        payload:images.data.pics.filter(ele=>ele.category.toLowerCase().includes(term))
    })
}
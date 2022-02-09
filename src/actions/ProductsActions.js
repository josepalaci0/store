import axios from 'axios';
import {ConfigTokens} from '../utils'

export const GetProductsList = (id) => async dispatch =>{
    try {

        dispatch({type:"PRODUCT_LIST_LOADING"})

        const res = await axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/`,ConfigTokens);

        dispatch({type:"PRODUCT_LIST_SUCCESS", payload:res.data})

    } catch (e) {

        dispatch({type:"PRODUCT_LIST_FAIL",})    

    }
};


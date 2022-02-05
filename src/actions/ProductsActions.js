import axios from 'axios';

export const GetProductsList = (id) => async dispatch =>{
    try {

        dispatch({type:"PRODUCT_LIST_LOADING"})

        const res = await axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`);

        dispatch({type:"PRODUCT_LIST_SUCCESS", payload:res.data, prodctId:id})

    } catch (e) {

        dispatch({type:"PRODUCT_LIST_FAIL",})    

    }
};


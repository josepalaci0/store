import React,{useState,useEffect}  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import _ from 'lodash';
import { GetProductsList } from '../actions/ProductsActions';


const Products = (props) => {
  const [search, setSearch] = useState("");
  console.log(`props`,props)
  const Dispatch = useDispatch();
  const ProductList = useSelector(state => state.ProductList);

  useEffect(() => {
    FechData("")
  }, []);

  const FechData = (id=``) =>{Dispatch(GetProductsList(id))}


  const ShowData = () =>{

    if(!_.isEmpty(ProductList.data)){
      return <p>have data</p>
    }
    if(ProductList.loading){
      return <p>loading.....</p>
    }
    if(ProductList.errorMsg !==""){
      return <p>{ProductList.errorMsg}</p>
    }
    return <p>unable to get data</p>
  }
  return (
  <div>
    <h1>Shop the Products ....</h1>  
    {ShowData()}
  </div>);
};

export default Products;

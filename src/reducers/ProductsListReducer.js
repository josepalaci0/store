const DefaultState = {
    loading: false,
    data: [],
    errorMsg: "",
    count: 0
}
const ProductListReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "PRODUCT_LIST_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };

        case "PRODUCT_LIST_FAIL":
            return {
                ...state,
                loading: false,
                data: action.payload,
                errorMsg: "unable to get product"
            };

        case "PRODUCT_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                data:action.payload.results,
                errorMsg: "unable to get product",
                count: action.payload.count
            };

        default:
            return state;
    }
}

export default ProductListReducer
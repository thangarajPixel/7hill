const categoryReducer = (state = null, action) => {
    switch (action.type) {
        case "PRODUCT_CATEGORY":
            return action.payload
        default:
            return state
    }
}
export default categoryReducer
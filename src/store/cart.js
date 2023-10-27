

const ADD_CART = 'cart/ADD';

export const addCart = (item) => {
    return {
        type: ADD_CART,
        item
    }
}

export default function cartReducer (state = {}, action) {
    switch (action.type) {
        case ADD_CART:
            return {...state, stacart: {...state.cart, item}};
        default:
            return state;
    }
}

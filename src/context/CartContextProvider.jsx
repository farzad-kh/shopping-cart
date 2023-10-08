import React, { useReducer, createContext, useState } from 'react';
import { offer } from '../helpers/functions';

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
    offer: false,
    offerPrice :0,
    totalOff:0
   

}
 const sumItems = (items) => {

     // const itemsQuantity = items.map(item=>item.quantity)
     // const itemsCounter = itemsQuantity.reduce((acc,cur)=>(acc+cur),0)
     
     const itemsCounter = items.reduce((acc, cur) => (acc + cur.quantity), 0)
     const total = +(items.reduce((acc, cur) => (acc + (cur.price * cur.quantity)), 0).toFixed(2))
     const offerPrice  = +(items.reduce((acc, cur) => (acc + ((cur.price * cur.offerPrice)/100) * cur.quantity ), 0).toFixed(2))
 

     const totalOff = +(items.reduce((acc, cur) => (acc + (cur.newOfferPrice * cur.quantity)), 0).toFixed(2))
 
     return{itemsCounter,total,totalOff, offerPrice }
 

    
 }


const cartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_ITEM":
           if (!state.selectedItems.find(item=>item.id===action.payload.id)) {
            state.selectedItems.push({
                ...action.payload,
                quantity:1
            })
           }

           
            return {

                ...state,
                // be ravesh paine migan merge kardan
                selectedItems:[...state.selectedItems],
                ...sumItems(state.selectedItems),

                checkout: false
            }
        case "REMOVE_ITEM":

            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);

            return {
                ...state,
                selectedItems: [...newSelectedItems],
                // bayad hasele newSlectedItem ro bedim be sumItems
                ...sumItems(newSelectedItems),



            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;

            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
                offer: true,


            }
        case "CLEAR":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false,
                offer: false,
      

            }
        

        default:
            return state;
    }
}






export const CartContext = createContext()
export const OfferTenContext = createContext()

const CartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)
    const [offerTen, setOfferTen] = useState(false)
    return (
        <CartContext.Provider value={{ state, dispatch }}>
        
            <OfferTenContext.Provider value={{ offerTen, setOfferTen }}>
                {children}
            </OfferTenContext.Provider>
        </CartContext.Provider>
    );
};

export default CartContextProvider;
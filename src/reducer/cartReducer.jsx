import React from 'react'

function cartReducer(state, action) {
  if (action.type == "ADD_TO_CART") {
    let { id, amount, product } = action.payload;
    
    let existingProduct = state.cart.find((curElem) => curElem.id == id)

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        
        if (curElem.id == id) {
          let newAmount = curElem.amount + amount;
          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount
          }
        } else {
          return curElem
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      }
    }
    else {
      let cartProduct;
      cartProduct = {
        id: id,
        title: product.title,
        amount,
        image: product.image,
        price: product.price,
        max: 99,
      }
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      }
    }
  }

  //inc & dec
  if (action.type == "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id == action.payload) {
        let decAmount = curElem.amount - 1;

        if(decAmount <= 1){
          decAmount = 1
        }

        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem
      }
    })
    return {
      ...state,
      cart: updatedProduct,
    }
  }

  if (action.type == "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id == action.payload) {
        let incAmount = curElem.amount + 1;

        if(incAmount >= curElem.max){
          incAmount = curElem.max
        }

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem
      }
    })
    return {
      ...state,
      cart: updatedProduct,
    }
  }

  if (action.type == "REMOVE_ITEM") {
    let updateCart = state.cart.filter((curElem) => {
      return curElem.id !== action.payload
    })
    return {
      ...state,
      cart: updateCart,
    }
  }

  if (action.type == "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    }
  }

  if (action.type == "CART_ITEM_PRICE_TOTAL") {
    let {total_item, total_price} = state.cart.reduce(
      (accum, curElem) => {
        let {price, amount} = curElem;
        accum.total_item += amount;
        accum.total_price += price * amount;
        return accum;
      },
      {
        total_item:0,
        total_price:0,
      }
    );
    return{
      ...state,
      total_item,
      total_price,
    }
  }

  return state;
}
export default cartReducer
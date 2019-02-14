
import firebase from "../../firebase";

export default class Appaction {

  static UPLOAD = "UPLOAD"
  static CLEAR_REDUX = "CLEAR_REDUX"
  static CART = "CART"
  static LOCALDATA = "LOCALDATA"
  static NAVBAR = "NAVBAR"
  static uploadd = (payload) => {
    alert("reached")
    return dispatch => {
      firebase
        .database()
        .ref("uploadimages")
        .push(payload)

      dispatch({
        type: Appaction.UPLOAD,

      })
    }
  }
  static cart = (payload) => {
    alert("reached")
    return dispatch => {
      var cartArray = JSON.parse(localStorage.getItem("cart"));
      if (cartArray === null) {
        var newArray = [];
        newArray.push(payload);
        //localStorage.setItem("cart", JSON.stringify(newArray));
        return dispatch({
          type: Appaction.CART,
          payload: localStorage.setItem("cart", JSON.stringify(newArray))
        })

      }
      else {
        cartArray.push(payload);
        //localStorage.setItem("cart", JSON.stringify(cartArray))
        return dispatch({
          type: Appaction.CART,
          payload: localStorage.setItem("cart", JSON.stringify(cartArray))
        })

      }

    }
  }

  static localdata = () => {
    return dispatch => {
      const cartItem = JSON.parse(localStorage.getItem("cart"));
      return dispatch({
        type: Appaction.LOCALDATA,
        payload: cartItem
      })
    }
  }
  static clear() {
    return dispatch => {
      dispatch({ type: Appaction.CLEAR_REDUX });
    };
  }

  static navbar = () => {
    return dispatch => {
      const admin = JSON.parse(localStorage.getItem("admin"))
      if (admin !== null) {
        var key = Object.keys(admin);
        var vals = admin[key[0]];
        return dispatch({
          type: Appaction.NAVBAR,
          payload: vals
        })
      }
    };
  }
}
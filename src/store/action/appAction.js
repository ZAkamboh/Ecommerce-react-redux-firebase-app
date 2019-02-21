
import firebase from "../../firebase";

export default class Appaction {

  static UPLOAD = "UPLOAD"
  static CLEAR_REDUX = "CLEAR_REDUX"
  static CART = "CART"
  static LOCALDATA = "LOCALDATA"
  static NAVBAR = "NAVBAR"
  static ADMINLOGIN = "ADMINLOGIN"
  static LOGOUT = "LOGOUT";
  static REMOVE_ITEM = "REMOVE_ITEM";
  static USERLOGIN="USERLOGIN"
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
    return dispatch => {
      var cartArray = JSON.parse(localStorage.getItem("cart"));
      var newArray = [];
      if (cartArray === null) {
        newArray.push(payload);
      }
      else {
        newArray = cartArray;
        newArray.push(payload);
      }
      localStorage.setItem("cart", JSON.stringify(newArray))
      return dispatch({
        type: Appaction.CART,
        payload: newArray
      })
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
  static userlogin=(payload)=>{
    return dispatch=>{
           firebase
            .auth()
            .signInWithEmailAndPassword(payload.email, payload.password)
            .then(response => {
                firebase
                    .database()
                    .ref(`userrecords/${response.user.uid}`)
                    .on("value",snap=>{
                       // var data=snap.val();
                        localStorage.setItem("userrecords",JSON.stringify(snap.val()))
                        dispatch({
                          type: Appaction.USERLOGIN,
                          payload: snap.val()
                        })
                    });
              
              // alert("successfully login")
               
            })
          
    }
  }

  static login = (payload) => {
    return dispatch => {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          firebase
            .database()
            .ref(`detailagain/${response.user.uid}`)
            .on("value", snap => {

              localStorage.setItem("admin", JSON.stringify(snap.val()))
              dispatch({
                type: Appaction.ADMINLOGIN,
                payload: snap.val()
              })
            });


        })

    }
  }
  static logout = () => {
    return dispatch => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          localStorage.removeItem("admin");
          localStorage.removeItem("userrecords");

          dispatch({
            type: Appaction.LOGOUT
          });
        });
    }
  }
  static removeItem = (payload) => {
    return dispatch => {
      var cartItems = JSON.parse(localStorage.getItem("cart"));
      var newArray;
      if (cartItems) {
        newArray = cartItems.filter((f, i) => i !== payload);
      }
      else {
        newArray = cartItems;
      }
      localStorage.setItem("cart",JSON.stringify(newArray))
      return dispatch({
        type: Appaction.REMOVE_ITEM,
        payload: newArray
      })
    }
  }
}
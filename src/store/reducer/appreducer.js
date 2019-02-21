import Appaction from "../action";

var st = {
    name: "zubair aslam fetch from reducer",
    cartItem: []
}

export default function appReducer(state = st, action) {
    switch (action.type) {
        case Appaction.UPLOAD:
            return Object.assign({}, state, { uploads: true })
        case Appaction.LOCALDATA:
            return Object.assign({}, state, { cartItem: action.payload })
        case Appaction.NAVBAR:
            return Object.assign({}, state, { navbar: action.payload })
        case Appaction.CART:
            return Object.assign({}, state, { cartItem: action.payload })
        case Appaction.ADMINLOGIN:
            return Object.assign({}, state, { loginadmin: true, navbar: action.payload })
            case Appaction.USERLOGIN:
            return Object.assign({}, state, { loginuser: true, loginuser: action.payload })
        case Appaction.LOGOUT:
            return Object.assign({}, state, { navbar: undefined,loginuser:undefined, logoutsuccessfull: true });
        case Appaction.REMOVE_ITEM:
            return Object.assign({}, state, { cartItem: action.payload })
        case Appaction.CLEAR_REDUX:
            return Object.assign({}, state, { uploads: false })
        default: return state
    }

}
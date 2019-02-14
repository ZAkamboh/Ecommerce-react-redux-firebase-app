import Appaction from "../action";

var st={
    name:"zubair aslam fetch from reducer",
    cartItem: null
}

export default function appReducer (state=st,action){
switch(action.type){
case Appaction.UPLOAD:
return Object.assign({},state,{uploads:true})
case Appaction.CLEAR_REDUX:
return Object.assign({},state,{uploads:false})
case Appaction.LOCALDATA:
return Object.assign({},state,{cartItem:action.payload})
case Appaction.NAVBAR:
return Object.assign({},state,{navbar:action.payload})

    default:return state

}

}
import { USER ,ADD_PRODUCTO,
  DEL_PRODUCTO,AMO_PRODUCTO
  } from "./actions";

const initialState = {
  Pedido: [],
  User: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER:
      return {
        ...state,
        User: action.payload,
      };
    case ADD_PRODUCTO:
      return {
        ...state,
        Pedido: [...state.Pedido, action.payload],
      };
    case DEL_PRODUCTO:
      return {
        ...state,
        Pedido: state.Pedido.filter(e=>e.Nombre!==action.payload),
      };
      case AMO_PRODUCTO:{
        let temp = state.Pedido
        temp[action.payload.index]={...temp[action.payload.index], Cantidad:action.payload.cantidad}
        return {
          ...state,
          Pedido: temp,
        };
      }

    default:
      return state;
  }
}

import {
  USER,
  ADD_PRODUCTO,
  RESET_USER,
  ADDED,
  DEL_PRODUCTO,
  AMO_PRODUCTO,
  SESSION_HASH,
  RESET_ADDED,
  PAYMENT_METHOD,
  DEL_PAYMENT_METHOD,
  SHIPPING_METHOD,
  ADD_PEDIDO
} from "./actions";

const initialState = {
  Added: false,
  Pedido: [],
  User: null,
  SessionHash: null,
  PaymentMethod: [],
  ShippingMethod: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER:
      return {
        ...state,
        User: action.payload,
      };
    case RESET_USER:
      return {
        ...state,
        User: null,
      };
    case ADDED:
      return {
        ...state,
        Added: action.payload,
      };
      case RESET_ADDED:
        return {
          ...state,
          Added: false,
        };
    case ADD_PRODUCTO:
      if (
        !state.Pedido.filter(
          (e) => e.Producto.name == action.payload.Producto.name
        ).length
      )
        return {
          ...state,
          Pedido: [...state.Pedido, action.payload],
        };
    case DEL_PRODUCTO:
      return {
        ...state,
        Pedido: state.Pedido.filter((e) => e.Nombre !== action.payload),
      };
    case AMO_PRODUCTO: {
      let temp = state.Pedido;
      temp[action.payload.index] = {
        ...temp[action.payload.index],
        Cantidad: action.payload.cantidad,
      };
      return {
        ...state,
        Pedido: temp,
      };
    }
    case SESSION_HASH: {
      return {
        ...state,
        SessionHash: action.payload,
      };
    }
    case PAYMENT_METHOD: {
      let temp = state.PaymentMethod;
      temp.push(action.payload[0]);
      return {
        ...state,
        PaymentMethod: temp,
      };
    }
    case DEL_PAYMENT_METHOD: {
      return {
        ...state,
        PaymentMethod: [],
      };
    }
    case SHIPPING_METHOD: {
      return {
        ...state,
        ShippingMethod: action.payload,
      };
    }
    case ADD_PEDIDO:
      let temp = state.Pedido
      console.log("aaaaaaaaaaaaaaaaaaaa", temp)
      action.payload.map(e=>{
        if (
          !state.Pedido.filter(
            (f) => f.Producto?.name ==e.name
          ).length
        ){
          temp.push({Producto:e,
            Precio: e.price_unit,
            Nombre: e.name,
            Cantidad:e.price_total/e.price_unit})
        }
      })
        return {
          ...state,
          Pedido: temp,
        };
    default:
      return state;
  }
}

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
  CLEAR_CARRO,
  COEFICIENTE,
  SHIPPING_METHOD,
  ONBOARD,
  ADD_PEDIDO,
  INITIAL
} from "./actions";

const initialState = {
  Added: false,
  Pedido: [],
  User: null,
  Coeficiente: null,
  SessionHash: null,
  PaymentMethod: [],
  ShippingMethod: null,
  OnBoard: true,
  Initial: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case COEFICIENTE:
      return {
        ...state,
        Coeficiente: action.payload,
      };
    case USER:
      return {
        ...state,
        User: action.payload,
      };
    case CLEAR_CARRO:
      return {
        ...state,
        Pedido: [],
      };
    case INITIAL:
      return {
        ...state,
        Initial: action.payload,
      };
    case ONBOARD:
      return {
        ...state,
        OnBoard: false,
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
        state.Pedido.filter(
          (e) => e.Producto.code == action.payload.Producto.code
        ).length == 0
      ) {
        return {
          ...state,
          Pedido: [...state.Pedido, action.payload],
        };
      } else {
        let setPedido = [];

        state.Pedido.map((e) => {
          if (action.payload.Producto.code == e.Producto.code) {
            e = {
              ...e,
              Cantidad: e.Cantidad + action.payload.Cantidad
            }
          }

          setPedido.push(e);
        })

        return {
          ...state,
          Pedido: [...setPedido],
        };
      }
    case DEL_PRODUCTO:
      return {
        ...state,
        Pedido: state.Pedido.filter((e) => e.Code !== action.payload),
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
    case ADD_PEDIDO: {

      if (
        state.Pedido.filter(
          (e) => e.Producto.code == action.payload.Producto.code
        ).length == 0
      ) {
        return {
          ...state,
          Pedido: [...state.Pedido, action.payload],
        };
      } else {
        let setPedido = [];

        state.Pedido.map((e) => {
          if (action.payload.Producto.code == e.Producto.code) {
            e = {
              ...e,
              Cantidad: e.Cantidad + action.payload.Cantidad
            }
          }

          setPedido.push(e);
        })

        return {
          ...state,
          Pedido: [...setPedido],
        };
        /*
      let temp = state.Pedido
      //console.log("aaaaaaaaaaaaaaaaaaaa", temp)
      action.payload.map(e => {
        if (
          !state.Pedido.filter(
            (f) => f.Producto?.code == e.code
          ).length
        ) {
          temp.push({
            Producto: e,
            Precio: e.price_unit,
            Nombre: e.name,
            Code: e.code,
            Cantidad: e.price_total / e.price_unit
          })
        }
      })
      return {
        ...state,
        Pedido: temp,
      };
      */
    }
    }
    default:
      return state;
  }
}

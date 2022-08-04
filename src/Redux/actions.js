
export const USER = "USER";
export const ADD_PRODUCTO = "ADD_PRODUCTO";
export const DEL_PRODUCTO = "DEL_PRODUCTO";
export const AMO_PRODUCTO = "AMO_PRODUCTO";






export function user(user) {
  return {
    type: USER,
    payload: user,
  };
}

export function addProducto(payload) {
  return {
    type: ADD_PRODUCTO,
    payload: payload,
  };
}

export function delProducto(payload) {
  return {
    type: DEL_PRODUCTO,
    payload: payload,
  };
}
export function amoProducto(payload) {
  return {
    type: AMO_PRODUCTO,
    payload: payload,
  };
}


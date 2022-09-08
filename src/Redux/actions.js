
export const USER = "USER";
export const ADD_PRODUCTO = "ADD_PRODUCTO";
export const DEL_PRODUCTO = "DEL_PRODUCTO";
export const AMO_PRODUCTO = "AMO_PRODUCTO";
export const SESSION_HASH = "SESSION_HASH";
export const PAYMENT_METHOD = "PAYMENT_METHOD";
export const DEL_PAYMENT_METHOD = "DEL_PAYMENT_METHOD";
export const SHIPPING_METHOD = "SHIPPING_METHOD";


export function user(user) {
  return {
    type: USER,
    payload: user,
  };
}
export function SessionHash(hash) {
  return {
    type: SESSION_HASH,
    payload: hash,
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

export function paymentMethod(payload) {
  return {
    type: PAYMENT_METHOD,
    payload: payload,
  };
}

export function delPaymentMethod(payload) {
  return {
    type: DEL_PAYMENT_METHOD,
    payload: payload,
  };
}
export function shippingMethod(payload) {
  return {
    type: SHIPPING_METHOD,
    payload: payload,
  };
}



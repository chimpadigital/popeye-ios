
export const USER = "USER";




export function user(user) {
  return {
    type: USER,
    payload: user,
  };
}



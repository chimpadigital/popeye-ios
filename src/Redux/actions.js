
export const USER_ID = "USER";
export const USER_ROLE = "USER_ROLE";




export function userRole(UserRole) {
  return {
    type: USER_ROLE,
    payload: UserRole,
  };
}


export function userId(UserId) {
  return {
    type: USER_ID,
    payload: UserId,
  };
}

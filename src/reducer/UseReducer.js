export const initialState = null;
export const reducer = (state, action) => {
    if(action.type === "USER"){
        return action.payload;
    }
    if(action.type === "ADMIN"){
        return action.payload;
    }
    if(action.type === "RECRUITER"){
        return action.payload;
    }
    if(action.type === "LOGINOUT"){
        return action.payload;
    }
    return state;
}
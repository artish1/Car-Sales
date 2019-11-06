//Action Types
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

//Action creators

export const addFeature = id => ({ type: ADD_FEATURE, payload: id });
export const removeFeature = id => ({ type: REMOVE_FEATURE, payload: id });

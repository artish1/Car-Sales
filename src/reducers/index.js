import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/index";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

const getFeatureById = (state, id) => {
  const featuresFound = state.additionalFeatures.filter(
    feature => feature.id === id
  );
  if (featuresFound.length >= 1) return featuresFound[0];

  return null;
};

export const reducer = (state = initialState, action) => {
  console.log("Reducerrrr");
  switch (action.type) {
    case ADD_FEATURE:
      const feature = getFeatureById(state, action.payload); //Id comes from payload
      if (!feature) return state; //If we did not find a feature by that id, return original state

      if (state.car.features.includes(feature)) return state; //If feature already added, return state
      return {
        ...state,
        car: { ...state.car, features: [...state.car.features, feature] }
      };
    case REMOVE_FEATURE:
      return state;
    default:
      return state;
  }
};

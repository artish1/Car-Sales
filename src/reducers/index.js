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

const calculateAdditionalPrice = features => {
  const newAdditionalPrice = features.reduce(
    (accumulator, feature) => accumulator + feature.price,
    0
  );
  return newAdditionalPrice;
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      const feature = getFeatureById(state, action.payload); //Id comes from payload
      if (state.car.features.includes(feature)) return state; //If feature already added, return state
      const newFeatures = [...state.car.features, feature]; //Create new features array with our added feature.
      return {
        ...state,
        additionalPrice: calculateAdditionalPrice(newFeatures), //Also add calculated additional prices from added feature.
        car: { ...state.car, features: newFeatures }
      };

    case REMOVE_FEATURE:
      //Reduce array to that of only items NOT removed.
      const newRemovedFeatures = state.car.features.reduce(
        (accumulator, feature) => {
          if (feature.id === action.payload) return [...accumulator];
          return [...accumulator, feature];
        },
        []
      );

      return {
        ...state,
        additionalPrice: calculateAdditionalPrice(newRemovedFeatures), //Re-calculate additional prices from change of features
        car: { ...state.car, features: newRemovedFeatures }
      };

    default:
      return state;
  }
};

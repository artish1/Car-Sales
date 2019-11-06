import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddedFeature from "./AddedFeature";

//Actions
import { removeFeature } from "../actions/index";

const AddedFeatures = () => {
  const car = useSelector(state => state.car);
  const dispatch = useDispatch();
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature
              handleRemove={() => dispatch(removeFeature(item.id))}
              key={item.id}
              feature={item}
            />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;

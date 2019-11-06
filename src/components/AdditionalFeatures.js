import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdditionalFeature from "./AdditionalFeature";
import { addFeature } from "../actions/index";

const AdditionalFeatures = () => {
  const additionalFeatures = useSelector(state => state.additionalFeatures);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature
              handleAdd={() => dispatch(addFeature(item.id))}
              key={item.id}
              feature={item}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;

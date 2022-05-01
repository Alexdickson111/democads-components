import React from "react";

export interface AddProps {
  label: string;
}

const AdBox = (props: AddProps) => {
  return <div>{props.label}</div>;
};

export default AdBox;
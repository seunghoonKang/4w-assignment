import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const param = useParams();
  console.log(param.id);

  return <div>Detail</div>;
}

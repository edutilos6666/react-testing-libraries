import React, { useState, useCallback } from "react";
import useClientRect from "./useClientRect";

function ClientRectExample() {
  const [rectH1, refH1] = useClientRect();
  const [rectH2, refH2] = useClientRect();
  const [rectH3, refH3] = useClientRect();
  const [rectH4, refH4] = useClientRect();
  const [rectH5, refH5] = useClientRect();
  const [rectH6, refH6] = useClientRect();

  return (
    <div>
      <div className="d-flex flex-row">
        <h1 ref={refH1}>Header 1</h1>
        <span className="ml-3 mt-3">
          width = {rectH1 ? rectH1.width : 0}px and height ={" "}
          {rectH1 ? rectH1.height : 0}px
        </span>
      </div>

      <div className="d-flex flex-row">
        <h2 ref={refH2}>Header 2</h2>
        <span className="ml-3 mt-2">
          width = {rectH2 ? rectH2.width : 0}px and height ={" "}
          {rectH2 ? rectH2.height : 0}px
        </span>
      </div>

      <div className="d-flex flex-row">
        <h3 ref={refH3}>Header 3</h3>
        <span className="ml-3 mt-1">
          width = {rectH3 ? rectH3.width : 0}px and height ={" "}
          {rectH3 ? rectH3.height : 0}px
        </span>
      </div>

      <div className="d-flex flex-row">
        <h4 ref={refH4}>Header 4</h4>
        <span className="ml-3 mt-0">
          width = {rectH4 ? rectH4.width : 0}px and height ={" "}
          {rectH4 ? rectH4.height : 0}px
        </span>
      </div>

      <div className="d-flex flex-row">
        <h5 ref={refH5}>Header 5</h5>
        <span className="ml-3 mt-0">
          width = {rectH5 ? rectH5.width : 0}px and height ={" "}
          {rectH5 ? rectH5.height : 0}px
        </span>
      </div>

      <div className="d-flex flex-row">
        <h6 ref={refH6}>Header 6</h6>
        <span className="ml-3 mt-0">
          width = {rectH6 ? rectH6.width : 0}px and height ={" "}
          {rectH6 ? rectH6.height : 0}px
        </span>
      </div>
    </div>
  );
}

export default ClientRectExample;

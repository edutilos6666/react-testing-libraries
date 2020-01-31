import React, { useState, useEffect, useRef } from "react";
import AutoResponsive from "autoresponsive-react";

const AutoresponsiveExample = props => {
  let arrayList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let _styleList = {};
  let getItemStyle = function() {
    return {
      width: 150,
      height: parseInt(Math.random() * 20 + 12, 10) * 10,
      color: "#3a2d5b",
      cursor: "pointer",
      borderRadius: 5,
      boxShadow: "0 1px 0 rgba(255,255,255,0.5) inset",
      backgroundColor: "#5c439b",
      borderColor: "#796b1d",
      fontSize: "80px",
      lineHeight: "100px",
      textAlign: "center",
      fontWeight: "bold",
      textShadow: "1px 1px 0px #816abe",
      userSelect: "none"
    };
  };

  const events = ["clickItemHandle"];

  arrayList.map(function(i) {
    _styleList[i] = getItemStyle();
  });

  const [styleList, setStyleList] = useState(_styleList);
  const [containerWidth, setContainerWidth] = useState();
  const containerRef = useRef(null);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        if (containerRef && containerRef.current)
          setContainerWidth(containerRef.current.clientWidth);
      },
      false
    );
  });

  const clickItemHandle = e => {
    let nodes = e.target.parentNode.childNodes;
    const tmp = { ...styleList };
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i] === e.target) {
        tmp[i].width = tmp[i].width === "310px" ? "150px" : "310px";
      }
    }

    setStyleList({ ...tmp });

    // debugger;
  };

  const getAutoResponsiveProps = () => {
    return {
      itemMargin: 10,
      containerWidth: containerWidth || props.containerWidth,
      itemClassName: "item",
      transitionDuration: ".8",
      transitionTimingFunction: "easeIn"
    };
  };

  return (
    <AutoResponsive ref={containerRef} {...getAutoResponsiveProps()}>
      {arrayList.map(i => {
        return (
          <div
            key={i}
            onClick={clickItemHandle}
            className="item"
            style={styleList[i]}
          >
            {i}
          </div>
        );
      })}
    </AutoResponsive>
  );
};

export default AutoresponsiveExample;

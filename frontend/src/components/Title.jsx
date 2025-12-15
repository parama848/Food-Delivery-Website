import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <>
    <div>
      <h1 className="text-3xl sm:text-[25px] font-semibold">
        {text1} <span className="text-green-500">{text2}</span>
      </h1>
    </div>
    </>
  );
};

export default Title;

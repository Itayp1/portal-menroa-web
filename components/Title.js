import React from "react";

const Title = ({ pageTitleDetails: { text, fontColor, fontSize }, isSubTitle }) => (
  <>
    {isSubTitle ? <h2>{text}</h2> : <h1>{text}</h1>}
    <style jsx>{`
      h1 {
        color: ${fontColor || "black"};
        font-size: ${fontSize || "17px"};
      }
      h2 {
        color: ${fontColor || "black"};
        font-size: ${fontSize || "17px"};
      }
    `}</style>
  </>
);

export default Title;

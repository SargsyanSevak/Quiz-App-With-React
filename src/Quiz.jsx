import React from "react";


function Quiz({question,chooseVariant,step,questions}) {
    const percent =Math.round((step / questions.length) * 100)
  
    return (
      <>
        <div className="progress">
          <div style={{ width: `${percent}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {
            question.variants.map((text,i) => <li key={i} onClick={() => chooseVariant(i)}>{text}</li>)
          }
        </ul>
      </>
    );
  }
  export default Quiz
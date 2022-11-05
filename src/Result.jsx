import React from "react";
function Result({correctAnswers,questions}) {
    return (
      <div className="result">
        <img src={correctAnswers >= 8 ? "https://media.tenor.com/yFi06hL-W1IAAAAM/smiley.gif" : correctAnswers <= 7 && correctAnswers >= 3? "https://media1.giphy.com/media/ehC4SqtNcEeLAiu66w/giphy.gif?cid=6c09b9526cd9fb2d472280811bb4f7c0989ec3974d16a400&rid=giphy.gif&ct=g" : correctAnswers < 3 ? "https://media.tenor.com/1ApT-pZWryIAAAAM/crying-emoji.gif"  : ''}/>
        <h3>{
        correctAnswers >= 8 ? "Ձեր մեջ ապրում է Խորենացու հոգին" : correctAnswers <= 7 && correctAnswers >= 3? "Դուք ունեք բավարար գիտելիքներ" : correctAnswers < 3 ? "Նորից կարդացեք Հայոց պատմություն"  : ''}</h3>
        <h2>{correctAnswers} / {questions.length}</h2>
        <a href='/'><button>Կրկին Փորձել</button></a> 
      </div>
    );
  }
  
  export default Result
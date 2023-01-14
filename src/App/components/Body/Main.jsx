import "./style.scss";
import slots from "../../svg/slots.svg";
import shine from "../../svg/Destelloedu.png";
import mayor from "../../svg/candidatos.png";
import title from "../../svg/title.png";
import { useContext, useState } from "react";


export const Main = () => {
  const [state, setState] = useState([]);
  let t=0;

  const number = () => {

   
    
    let id100k = setInterval(()=>{
      document.querySelector("#_100k > h1").innerHTML=(Math.random() * (1 - 0) + 0 ).toFixed(0);
    },100)
    let id10k = setInterval(()=>{
      document.querySelector("#_10k > h1").innerHTML=(Math.random() * (5 - 0) + 0 ).toFixed(0);
    },100)
    let id1k = setInterval(()=>{
      document.querySelector("#_1k > h1").innerHTML=(Math.random() * (9 - 0) + 0 ).toFixed(0);
    },100)
    let id100 = setInterval(()=>{
      document.querySelector("#_100 > h1").innerHTML=(Math.random() * (9 - 0) + 0 ).toFixed(0);
    },100)
    let id10 = setInterval(()=>{
      document.querySelector("#_10 > h1").innerHTML=(Math.random() * (9 - 0) + 0 ).toFixed(0);
    },100)
    let id1 = setInterval(()=>{
      document.querySelector("#_1 > h1").innerHTML=(Math.random() * (9 - 0) + 0 ).toFixed(0);
    },100)

    setTimeout(()=>{
      clearInterval(id100k)
    },3000)
    setTimeout(()=>{
      clearInterval(id10k)
    },4000)
    setTimeout(()=>{
      clearInterval(id1k)
    },5000)
    setTimeout(()=>{
      clearInterval(id100)
    },6000)
    setTimeout(()=>{
      clearInterval(id10)
    },7000)
    setTimeout(()=>{
      clearInterval(id1)
    },8000)

    return
  }

  return (
    <section>
      <article id="top">
        <img src={title} />
      </article>
      <div id="alcalde">
        <img src={mayor} />
      </div>
      <div id="shine">
        <img src={shine} />
      </div>
      <article id="body">
        <div className="slotsContainer">
          <img src={slots} />
        </div>
        <div className="numbersContainer">
          <div id="_100k">
            <h1></h1>
          </div>
          <div id="_10k">
            <h1></h1>
          </div>
          <div id="_1k">
            <h1></h1>
          </div>
          <div id="_100">
            <h1></h1>
          </div>
          <div id="_10">
            <h1></h1>
          </div>
          <div id="_1">
            <h1></h1>
          </div>
        </div>
      </article>
      <article id="footer">
        <button onClick={number}>Suerte para Todos!!</button>
      </article>
    </section>
  );
};

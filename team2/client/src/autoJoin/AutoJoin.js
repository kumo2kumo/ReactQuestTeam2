import React from "react";

const start_time = new Date("2021-02-08T15:30:00Z"); //開始時間入れる
let is_started = false;

//! 現在時間をカウントしていく
const prsentTImeTimer = setInterval(() => {
  const dt = new Date();
  const joinTImer = setInterval(autoJoin, 20 * 1000, dt, joinTImer); //return timerID  
}, 60 * 1000);

// TODO componentDidMount()に設定 

const autoJoin = (dt, timer) => {
  //もし現時刻==data[1]なら
    if(dt.getMonth() === start_time.getMonth() &&
      dt.getDate() === start_time.getDate() &&
      dt.getHours() === start_time.getHours() &&
      dt.getMinutes() === start_time.getMinutes() 
    ) {
        window.open("https://ja.reactjs.org/docs/state-and-lifecycle.html");//URL入れる
        is_started = true;
        clearInterval(timer);
      }
  console.log('func; '+ is_started);
};

// const joinTImer = setInterval(autoJoin, 20 * 1000, dt); //return timerID  

// Leave: もし現時刻==data[2]ならALT + Q -> enter

class AutoJoin extends React.Component {
  render () {
    return (
      <div>
        Autojoin
        <section>
          <p>zoom meeting url</p>
          <p>zoom meeting 開始時間</p>
          <p>メモ</p>
        </section>   
      </div>
      
    );
  }
}

export default AutoJoin;

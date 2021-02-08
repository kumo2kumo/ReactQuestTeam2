// １つのカードコンポーネントに入れるの想定
// TODO componentDidMount()に設定 

import React from "react";

const start_time = new Date("2021-02-08T16:16:00Z"); //開始時間入れる
let is_started = false;

//現在時間を30秒ごとに更新していく
const prsentimeTimer = setInterval(() => {
  
    const dt = new Date();
    const joinTImer = setInterval(joinCheck, 20 * 1000, dt); //return timerID  
    console.log(dt);
  //60秒ごとに現在タイムと開始時間が合うかチェック
 
  // ! 停止が効いてない
  if(is_started){
    clearInterval(joinTImer);
    clearInterval(prsentimeTimer);
  }
}, 20 * 1000);

  
  const joinCheck = (dt) => {
    //もし現時刻==data[1]なら
      if(dt.getMonth() === start_time.getMonth() &&
        dt.getDate() === start_time.getDate() &&
        dt.getHours() === start_time.getHours() &&
        dt.getMinutes() === start_time.getMinutes() 
      ) {
          window.open("https://ja.reactjs.org/docs/state-and-lifecycle.html");//URL入れる
          is_started = true;
          // clearInterval(joinTImer);
        }
    console.log('func; '+ is_started);
    };
    
  // const joinTImer = setInterval(joinCheck, 20 * 1000, dt); //return timerID  

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

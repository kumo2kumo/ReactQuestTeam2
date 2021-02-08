// １つのカードコンポーネントに入れるの想定
import React from "react";

const start_time = new Date("2021-02-08T17:53:00Z"); //開始時間入れる
let is_started = false;

//現在時間を60秒ごとに更新していく = 開始時間minutes + 1から対象
const autoJoinTimer = setInterval(() => {
  const dt = new Date();
  console.log(dt);
  if( dt.getMonth() === start_time.getMonth() &&
      dt.getDate() === start_time.getDate() &&
      dt.getHours() === start_time.getHours() &&
      dt.getMinutes() === start_time.getMinutes() 
  ) {
      window.open("https://ja.reactjs.org/docs/state-and-lifecycle.html");//URL入れる
      is_started = true;
      clearInterval(autoJoinTimer);
    }
    console.log('func; '+ is_started);
}, 60 * 1000);

// Leave: もし現時刻==data[2]ならALT + Q -> enter

class AutoJoin extends React.Component {
  componentDidMount() {
    // autoJoinTimer呼び込む
  }
  render () {
    return (
      <div>
        zoom予定カード
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

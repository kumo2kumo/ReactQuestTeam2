export const AutoJoin = (scheculedTime, url) => {
  const start_time = new Date(scheculedTime);
  const now = new Date();

  if (now <= start_time) {
    let is_started = false;
    const autoJoinTimer = setInterval(() => {
        const dt = new Date()
        console.log(dt);
        if (dt.getMonth() === start_time.getMonth() &&
            dt.getDate() === start_time.getDate() &&
            dt.getHours() === start_time.getHours() &&
            dt.getMinutes() === start_time.getMinutes()
        ) {
            window.open(url);//URL入れる
            is_started = true;
            clearInterval(autoJoinTimer);
        }
        console.log('func; ' + is_started);
    }, 60 * 1000);
  }
}
  

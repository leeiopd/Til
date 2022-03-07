function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.Hours();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  hour = hour >= 10 ? hour : "0" + hour;

  return { month, day, hour };
}

/////////////////////////////////

function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.Hours();

  month = month >= 10 ? month : "0" + month;
  day = day >= 10 ? day : "0" + day;
  hour = hour >= 10 ? hour : "0" + hour;

  return { month, day, hour };
}

function getDateTime() {
  const currentDateTime = getDateTime(new Date());

  return {
    month: currentDateTime.month + "달 전",
    day: currentDateTime.day + "일 전",
    hour: currentDateTime.hour + "시간 전",
  };
}

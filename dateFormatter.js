formatDate = date => {
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  };
  const days = {
    1: "st",
    2: "nd",
    3: "rd",
    4: "th",
    5: "th",
    6: "th",
    7: "th",
    8: "th",
    9: "th", 
    0: "th"
  };

  date = date.split("-");
  let day = date.pop(-1);
  let month = date.pop(-1);
  month = months[month];
  if (day >= 10) {
    console.log(day / day[1]);
    day = day + days[day[1]];
  } else {
    day = day + days[day];
    console.log(day);
  }

  let fullDate = month + "  " + day;

  return fullDate;
};

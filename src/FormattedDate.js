import React from "react";

export default function FormattedDate(props) {
  console.log(props);
  let day = props.date.getDay();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return `Last Updated: ${days[day]} ${hours}:${minutes}`;
}

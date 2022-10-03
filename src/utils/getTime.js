const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getTime = (timeString) => {
  const date = new Date(timeString);

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

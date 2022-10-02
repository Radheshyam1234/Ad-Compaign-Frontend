const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DateConverter = (date) => {
  const darr = date.split("-");
  const year = darr[0];
  const month = months[darr[1] - 1];
  const day = darr[2];
  return `${day}${month}${year}`;
};

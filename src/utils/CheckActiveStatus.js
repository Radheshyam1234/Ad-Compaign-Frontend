export const CheckActiveStatus = (startDate, endDate) => {
  if (new Date().getTime() > new Date(endDate).getTime()) return "Exhausted";
  else return "Active";
};

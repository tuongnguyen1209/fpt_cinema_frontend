export const FormatDateRequest = (d = new Date()) => {
  let month = d.getMonth() + 1;
  month = `0000${month}`;
  month = month.substr(month.length - 2, 2);
  let day = d.getDate();
  day = `0000${day}`;
  day = day.substr(day.length - 2, 2);

  return `${d.getFullYear()}-${month}-${day}`;
};

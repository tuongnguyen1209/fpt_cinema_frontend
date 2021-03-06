export const FormatDateRequest = (d = new Date()) => {
  let month = d.getMonth() + 1;
  month = `0000${month}`;
  month = month.substr(month.length - 2, 2);
  let day = d.getDate();
  day = `0000${day}`;
  day = day.substr(day.length - 2, 2);

  return `${d.getFullYear()}-${month}-${day}`;
};

export const formatPrice = (tien) => {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 1,
  }).format(tien);
};

export const formatPrice2 = (tien) => {
  return new Intl.NumberFormat("it-IT", {
    maximumFractionDigits: 1,
  }).format(tien);
};
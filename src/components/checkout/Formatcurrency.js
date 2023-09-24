const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "EGP",
  style: "currency",
});
const formatcurrency = (number) => {
  return CURRENCY_FORMATTER.format(number);
};
export default formatcurrency;

export const formatDate = (isoDateString, timeZone = "Asia/Bangkok") => {
  const date = new Date(isoDateString);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: timeZone,
    hour12: false,
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  return formatter.format(date);
};

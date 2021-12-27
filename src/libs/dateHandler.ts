export const getDateFormated = (date?: Date) => {
  const baseDate = date || new Date();
  const year = `year=${baseDate.getUTCFullYear()}`;
  const month = `month=${baseDate.getUTCMonth() + 1}`;
  const day = `day=${
    baseDate.getUTCDate() > 9
      ? baseDate.getUTCDate()
      : "0" + baseDate.getUTCDate()
  }`;
  const hour = `hour=${
    baseDate.getUTCHours() > 9
      ? baseDate.getUTCHours()
      : "0" + baseDate.getUTCHours()
  }`;
  console.log("year: ", year);
  console.log("MONTH: ", month);
  console.log("day: ", day);
  console.log("hour: ", hour);
  return `${year}/${month}/${day}/${hour}`;
};

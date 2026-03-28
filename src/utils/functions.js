export const formatDateAndTime = (dateString, getTwoDigitYear) => {
  const date = new Date(dateString);
  const dayName = date.toLocaleString("en-US", { weekday: "short" });
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  let year = date.getFullYear();
  if (getTwoDigitYear) {
    year = String(year).slice(-2);
  }
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const phase = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${dayName} ${day} ${month}, ${year} ${String(hours).padStart(2, "0")}:${minutes} ${phase}`;
};

export const formatForInput = (iso) => {
  if (!iso) return "";
  return new Date(iso).toISOString().slice(0, 16);
};

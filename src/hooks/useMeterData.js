import { useEffect, useState } from "react";
import Papa from "papaparse";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const useMeterData = () => {
  const [data, setData] = useState([]);
  const [minDate, setMinDate] = useState(null);
  const [maxDate, setMaxDate] = useState(null);

  useEffect(() => {
    fetch("/metering_power_data.csv")
      .then((res) => res.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          complete: (results) => {
            const formatted = results.data
              .filter((r) => r.Timestamp)
              .map((row) => {
                const parsed = dayjs(
                  row.Timestamp.trim(),
                  "DD-MM-YYYY HH:mm",
                  true,
                );

                if (!parsed.isValid()) return null;

                return {
                  timestamp: parsed.toISOString(),
                  M1: Number(row["M1 Power (Watts)"]),
                  M2: Number(row["M2 Power (Watts)"]),
                  M3: Number(row["M3 Power (Watts)"]),
                  M4: Number(row["M4 Power Watts"]),
                  Master: Number(row["Cluster Meter Power (Watts)"]),
                };
              })
              .filter(Boolean);

            setData(formatted);

            if (formatted.length) {
              setMinDate(formatted[0].timestamp);
              setMaxDate(formatted[formatted.length - 1].timestamp);
            }
          },
        });
      });
  }, []);

  return { data, minDate, maxDate };
};

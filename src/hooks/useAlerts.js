import { useMemo } from "react";

export const useAlerts = (data) => {
  return useMemo(() => {
    const alerts = [];

    data.forEach((row) => {
      const total = row.M1 + row.M2 + row.M3 + row.M4;
      const leakage = Math.abs(row.Master - total);

      if (total > 1000) {
        alerts.push({
          type: "Total Overload",
          timestamp: row.timestamp,
          value: total,
        });
      }

      if (leakage > 300) {
        alerts.push({
          type: "Leakage Detected",
          timestamp: row.timestamp,
          value: leakage,
        });
      }
    });

    return alerts;
  }, [data]);
};

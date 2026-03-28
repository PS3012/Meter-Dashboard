import { useState, useContext, useMemo } from "react";
import { useMeterData } from "../hooks/useMeterData";
import { ConfigContext } from "../context/ConfigContext";
import ChartView from "../components/ChartView";
import AlertPanel from "../components/AlertPanel";
import FilterPanel from "../components/FilterPanel";

export default function Dashboard() {

     const { data } = useMeterData();
     const { showAlerts } = useContext(ConfigContext);

     const [start, setStart] = useState("");
     const [end, setEnd] = useState("");
     const [selectedMeters, setSelectedMeters] = useState(["M1"]);
     const [highlightedTime, setHighlightedTime] = useState(null);

     const filtered = useMemo(() => {
          if (!start || !end) return data;

          const startISO = new Date(start).toISOString();
          const endISO = new Date(end).toISOString();

          if (startISO > endISO) return [];

          return data.filter(d =>
               d.timestamp >= startISO &&
               d.timestamp <= endISO
          );

     }, [data, start, end]);

     return (
          <div className="p-6 bg-gray-100 min-h-screen">

               <FilterPanel
                    start={start}
                    end={end}
                    setStart={setStart}
                    setEnd={setEnd}
                    selectedMeters={selectedMeters}
                    setSelectedMeters={setSelectedMeters}
               />

               <div className="grid grid-cols-4 gap-6 items-start mt-6">
                    <div className="col-span-3">
                         <ChartView
                              data={filtered}
                              selectedMeters={selectedMeters}
                              highlightedTime={highlightedTime}
                         />
                    </div>

                    {showAlerts && (
                         <AlertPanel
                              highlightedTime={highlightedTime}
                              onSelect={setHighlightedTime}
                         />
                    )}
               </div>

          </div>
     );
}
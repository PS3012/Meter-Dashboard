import { useAlerts } from "../hooks/useAlerts";
import { useMeterData } from "../hooks/useMeterData";

export default function AlertPanel({ onSelect, highlightedTime }) {

     const { data } = useMeterData();
     const alerts = useAlerts(data);

     return (
          <div className="bg-white border border-gray-300 rounded-xl shadow-md overflow-hidden">

               <h2 className="text-xl font-semibold px-4 py-3 bg-gray-200 text-center">Alerts</h2>

               <div className="p-4 h-110 overflow-y-auto space-y-2">
                    {alerts.map((alert, i) => (
                         <div
                              key={i}
                              onClick={() => onSelect(prev => prev === alert.timestamp ? null : alert.timestamp)}
                              className={`p-3 bg-red-100 hover:bg-red-200 cursor-pointer rounded ${highlightedTime ? (highlightedTime === alert.timestamp ? "bg-red-200" : "opacity-50") : ""}`}
                         >
                              <div className="font-semibold">{alert.type}</div>
                              <div>{new Date(alert.timestamp).toLocaleString()}</div>
                              <div>Value: {alert.value} W</div>
                         </div>
                    ))}
               </div>

          </div>
     );
}
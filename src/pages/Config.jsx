import { useContext } from "react";
import { ConfigContext } from "../context/ConfigContext";

export default function Config() {

     const { graphType, setGraphType, showAlerts, setShowAlerts } = useContext(ConfigContext);

     return (
          <div className="p-6 bg-gray-100 min-h-screen">

               <div className="bg-white p-6 rounded-xl shadow-md w-96">

                    <h2 className="text-xl font-bold mb-4">Configuration</h2>

                    <div className="mb-4">
                         <label className="block mb-2">Graph Type</label>
                         <select
                              value={graphType}
                              onChange={(e) => setGraphType(e.target.value)}
                              className="border border-gray-300 text-sm p-2 w-full rounded focus:outline-none"
                         >
                              <option value="line">Line Chart</option>
                              <option value="bar">Stacked Bar</option>
                         </select>
                    </div>

                    <label className="flex items-center gap-2">
                         <input
                              type="checkbox"
                              checked={showAlerts}
                              onChange={() => setShowAlerts(!showAlerts)}
                         />
                         Enable Alerts
                    </label>

               </div>

          </div>
     );
}
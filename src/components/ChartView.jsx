import { useContext } from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, ReferenceLine } from "recharts";
import { formatDateAndTime } from "../utils/functions";
import { meterColors } from "../utils/contants";
import { useMeterData } from "../hooks/useMeterData";
import { ConfigContext } from "../context/ConfigContext";

export default function ChartView({
     data,
     selectedMeters,
     highlightedTime
}) {

     const { minDate, maxDate } = useMeterData();
     const { graphType } = useContext(ConfigContext);

     const Chart = graphType === "line" ? LineChart : BarChart;
     const GraphElement = graphType === "line" ? Line : Bar;

     return (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-300 overflow-hidden">
               <div className="px-4 py-3 text-center bg-gray-200 font-medium">
                    {formatDateAndTime(new Date(minDate))} — {formatDateAndTime(new Date(maxDate))}
               </div>
               <div className="p-4">
                    <ResponsiveContainer width="100%" height={420}>
                         <Chart data={data}>
                              <CartesianGrid strokeDasharray="3 3" />

                              <XAxis
                                   dataKey="timestamp"
                                   tickFormatter={(val) =>
                                        new Date(val).toLocaleTimeString()
                                   }
                              />

                              <YAxis />

                              <Tooltip
                                   contentStyle={{
                                        borderRadius: "12px",
                                        border: "1px solid #e5e7eb"
                                   }}
                                   labelFormatter={(val) => formatDateAndTime(new Date(val))}
                              />

                              <Legend />

                              {selectedMeters.map(meter => (
                                   <GraphElement
                                        key={meter}
                                        dataKey={meter}
                                        stroke={meterColors[meter]}
                                        fill={meterColors[meter]}
                                        strokeWidth={2}
                                        stackId={graphType === "bar" ? "a" : undefined}
                                        dot={graphType === "line"}
                                   />
                              ))}

                              {highlightedTime && (
                                   <ReferenceLine
                                        x={highlightedTime}
                                        stroke="red"
                                        strokeWidth={2}
                                   />
                              )}
                         </Chart>
                    </ResponsiveContainer>
               </div>
          </div>
     );
}
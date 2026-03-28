import { useMeterData } from "../hooks/useMeterData";
import { meters } from "../utils/contants";
import { formatForInput } from "../utils/functions";

export default function FilterPanel({
     start,
     end,
     setStart,
     setEnd,
     selectedMeters,
     setSelectedMeters
}) {

     const { minDate, maxDate } = useMeterData();

     const handleStartChange = (value) => {
          if (value > formatForInput(maxDate)) return;
          setStart(value);
     };

     const handleEndChange = (value) => {
          if (value < formatForInput(minDate)) return;
          setEnd(value);
     };

     return (
          <div className="bg-white p-4 rounded-xl shadow-md">

               <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex gap-3 items-center">
                         <label className="text-sm font-medium">Start Time</label>
                         <input
                              type="datetime-local"
                              value={start}
                              min={formatForInput(minDate)}
                              max={formatForInput(maxDate)}
                              onChange={e => handleStartChange(e.target.value)}
                              className="border border-gray-300 px-2 py-1 text-sm rounded"
                         />
                    </div>

                    <div className="flex gap-3 items-center">
                         <label className="text-sm font-medium">End Time</label>
                         <input
                              type="datetime-local"
                              value={end}
                              min={formatForInput(minDate)}
                              max={formatForInput(maxDate)}
                              onChange={e => handleEndChange(e.target.value)}
                              className="border border-gray-300 px-2 py-1 text-sm rounded"
                         />
                    </div>
               </div>

               <div className="flex gap-3 items-center">
                    <div className="font-medium text-sm">Select Meters: </div>
                    {meters.map(m => (
                         <button
                              type="button"
                              onClick={() =>
                                   selectedMeters.includes(m)
                                        ? setSelectedMeters(selectedMeters.filter(x => x !== m))
                                        : setSelectedMeters([...selectedMeters, m])
                              }
                              className={`px-3 py-1 border border-gray-300 rounded text-sm cursor-pointer ${selectedMeters.includes(m) ? "bg-sky-100" : ""}`}
                         >{m}</button>
                    ))}
               </div>

          </div>
     );
}
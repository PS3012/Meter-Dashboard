import { NavLink } from "react-router-dom";

export default function Navbar() {
     return (
          <div className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg">

               <h1 className="text-xl font-bold tracking-wide">
                    ⚡ Meter Dashboard
               </h1>

               <div className="flex gap-6 text-sm font-medium">

                    <NavLink
                         to="/visualize"
                         className={({ isActive }) =>
                              isActive
                                   ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                                   : "hover:text-gray-300"
                         }
                    >
                         Dashboard
                    </NavLink>

                    <NavLink
                         to="/config"
                         className={({ isActive }) =>
                              isActive
                                   ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                                   : "hover:text-gray-300"
                         }
                    >
                         Configuration
                    </NavLink>

               </div>
          </div>
     );
}
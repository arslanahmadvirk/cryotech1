import React from "react";
import { useState } from "react";

const RightSidebar = () => {
  const [manualBotton, setManualBotton] = useState(true);
  const [autoBotton, setAutoBotton] = useState(false);
  return (
    <aside className="w-[370px]" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3  bg-gray-200 dark:bg-gray-800">
        <div className="flex flex-row items-center gap-3 mb-5">
          <h1 className="text-black font-bold">Valve Parameters</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-exclamation-circle text-gray-600"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          </svg>
        </div>
        <ul className="space-y-2">
          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              FAMILY
            </label>
            <select
              id="countries"
              className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
            >
              <option selected>🟢 Industrial</option>
              <option value="US">🟢 High Temp</option>
              <option value="CA">🟢 Sanitary</option>
              <option value="FR">🟢 Cryogenic</option>
              <option value="DE">🟢 Control</option>
              <option value="DE">🟢 High Pressure</option>
            </select>
          </li>
          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              SERIES
            </label>
            <select
              id="countries"
              className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
            >
              <option selected>🟢 47</option>
              <option value="US">🟢 67</option>
            </select>
          </li>
          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              VALVE SIZE
            </label>
            <select
              id="countries"
              className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
            >
              <option selected>🟢 25mm /1</option>
              <option value="US">🟢 35mm /1</option>
            </select>
          </li>
          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              BORE TYPE
            </label>
            <select
              id="countries"
              className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
            >
              <option selected>🟢 Reduce</option>
              <option value="US">🟢 Reduce</option>
            </select>
          </li>
          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              END CONNECTIONS
            </label>
            <select
              id="countries"
              className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
            >
              <option selected>🟢 Floating</option>
              <option value="US">🟢 Floating</option>
            </select>
          </li>
          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              BALL STYLE
            </label>
            <select
              id="countries"
              className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
            >
              <option selected>🟢 Side-entry</option>
              <option value="US">🟢 Open-entry</option>
            </select>
          </li>
          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              DESIGN STYLE
            </label>
            <select
              id="countries"
              className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
            >
              <option selected>🟢 Total Hermetix Integrity Package</option>
              <option value="US">🟢 Total Hermetix</option>
            </select>
          </li>
          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              BODY CONSTRUCTION
            </label>
            <select
              id="countries"
              className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
            >
              <option selected>Varient</option>
              <option value="US">Varient</option>
            </select>
          </li>
          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              FUNCTION FEATURES
            </label>
            <select
              id="countries"
              className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
            >
              <option selected>Shutoff valve</option>
              <option value="US">Shuton valve</option>
            </select>
          </li>
          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              BODY MATERIALS
            </label>
            <select
              id="countries"
              className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
            >
              <option selected>🟢 S. SteelCF8M/CF3M</option>
              <option value="US">🟢 S. SteelCF8M/CF3M</option>
            </select>
          </li>
          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              DESIGN
            </label>
            <select
              id="countries"
              className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
            >
              <option selected>🟢 Design parameter</option>
              <option value="US">🟢 Design parameter</option>
            </select>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;

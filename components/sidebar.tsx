import React from "react";
import { useState } from "react";

const Sidebar = () => {
  const [manualBotton, setManualBotton] = useState(true);
  const [autoBotton, setAutoBotton] = useState(false);
  return (
    <aside className="w-[390px]" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3  bg-gray-200 dark:bg-gray-800">
        <div className="flex flex-row items-center gap-3 mb-5">
          <h1 className="text-black font-bold">Application Parameters</h1>
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
              PIPING SIZE
            </label>
            <select
              id="countries"
              className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
            >
              <option selected>🟢 25mm /1</option>
              <option value="US">🟢 Side-Entry</option>
              <option value="CA">🟢 Flanged Side-Entry</option>
              <option value="FR">🟢 Multiport Entry</option>
              <option value="DE">🟢 Top-Entry</option>
            </select>
          </li>
          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              MAX WORK PRESSURE
            </label>
            <div className="flex flex-row gap-1">
              <select
                id="countries"
                className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
              >
                <option selected>0 Bar</option>
                <option value="US">10 Bar</option>
                <option value="CA">20 Bar</option>
                <option value="FR">50 Bar</option>
              </select>
              <h1 className="text-gray-700">-</h1>
              <select
                id="countries"
                className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
              >
                <option selected>150 Bar</option>
                <option value="US">100 Bar</option>
                <option value="CA">150 Bar</option>
                <option value="FR">250 Bar</option>
              </select>
            </div>
            <div className="flex flex-row">
              <div>
                <input
                  type="range"
                  id="points"
                  name="points"
                  min="-60"
                  max="60"
                  step="10"
                  className="w-full h-1 bg-gray-400 range1 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  //   onChange={(e) => setPasswordLength(e.target.value)}
                />
                <h1 className="text-gray-500 text-[12px]">0 Br</h1>
              </div>
              <div>
                <input
                  type="range"
                  id="points"
                  name="points"
                  min="60"
                  max="260"
                  step="10"
                  className="w-full h-1 range2 bg-gray-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  //   onChange={(e) => setPasswordLength(e.target.value)}
                />
                <h1 className="text-gray-500 flex justify-end text-[12px]">
                  250 Br
                </h1>
              </div>
            </div>
          </li>
          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              WORKING TEMP
            </label>
            <div className="flex flex-row gap-1">
              <select
                id="countries"
                className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
              >
                <option selected>-60 C</option>
                <option value="US">0 C</option>
              </select>
              <h1 className="text-gray-700">-</h1>
              <select
                id="countries"
                className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
              >
                <option selected>260 C</option>
                <option value="US">100 C</option>
              </select>
            </div>
            <div className="flex flex-row">
              <div>
                <input
                  type="range"
                  id="points"
                  name="points"
                  min="-60"
                  max="60"
                  step="10"
                  className="w-full h-1 range1 bg-gray-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  //   onChange={(e) => setPasswordLength(e.target.value)}
                />
                <h1 className="text-gray-500 text-[12px]">-60C</h1>
              </div>
              <div>
                <input
                  type="range"
                  id="points"
                  name="points"
                  min="60"
                  max="260"
                  step="10"
                  className="w-full h-1 range2 bg-gray-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  //   onChange={(e) => setPasswordLength(e.target.value)}
                />
                <h1 className="text-gray-500 flex justify-end text-[12px]">
                  260C
                </h1>
              </div>
            </div>
          </li>
          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              MEDIA
            </label>
            <div className="flex flex-row gap-1">
              <select
                id="countries"
                className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
              >
                <option selected>H2O</option>
                <option value="US">H2O</option>
              </select>
              <h1 className="text-gray-700">-</h1>
              <select
                id="countries"
                className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
              >
                <option selected>General Use</option>
                <option value="US">Common Use</option>
              </select>
            </div>
          </li>

          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              CONNECTION TYPE
            </label>
            <select
              id="countries"
              className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
            >
              <option selected>🟢 Buttweld schd.10</option>
              <option value="US">🟢 Buttweld schd.20</option>
            </select>
          </li>
          <li>
            <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
              OPERATION MODE
            </label>
            <div className="flex flex-row gap-1 bg-gray-300 p-1">
              <div
                className={
                  manualBotton || !autoBotton
                    ? "bg-white text-black w-full cursor-pointer"
                    : " text-gray-500 w-full cursor-pointer"
                }
                onClick={() => {
                  setManualBotton(true);
                  setAutoBotton(false);
                }}
              >
                <h1 className="text-[12px] text-center">Manual</h1>
              </div>
              <div
                className={
                  !manualBotton || autoBotton
                    ? "bg-white text-black w-full cursor-pointer"
                    : " text-gray-500 w-full cursor-pointer"
                }
                onClick={() => {
                  setAutoBotton(true);
                  setManualBotton(false);
                }}
              >
                <h1 className="text-[12px] text-center">Automated</h1>
              </div>
            </div>
          </li>
          {!manualBotton || autoBotton ? (
            <>
              {" "}
              <li>
                <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
                  DIFFERENTIAL PRESSURE
                </label>
                <select
                  id="countries"
                  className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
                >
                  <option selected>🟢 10 bar</option>
                  <option value="US">🟢 20 bar</option>
                </select>
              </li>
              <li>
                <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
                  INSTRUMENTATION AIR PRESSURE
                </label>
                <select
                  id="countries"
                  className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
                >
                  <option selected>3.0 bar</option>
                  <option value="US">4.0 bar</option>
                </select>
              </li>
              <li>
                <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
                  Fail Safe
                </label>
                <select
                  id="countries"
                  className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
                >
                  <option selected>Normally Open</option>
                  <option value="US">Normally Close</option>
                </select>
              </li>
              <li>
                <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
                  Saftey Factor
                </label>
                <select
                  id="countries"
                  className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
                >
                  <option selected>Normally - 1.2</option>
                  <option value="US">Normally - 1.5</option>
                </select>
              </li>
              <li>
                <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
                  Operation Mode
                </label>
                <select
                  id="countries"
                  className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
                >
                  <option selected>Spring Return</option>
                  <option value="US">Spring Return</option>
                </select>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
                  FUNCTION
                </label>
                <select
                  id="countries"
                  className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
                >
                  <option selected>🟢 Shuttoff</option>
                  <option value="US">🟢 Shutton</option>
                </select>
              </li>
              <li>
                <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
                  DIFFERENTIAL PRESSURE
                </label>
                <div className="flex flex-row gap-1">
                  <select
                    id="countries"
                    className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
                  >
                    <option selected>0 Bar</option>
                    <option value="US">100 Bar</option>
                  </select>
                  <h1 className="text-gray-700">-</h1>
                  <select
                    id="countries"
                    className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
                  >
                    <option selected>150 Bar</option>
                    <option value="US">250 Bar</option>
                  </select>
                </div>
                <div className="flex flex-row">
                  <div>
                    <input
                      type="range"
                      id="points"
                      name="points"
                      min="-60"
                      max="60"
                      step="10"
                      className="w-full h-1 range1 bg-gray-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      //   onChange={(e) => setPasswordLength(e.target.value)}
                    />
                    <h1 className="text-gray-500 text-[12px]">0 Br</h1>
                  </div>
                  <div>
                    <input
                      type="range"
                      id="points"
                      name="points"
                      min="60"
                      max="260"
                      step="10"
                      className="w-full h-1 range2 bg-gray-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                      //   onChange={(e) => setPasswordLength(e.target.value)}
                    />
                    <h1 className="text-gray-500 flex justify-end text-[12px]">
                      250 Br
                    </h1>
                  </div>
                </div>
              </li>
              <li>
                <label className="block mb-2 text-[12px]  text-gray-900 mt-2">
                  CLEAN LINES
                </label>
                <select
                  id="countries"
                  className="bg-gray-200 border border-gray-500 text-gray-900 text-[12px] rounded-sm block w-full p-1"
                >
                  <option selected>🟢 Industrial grade</option>
                  <option value="US">🟢 Company grade</option>
                </select>
              </li>
            </>
          )}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

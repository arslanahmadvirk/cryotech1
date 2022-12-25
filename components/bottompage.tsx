/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";

const BottomPage = () => {
  const [manualBotton, setManualBotton] = useState(true);
  const [autoBotton, setAutoBotton] = useState(false);
  return (
    <div className=" w-full mt-5">
      <div className=" flex-row space-x-10 flex ml-5">
        <div className="px-3 py-2">
          <h1 className="text-[13px] text-center text-gray-600 font-medium">
            Valve Description
          </h1>
        </div>
        <div className="px-3 py-2 bg-gray-200">
          <h1 className="text-[13px] text-center text-black font-medium">
            Valve Dimenstions
          </h1>
        </div>
        <div className="px-3 py-2">
          <h1 className="text-[13px] text-center text-gray-600 font-medium">
            Components & Materials
          </h1>
        </div>
        <div className="px-3 py-2">
          <h1 className="text-[13px] text-center text-gray-600 font-medium">
            Drawing
          </h1>
        </div>
        <div className="px-3 py-2">
          <h1 className="text-[13px] text-center text-gray-600 font-medium">
            3D Model
          </h1>
        </div>
      </div>
      <div className="border border-black mx-5">
        <div className="flex flex-row justify-between mx-12 mt-5">
          <div>
            <h1 className="text-gray-700 font-medium text-[13px]">
              Valve Dimensions
            </h1>
          </div>
          <div className="flex flex-row gap-8">
            <svg
              id="dropdownCheckboxButton"
              data-dropdown-toggle="dropdownDefaultCheckbox"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-share text-gray-600 cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
            </svg>
            <svg
              id="dropdownCheckboxButton2"
              data-dropdown-toggle="dropdownDefaultCheckbox2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-download text-gray-600 cursor-pointer"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
          </div>
        </div>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-1 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className=" md:w-2/3 bg-white rounded-lg overflow-hidden sm:mr-10 py-5">
              <img src="/image2.png" alt="" className="w-[550px] h-[400px]" />
            </div>
            <div className=" md:w-1/3 bg-white flex flex-col md:ml-auto w-full py-20">
              <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 px-6 bg-gray-400 text-white"
                      >
                        Valve size
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 bg-gray-400 text-white"
                      >
                        DN8
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 bg-gray-400 text-white"
                      >
                        1/4
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-400 border-r ">
                      <td className="py-4 px-6 bg-gray-200">Unit</td>
                      <td className="py-4 px-6 bg-gray-50 border-r border-gray-400">
                        mm
                      </td>
                      <td className="py-4 px-6">inch</td>
                    </tr>
                    <tr className="border-b border-gray-400 border-r ">
                      <td className="py-4 px-6 bg-gray-200">A</td>
                      <td className="py-4 px-6 bg-gray-50 border-r border-gray-400">
                        66.00
                      </td>
                      <td className="py-4 px-6">2.60</td>
                    </tr>
                    <tr className="border-b border-gray-400 border-r ">
                      <td className="py-4 px-6 bg-gray-200">A</td>
                      <td className="py-4 px-6 bg-gray-50 border-r border-gray-400">
                        66.00
                      </td>
                      <td className="py-4 px-6">2.60</td>
                    </tr>
                    <tr className="border-b border-gray-400 border-r ">
                      <td className="py-4 px-6 bg-gray-200">A</td>
                      <td className="py-4 px-6 bg-gray-50 border-r border-gray-400">
                        66.00
                      </td>
                      <td className="py-4 px-6">2.60</td>
                    </tr>
                    <tr className="border-b border-gray-400 border-r">
                      <td className="py-4 px-6 bg-gray-200">A</td>
                      <td className="py-4 px-6 bg-gray-50 border-r border-gray-400">
                        66.00
                      </td>
                      <td className="py-4 px-6">2.60</td>
                    </tr>
                    <tr className="border-b border-gray-400 border-r ">
                      <td className="py-4 px-6 bg-gray-200">A</td>
                      <td className="py-4 px-6 bg-gray-50 border-r border-gray-400">
                        66.00
                      </td>
                      <td className="py-4 px-6">2.60</td>
                    </tr>
                    <tr className="border-b border-gray-400 border-r ">
                      <td className="py-4 px-6 bg-gray-200">A</td>
                      <td className="py-4 px-6 bg-gray-50 border-r border-gray-400">
                        66.00
                      </td>
                      <td className="py-4 px-6">2.60</td>
                    </tr>
                    <tr className="border-b border-gray-400 border-r ">
                      <td className="py-4 px-6 bg-gray-200">A</td>
                      <td className="py-4 px-6 bg-gray-50 border-r border-gray-400">
                        66.00
                      </td>
                      <td className="py-4 px-6">2.60</td>
                    </tr>
                    <tr className="border-b border-gray-400 border-r">
                      <td className="py-4 px-6 bg-gray-200">A</td>
                      <td className="py-4 px-6 bg-gray-50 border-r border-gray-400">
                        66.00
                      </td>
                      <td className="py-4 px-6">2.60</td>
                    </tr>
                  </tbody>
                </table>
                <h1 className="text-[15px] mt-2">
                  (1)2 1/2 (DN65) size maxium pressure rating is Class 400
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Drop Downs */}
      <div
        id="dropdownDefaultCheckbox"
        className="hidden z-10 w-[350px] bg-white rounded shadow divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="p-5">
          <h1 className="text-black font-bold">Share items</h1>
          <p className="text-black">Select items which you want to share</p>
        </div>
        <ul
          className="p-5 space-y-4 text-sm text-gray-700 dark:text-gray-200 mx-4 "
          aria-labelledby="dropdownCheckboxButton"
        >
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-1"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Select all
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-2"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Valve parameters page
              </label>
            </div>
            <div className="flex flex-row gap-3 mt-2 ml-5">
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Hide price
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Show price
                </label>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Valve decription
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Valve Dimensions
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Components & Materials
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                3D image
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Technical drawing
              </label>
            </div>
          </li>
          <div className="flex flex-row gap-4 justify-end items-center">
            <div className="px-4 py-2 rounded border-blue-500 border-2">
              <h1 className="text-blue-500 font-semibold">Cancel</h1>
            </div>
            <div className="px-6 py-[11px] rounded bg-blue-500">
              <h1 className="text-white text-center font-semibold">Share</h1>
            </div>
          </div>
        </ul>
      </div>
      <div
        id="dropdownDefaultCheckbox2"
        className="hidden z-10 w-[350px] bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="p-5">
          <h1 className="text-black font-bold">Download items</h1>
          <p className="text-black">Select items which you want to download</p>
        </div>
        <ul
          className="p-5 space-y-4 text-sm text-gray-700 dark:text-gray-200 mx-4 "
          aria-labelledby="dropdownCheckboxButton"
        >
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-1"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Select all
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-2"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Valve parameters page
              </label>
            </div>
            <div className="flex flex-row gap-3 mt-2 ml-5">
              <div className="flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Hide price
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Show price
                </label>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Valve decription
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Valve Dimensions
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Components & Materials
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                3D image
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="checkbox-item-3"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Technical drawing
              </label>
            </div>
          </li>
          <div className="flex flex-row gap-4 justify-end items-center">
            <div className="px-4 py-2 rounded border-blue-500 border-2">
              <h1 className="text-blue-500 font-semibold">Cancel</h1>
            </div>
            <div className="px-3 py-[11px] rounded bg-blue-500">
              <h1 className="text-white text-center font-semibold">Download</h1>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default BottomPage;

/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import {
  Tab,
  Tabs,
  TabsHeader,
  TabsBody,
  TabPanel,
  Button,
  // Switch,
} from "@material-tailwind/react";
import { useState } from "react";
import { Switch } from "@headlessui/react";

import productImage from "./../assets/product-img.jpeg";

export default function ProductPage() {
  const [enabled, setEnabled] = useState(false);
  const tabsData = [
    {
      label: "Manual",
      value: "manual",
    },
    {
      label: "Automated",
      value: "automated",
    },
  ];

  return (
    <main className=" mx-5 text-gray-700">
      <header className=" flex flex-wrap justify-between h-20 items-center">
        <div className="flex gap-12 flex-wrap">
          <div id="left" className="w-[300px]">
            <Tabs value="manual">
              <TabsHeader>
                {tabsData.map(({ label, value }) => (
                  <Tab key={value} value={value} className="text-[12px]">
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
          </div>

          <div id="center" className="flex gap-8">
            <button className="border-r border-gray-300 px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-refresh"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-back-up"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-forward-up"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 13l4 -4l-4 -4m4 4h-11a4 4 0 0 0 0 8h1" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex gap-8">
          <button className="">
            <svg
              id="dropdownCheckboxButton"
              data-dropdown-toggle="dropdownDefaultCheckbox"
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-share"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="6" r="3" />
              <circle cx="18" cy="18" r="3" />
              <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
              <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
            </svg>
          </button>
          <button>
            <svg
              id="dropdownCheckboxButton2"
              data-dropdown-toggle="dropdownDefaultCheckbox2"
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-download"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <polyline points="7 11 12 16 17 11" />
              <line x1="12" y1="4" x2="12" y2="16" />
            </svg>
          </button>
          <div className="inline-flex relative w-fit">
            <div className="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1.5 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-[#1962a6] text-white rounded-full z-10">
              3
            </div>
            <button
              type="button"
              className="inline-block px-4 py-2 bg-white border border-gray-500 text-gray-500 font-medium text-sm leading-snug rounded"
            >
              View Comparison
            </button>
          </div>
        </div>
      </header>

      {/* Body */}
      <section id="body">
        <div className="border-2 border-gray-300 flex">
          <div className="relative w-[380px] bg-gray-100 flex items-center justify-center">
            <div className="flex items-center gap-2 absolute top-5 left-5 bg-red-700 p-3 rounded-md text-gray-100">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="#fff"
              >
                <title>settings</title>
                <path d="M30.391 12.68l-3.064-0.614c-0.154-0.443-0.336-0.873-0.537-1.289l1.736-2.604c0.529-0.793 0.424-1.85-0.25-2.523l-1.924-1.924c-0.387-0.387-0.898-0.586-1.416-0.586-0.383 0-0.77 0.11-1.107 0.336l-2.604 1.735c-0.418-0.202-0.848-0.382-1.291-0.536l-0.614-3.065c-0.186-0.936-1.008-1.608-1.961-1.608h-2.72c-0.953 0-1.774 0.673-1.961 1.608l-0.614 3.065c-0.443 0.154-0.873 0.335-1.289 0.536l-2.603-1.735c-0.339-0.226-0.725-0.336-1.109-0.336-0.517 0-1.028 0.199-1.415 0.586l-1.923 1.924c-0.674 0.674-0.779 1.73-0.25 2.523l1.735 2.604c-0.202 0.417-0.382 0.847-0.536 1.29l-3.066 0.613c-0.935 0.187-1.608 1.008-1.608 1.961v2.72c0 0.953 0.673 1.775 1.608 1.961l3.065 0.615c0.154 0.443 0.335 0.873 0.536 1.289l-1.734 2.604c-0.529 0.793-0.424 1.85 0.25 2.523l1.924 1.924c0.387 0.387 0.898 0.586 1.415 0.586 0.384 0 0.771-0.111 1.108-0.336l2.604-1.736c0.417 0.203 0.847 0.383 1.29 0.537l0.613 3.064c0.187 0.936 1.008 1.609 1.961 1.609h2.72c0.953 0 1.775-0.674 1.961-1.609l0.615-3.064c0.443-0.154 0.873-0.336 1.289-0.537l2.604 1.736c0.338 0.225 0.725 0.336 1.107 0.336 0.518 0 1.029-0.199 1.416-0.586l1.924-1.924c0.674-0.674 0.779-1.73 0.25-2.523l-1.736-2.604c0.203-0.418 0.383-0.848 0.537-1.291l3.064-0.613c0.935-0.185 1.609-1.008 1.609-1.961v-2.72c0-0.953-0.674-1.774-1.609-1.961zM26.934 17.975c-0.695 0.139-1.264 0.635-1.496 1.305-0.129 0.369-0.279 0.727-0.447 1.074-0.311 0.639-0.258 1.393 0.135 1.982l1.736 2.604-1.924 1.924-2.604-1.736c-0.334-0.223-0.721-0.336-1.109-0.336-0.297 0-0.596 0.066-0.871 0.199-0.348 0.168-0.705 0.32-1.076 0.449-0.668 0.232-1.164 0.801-1.303 1.496l-0.615 3.066h-2.72l-0.613-3.066c-0.139-0.695-0.635-1.264-1.304-1.496-0.369-0.129-0.728-0.279-1.075-0.447-0.276-0.135-0.574-0.201-0.872-0.201-0.389 0-0.775 0.113-1.109 0.336l-2.604 1.736-1.924-1.924 1.735-2.604c0.393-0.59 0.444-1.344 0.137-1.98-0.168-0.348-0.319-0.705-0.448-1.076-0.232-0.668-0.802-1.164-1.496-1.303l-3.065-0.615-0.002-2.721 3.066-0.613c0.694-0.139 1.264-0.635 1.496-1.304 0.129-0.369 0.278-0.728 0.447-1.075 0.31-0.638 0.258-1.392-0.136-1.981l-1.734-2.604 1.923-1.924 2.604 1.735c0.334 0.223 0.721 0.336 1.109 0.336 0.297 0 0.595-0.066 0.871-0.199 0.347-0.168 0.705-0.319 1.075-0.448 0.669-0.232 1.165-0.802 1.304-1.496l0.614-3.065 2.72-0.001 0.613 3.066c0.139 0.694 0.635 1.264 1.305 1.496 0.369 0.129 0.727 0.278 1.074 0.447 0.277 0.134 0.574 0.2 0.873 0.2 0.389 0 0.775-0.113 1.109-0.336l2.604-1.735 1.924 1.924-1.736 2.604c-0.393 0.59-0.443 1.343-0.137 1.98 0.168 0.347 0.32 0.705 0.449 1.075 0.232 0.669 0.801 1.165 1.496 1.304l3.064 0.614 0.003 2.72-3.066 0.614zM16 9.001c-3.865 0-7 3.135-7 7 0 3.866 3.135 7 7 7s7-3.135 7-7c0-3.865-3.135-7-7-7zM16 22.127c-3.382 0-6.125-2.744-6.125-6.125s2.743-6.125 6.125-6.125c3.381 0 6.125 2.743 6.125 6.125 0 3.381-2.744 6.125-6.125 6.125zM16 12.001c-2.21 0-4 1.79-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zM16 19.002c-1.656 0-3-1.344-3-3s1.344-3 3-3 3 1.344 3 3c0 1.656-1.344 3-3 3z"></path>
              </svg>

              <span className="text-[14px] font-semibold">47</span>
            </div>
            <img src="/image1.png" alt="Product Image" />
          </div>
          <div className="w-full">
            <div className="mx-6">
              <div
                id="detailsHeader"
                className="py-6 border-b border-gray-300 flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <h1 className="pr-4 border-r-2 border-gray-500 text-[18px] font-bold">
                    Floating Ball 3 piece
                  </h1>
                  <h5 className="font-medium text-[14px]">
                    2 ports shut off valve 1 standard port
                  </h5>
                </div>
                <div className="mx-4">
                  <span className="mr-2 text-[13px]">Compare</span>
                  <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                      enabled ? "bg-blue-600" : "bg-gray-300"
                    } relative inline-flex h-3 w-8 items-center rounded-full`}
                  >
                    <span
                      className={`${
                        enabled ? "translate-x-5" : "translate-x-0.5"
                      } inline-block h-2 w-2 transform rounded-full bg-white transition`}
                    />
                  </Switch>
                </div>
              </div>
            </div>

            <div className="my-6">
              <table className="mx-8 lg:h-[400px] text-[12px] flex flex-col flex-wrap gap-3">
                <tbody className="lg:h-[400px] text-[12px] flex flex-col flex-wrap gap-3">
                  <tr>
                    <td className="w-[100px]">Size</td>
                    <td className="w-[200px] font-semibold">25mm/ 1</td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">Features</td>
                    <td className="w-[200px] font-semibold">fire safe</td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">Series</td>
                    <td className="w-[200px] font-semibold">
                      floating ball 3 piece
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">Design</td>
                    <td className="w-[200px] font-semibold">
                      total hermetix integrity package
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">Body</td>
                    <td className="w-[200px] font-semibold">
                      S.SteelCF8M/CF3M
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">Ends</td>
                    <td className="w-[200px] font-semibold">
                      S.SteelCF8M/CF3M
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">Balls</td>
                    <td className="w-[200px] font-semibold">
                      S.SteelCF8M/CF3M
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">stem</td>
                    <td className="w-[200px] font-semibold">S.Steel316L</td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">seat</td>
                    <td className="w-[200px] font-semibold">TFM</td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">Inner Seal</td>
                    <td className="w-[200px] font-semibold">PTFF</td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">Outer Seal</td>
                    <td className="w-[200px] font-semibold">
                      expanded graphite
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">End Connection</td>
                    <td className="w-[200px] font-semibold">
                      buttweld schd. 10
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">Class</td>
                    <td className="w-[200px] font-semibold">900</td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">Temp</td>
                    <td className="w-[200px] font-semibold">230c</td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">Press</td>
                    <td className="w-[200px] font-semibold">155</td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">Diameter</td>
                    <td className="w-[200px] font-semibold">DN8-DN65</td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">Bore Size</td>
                    <td className="w-[200px] font-semibold">reduce</td>
                  </tr>
                  <tr>
                    <td className="w-[100px]">Standants</td>
                    <td className="w-[200px] font-semibold">
                      ASME B16.34, CE ATEX IIC+5
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="h-15 mb-5 border-t flex items-center justify-between mx-12">
              <div className="flex gap-8 mt-4">
                <div className="">
                  <span className="text-[13px] mx-4">Delivery Time</span>
                  <span className="text-[18px] font-bold">14 Days</span>
                </div>
                <div>
                  <span className="text-[13px] mx-4">Price</span>
                  <span className="text-[18px] font-bold">$5,760</span>
                </div>
              </div>
              <Button size="md" className="text-[13px] bg-[#1962a6] mt-4">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Drop Downs */}
      <div
        id="dropdownDefaultCheckbox"
        className="hidden z-10 w-[350px] bg-white rounded shadow dark:bg-gray-700 dark:divide-gray-600"
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
    </main>
  );
}

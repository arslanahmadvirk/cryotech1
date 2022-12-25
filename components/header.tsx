/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";

const Header = () => {
  const [freesearch, setfreeSearch] = useState(false);
  return (
    <div>
      <nav>
        <div className=" flex flex-wrap items-center justify-between mx-auto bg-[#0b4781]">
          <div className="bg-[#1962a6]  px-2 sm:px-4 py-4 w-[279px]">
            <a href="/" className="flex items-center ">
              <img
                src="/logo2.png"
                className="h-6 mr-3 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                The Configurator
              </span>
            </a>
          </div>
          <div className="flex items-center md:order-2 mr-3 gap-6">
            <h1 className="text-[12px]">MET</h1>
            {/* <h1 className="text-[13px]">$</h1> */}

            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              className="text-white text-[12px] rounded-lg text-sm text-center inline-flex items-center"
              type="button"
            >
              $
            </button>

            <div
              id="dropdown"
              className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
            >
              <ul
                className="py-1 text-sm text-gray-700 "
                aria-labelledby="dropdownDefault"
              >
                <li>
                  <a
                    href="#"
                    className="flex-row flex py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="currentColor"
                      className="bi bi-currency-dollar"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                    </svg>
                    Dollar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex flex-row items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="currentColor"
                      className="bi bi-currency-euro"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 9.42h1.063C5.4 12.323 7.317 14 10.34 14c.622 0 1.167-.068 1.659-.185v-1.3c-.484.119-1.045.17-1.659.17-2.1 0-3.455-1.198-3.775-3.264h4.017v-.928H6.497v-.936c0-.11 0-.219.008-.329h4.078v-.927H6.618c.388-1.898 1.719-2.985 3.723-2.985.614 0 1.175.05 1.659.177V2.194A6.617 6.617 0 0 0 10.341 2c-2.928 0-4.82 1.569-5.244 4.3H4v.928h1.01v1.265H4v.928z" />
                    </svg>
                    Euro
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex flex-row items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <img
                      src="/shekel.svg"
                      alt=""
                      className="w-[10px] h-[10px] mr-1 ml-1"
                    />
                    Shekel
                  </a>
                </li>
              </ul>
            </div>

            <h1 className="text-[12px]">ENG</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1 text-xl-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
          </div>

          <div className="flex lg:flex-row bg-[#0b4781] gap-12 flex-col">
            <div className="flex justify-center items-center gap-4">
              <label className="text-[13px]  text-white ">Ordering code</label>
              <label className="inline-flex relative items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  onChange={() => {
                    setfreeSearch(!freesearch);
                  }}
                />
                <div className="w-9 h-5 bg-[#1962a6]  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#1962a6]"></div>
              </label>
              <span className=" text-white text-[13px]">Free search</span>
            </div>
            {freesearch ? (
              <div>
                <form className="flex items-center">
                  <label className="sr-only">Search</label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="voice-search"
                      className="bg-[#1962a6] text-white placeholder-white text-sm rounded-md  w-[500px] h-[35px] pl-10 p-2.5 border border-[#1962a6]"
                      placeholder="Search"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center py-2 px-3 ml-3 text-sm font-medium text-white bg-[#0b4781] rounded-md border border-white"
                  >
                    Search
                  </button>
                </form>
              </div>
            ) : (
              <div
                id="otp"
                className="flex flex-row justify-center text-center ml-8"
              >
                <input
                  className="m-1 text-xl h-10 w-5 p-0 text-center border border-transparent rounded bg-[#1962a6]"
                  type="text"
                  id="first"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="second"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="third"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="fourth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center  border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="fifth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <h1 className="flex items-center">-</h1>
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <h1 className="flex items-center">/</h1>
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <h1 className="flex items-center">-</h1>
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <input
                  className="m-1 text-xl border h-10 w-5 p-0 text-center border-transparent  rounded bg-[#1962a6]"
                  type="text"
                  id="sixth"
                  maxLength={1}
                />
                <div className="flex items-center ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-exclamation-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                  </svg>
                </div>
                <div className="flex items-center ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-files"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                  </svg>
                </div>
                <div className="flex items-center ml-3">
                  <button
                    type="submit"
                    className=" items-center py-2 px-3 ml-3 text-sm font-medium text-white bg-[#0b4781] rounded-md border border-white"
                  >
                    Find
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

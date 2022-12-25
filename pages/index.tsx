import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import RightSidebar from "../components/rightsidebar";
import BottomPage from "../components/bottompage";
import ProductPage from "../components/ProductPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <Header />
        <div className="flex flex-row">
          <Sidebar />
          <div className="w-full">
            <ProductPage />
            <BottomPage />
          </div>
          <RightSidebar />
          <div>
            <h1 className="text-black"></h1>
          </div>
        </div>
      </main>
    </>
  );
}

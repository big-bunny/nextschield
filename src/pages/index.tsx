import Head from "next/head";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Fragment } from "react";
import App from "next/dist/pages/_app";
import DefaultLayout from "@/components/DefaultLayout";






export default  function Home() {



  return (
    <Fragment>
      <div className="flex flex-col h-full justify-between  ">
        {/* Navigation bar || header bar  */}
        <DefaultLayout>

        {/* main page content Dashboard */}
        <main className="flex w-full">
          <Dashboard />
        </main>

        {/* footer */}
        </DefaultLayout>
      </div>
    </Fragment>
  );
}

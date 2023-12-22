import BarcodeScannerComponent from "@/components/BarcodeScannerComponent";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = async () => {
  return (
    <>
      <Head>
        <title>Barcode Scanner</title>
        <meta name="description" content="Check price by barcode" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-4">
        <div className="text-3xl flex justify-center py-8 pb-32 text-center">
          Barcode Scanner
        </div>
        <div>
          <BarcodeScannerComponent />
        </div>
      </div>
    </>
  );
};

export default Home;

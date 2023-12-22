"use client";
import { fetchPriceList } from "@/utils/excel";
import { FunctionComponent, useEffect, useState } from "react";
import { BarLoader, PuffLoader } from "react-spinners";
import BarcodeInputComponent from "./BarcodeInputComponent";
import { printPrice } from "@/utils/printHelper";

const BarcodeScannerComponent: FunctionComponent = () => {
  const [priceList, setPriceList] = useState([]);
  const [dataState, setDataState] = useState<
    "loading" | "loaded" | "initial" | "error"
  >("initial");
  const [searchState, setSearchState] = useState<
    "searching" | "idle" | "found" | "error"
  >("idle");

  const refresh = async () => {
    setDataState("loading");
    try {
      const res = await fetchPriceList();
      setPriceList(res);
      setDataState("loaded");
    } catch {
      setDataState("error");
    }
  };

  const searchForBarcode = (barcode: string) => {
    console.log("BAR", barcode);
    setSearchState("searching");
    let product = undefined;
    priceList.map((item: any) => {
      if (item.Barcodes === barcode) {
        product = item;
      }
    });
    if (!product) {
      setSearchState("error");
    } else {
      setSearchState("found");
      printPrice(product["Price List - Üzlet - Price (HUF)"]);
    }
  };

  const stateDisplay = () => {
    switch (dataState) {
      case "initial":
        return "Data source has not yet been fetched";
      case "error":
        return "There was an issue fetching data";
      case "loaded":
        return "Data has been fetched successfully";
      case "loading":
        return "Data is currently being fetched";
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center gap-8">
      <div>{stateDisplay()}</div>
      <button
        className="bg-blue-700 hover:bg-blue-500 p-4 rounded"
        onClick={() => {
          refresh();
        }}
      >
        Refresh
      </button>
      {dataState === "loading" && (
        <div>
          Loading data
          <BarLoader color="#36d7b7" loading={true} />
        </div>
      )}
      {dataState === "loaded" && (
        <div
          className="flex flex-col justify-center items-center
        "
        >
          <BarcodeInputComponent searchForBarcode={searchForBarcode} />
          <PuffLoader color="#36d7b7" loading={searchState === "searching"} />
          {searchState === "error" && <div>Barcode not found</div>}
        </div>
      )}
      {dataState === "error" && <div>Loading error</div>}
    </div>
  );
};

export default BarcodeScannerComponent;

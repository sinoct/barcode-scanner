import { FunctionComponent, useState } from "react";

interface BarcodeInputComponentProps {
  searchForBarcode: any;
}

const BarcodeInputComponent: FunctionComponent<BarcodeInputComponentProps> = ({
  searchForBarcode,
}) => {
  const [barcodeInput, setBarcodeInput] = useState("");

  const barcodeInputHandler = (event: any) => {
    setBarcodeInput(event.target.value);
  };

  return (
    <div>
      <div className="flex flex-col gap-1 items-center">
        <label htmlFor="barcode">Input the barcode:</label>
        <input
          className="rounded text-black"
          type="number"
          value={barcodeInput}
          name="barcode"
          onInput={barcodeInputHandler}
        />
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-700 hover:bg-blue-500 p-4 rounded "
          onClick={() => {
            searchForBarcode(barcodeInput);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default BarcodeInputComponent;

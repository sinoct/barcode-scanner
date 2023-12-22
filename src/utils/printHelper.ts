import jsPDF, { jsPDFOptions } from "jspdf";

export const printPrice = (price: string) => {
  const formattedPrice = Math.ceil(parseInt(price));
  //   const options: jsPDFOptions = {
  //     orientation: "landscape",
  //     unit: "cm",
  //     format: [7, 2],
  //   };
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "cm",
    format: [5, 2],
  });
  doc.text(`${formattedPrice} HUF`, 1, 1);
  console.log(doc);
  //doc.autoPrint();
  doc.output("dataurlnewwindow");
};

import jsPDF, { jsPDFOptions } from "jspdf";

export const printPrice = (price: string) => {
  const formattedPrice = Math.round(parseInt(price) / 10) * 10;
  const width = formattedPrice.toString().length * 7 + 28;
  const formatArray = [width, 20];
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: formatArray,
  });
  doc.text(`${formattedPrice} HUF`, 1, 15);
  doc.autoPrint();
  doc.output("dataurlnewwindow");
};

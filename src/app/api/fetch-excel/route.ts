import { NextRequest, NextResponse } from "next/server";
import * as xlsx from "xlsx";

export async function GET(req: NextRequest, res: NextResponse) {
  const url = process.env.NEXT_PUBLIC_EXCEL_SOURCE_URL;
  if (url) {
    const file = await fetch(url, {
      headers: {
        "Content-Type": "application/ms-excel;",
      },
    });
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const workbook = xlsx.read(buffer, { type: "array" });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = xlsx.utils.sheet_to_json(worksheet);
    return new Response(JSON.stringify(json));
  } else {
    return new Response(
      JSON.stringify({ message: "File could not be fetched" })
    );
  }
}

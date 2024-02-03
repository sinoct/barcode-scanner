import { NextRequest, NextResponse } from "next/server";
import * as xlsx from "xlsx";

export async function GET(req: NextRequest, res: NextResponse) {
  const file = await fetch(
    "https://app.clouderp.hu/api/1/automatism/file-share/?s=Z0FBQUFBQmxnWjE4SjhrWS1TbmVGYnk2UGtiTU5mQ1JXd0V0clUxR1I2a2pWQjJuYUFRaGZBX1VmT0RfelljUkZmY1g1R3JiMWZuYnE2TUt2d3hfam9TZldMVGpHSzFZdFJFUmdNV3RxV2dzaUpxNTlGYmhWbVU9&f=xlsx",
    {
      headers: {
        "Content-Type": "application/ms-excel;",
      },
    }
  );
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const workbook = xlsx.read(buffer, { type: "array" });
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const json = xlsx.utils.sheet_to_json(worksheet);

  return new Response(JSON.stringify(json));
}

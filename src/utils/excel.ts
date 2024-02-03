export const fetchPriceList = async () => {
  const res = await fetch("/api/fetch-excel", {
    headers: {
      "Cache-Control": "no-cache, no-store, max-age=0, must-revalidate",
    },
    method: "GET",
    cache: "no-cache",
  });
  const content = await res.text();

  return JSON.parse(content);
};

export const fetchPriceList = async () => {
  const res = await fetch("/api/fetch-excel", {
    method: "GET",
    cache: "no-cache",
  });
  const content = await res.text();
  return JSON.parse(content);
};

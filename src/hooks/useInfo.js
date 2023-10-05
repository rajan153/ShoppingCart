// https://fakestoreapi.com/products ---API's

import { useEffect, useState } from "react";

export function useInfo() {
  const url = `https://fakestoreapi.com/products`;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const result = await fetch(url);
      const response = await result.json();
      setData(response);
    }
    catch (error) {
      console.error("Error aagya Fetching k time...");
      setData([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading};
}

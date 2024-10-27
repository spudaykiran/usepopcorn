import { useState, useEffect } from "react";
export function useLocalStorageState(initialState, Key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(Key);
    return JSON.parse(storedValue);
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, Key]
  );

  return [value, setValue];
}

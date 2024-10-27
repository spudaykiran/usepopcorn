import { useState, useEffect } from "react";
export function useLocalStorageState(initialState, Key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(Key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, Key]
  );

  return [value, setValue];
}

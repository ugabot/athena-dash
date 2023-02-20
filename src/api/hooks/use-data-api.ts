import { useState, useEffect, useRef } from "react";
import { User } from "../types";

const corsAnywhereProxy = "https://cors-anywhere.herokuapp.com";
const givenApi =
  "https://pgf7hywzb5.execute-api.us-east-1.amazonaws.com/users/1";
export const dataUrl = `${corsAnywhereProxy}/${givenApi}`;

// Use a diffent proxy in case of cors-anywhere rate limit
const proxiedUrl = `http://localhost:8010/proxy/users/1`;

// `https://api.allorigins.win/get?url=${encodeURIComponent('https://pgf7hywzb5.execute-api.us-east-1.amazonaws.com/users/1')}`

type Cache = { [url: string]: User[] | undefined };
export const useDataApi = (url: string = proxiedUrl) => {
  const firstUpdate = useRef<boolean>(true);
  const [apiUrl, setApiUrl] = useState<string>(url);
  const [data, setData] = useState<User[] | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const dataCache = useRef<Cache>({});

  useEffect(() => {
    if (!apiUrl) return;
    // check if the current reference to the
    // component is true. I.e. check that the
    // component is mounted to the view.
    if (!firstUpdate.current) {
      (async () => {
        try {
          if (dataCache.current[apiUrl]) {
            console.log("Cached");
            const cachedData = dataCache.current[apiUrl];
            setData(cachedData);
          } else {
            const res = await fetch(apiUrl);
            if (res.ok) {
              const resJson = await res.json();
              dataCache.current[apiUrl] = resJson;
              setData(resJson);
            } else {
              setError(true);
              throw new Error("Failed to fetch users");
            }
          }
        } catch (err) {
          setErrorMsg(JSON.stringify(err));
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      firstUpdate.current = false;
    };
  }, [apiUrl]);
  return { loading, data, error, errorMsg, callApi: setApiUrl };
};

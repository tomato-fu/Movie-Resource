import { useState, useEffect, useRef } from "react";
// API
import API from "../API";
import { isPersistedState } from "../helpers";
const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLordingMore, setIsLordingMore] = useState(false);

  useEffect(() => {
    const fetchMoives = async (page, serachItem = "") => {
      try {
        setLoading(true);
        setError(false);

        const moives = await API.fetchMovies(serachItem, page);

        setState((prev) => ({
          ...moives,
          results:
            page > 1
              ? [...prev.results, ...moives.results]
              : [...moives.results],
        }));

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    if (!searchTerm) {
      const sessionState = isPersistedState("homeState");

      if (sessionState) {
        console.log("Grabbing from session Storage");
        setState(sessionState);
        return;
      }
    }
    console.log("Grabbing from API");
    setState(initialState);
    fetchMoives(1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const fetchMoives = async (page, serachItem = "") => {
      try {
        setLoading(true);
        setError(false);

        const moives = await API.fetchMovies(serachItem, page);

        setState((prev) => ({
          ...moives,
          results:
            page > 1
              ? [...prev.results, ...moives.results]
              : [...moives.results],
        }));

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    if (!isLordingMore) return;
    fetchMoives(state.page + 1, searchTerm);
    setIsLordingMore(false);
  }, [isLordingMore, searchTerm, state.page]);

  useEffect(() => {
    if (!searchTerm) {
      console.log("Store into Sotorage");
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [searchTerm, state]);
  return { state, loading, error, setSearchTerm, searchTerm, setIsLordingMore };
};

import { useState, useEffect, useRef } from "react";
// API
import API from "../API";
import { isPersistedState } from "../helpers";
export const useMovieFetch = (movieID) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieID);
        const credits = await API.fetchCredits(movieID);

        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );
        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sesstionState = isPersistedState(movieID);
    if (sesstionState) {
      console.log("Grabbing from sesstion");
      setState(sesstionState);
      setLoading(false);
      return;
    } else fetchMovie();
  }, [movieID]);

  useEffect(() => {
    console.log("Store into Sotorage");
    sessionStorage.setItem(movieID, JSON.stringify(state));
  }, [movieID, state]);
  return { state, loading, error };
};

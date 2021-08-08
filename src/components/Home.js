import React, { useEffect, useState } from "react";

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
// API
import API from "../API";
// Image
import NoImage from "../images/no_image.jpg";
//Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spineer";
import Search from "./Search";
import Button from "./Button";
//Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

const Home = () => {
  const { state, loading, error, setSearchTerm, searchTerm, setIsLordingMore } =
    useHomeFetch();

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <Search setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Results" : "Popular Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}

      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLordingMore(true)} />
      )}
    </>
  );
};

export default Home;

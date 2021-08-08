import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Content } from "./Search.style";

import searchIcon from "../../images/search-icon.svg";
const Search = ({ setSearchTerm }) => {
  const [state, setstate] = useState("");
  const initial = useRef(true);
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Moive"
          onChange={(event) => setstate(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default Search;

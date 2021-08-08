import React from "react";

import { Wrapper, Content, Image } from "./Actor.style";
import PropTypes from "prop-types";

const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <Content>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Content>
  </Wrapper>
);

Actor.protoType = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Actor;

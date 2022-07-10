import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadGameDetails } from "../actions/gameDetails";
import { Link } from "react-router-dom";
import { popup } from "../animation";
const Game = ({ name, release, image, id }) => {
  const dispatch = useDispatch();
  const detailHandler = () => {
    dispatch(loadGameDetails(id));
    document.body.style.overflow = "hidden";
  };

  return (
    <UpcomingGames
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={id}
      onClick={detailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${id} `}>{name}</motion.h3>
        <p>{release}</p>
        <motion.img layoutId={`image ${id} `} src={image} alt={name} />
      </Link>
    </UpcomingGames>
  );
};

const UpcomingGames = styled(motion.div)`
  text-align: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    display: block;
  }
`;
export default Game;

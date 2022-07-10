import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Game from "./Game";
import { useHistory } from "react-router-dom";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import empty from "../img/star-empty.png";
import full from "../img/star-full.png";

const GameDetails = ({ id }) => {
  const numberId = Number(id);
  const platformsImage = (platforms) => {
    switch (platforms) {
      case "PlayStation 5":
        return playstation;
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Xbox Series S/X":
        return xbox;
      case "iOS":
        return apple;

      default:
        return gamepad;
    }
  };
  const getStars = () => {
    const stars = [];
    const rating = details.detail.rating;
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img src={full}></img>);
      } else {
        stars.push(<img src={empty}></img>);
      }
    }
    return stars;
  };

  const history = useHistory();
  const details = useSelector((state) => state.details);
  const isLoading = useSelector((state) => state.details.isLoading);
  const exitHandler = (e) => {
    if (e.target.classList.contains("shadow")) {
      history.push("/");
      document.body.style.overflow = "auto";
    }
  };
  return (
    <>
      {!isLoading && (
        <Card className="shadow" onClick={exitHandler}>
          <DetailPage layoutId={numberId}>
            <Stats>
              <div className="rating">
                <motion.h2 layoutId={`title ${numberId} `}>
                  {details.detail.name}
                </motion.h2>
                <h3>Rating: {details.detail.rating}</h3>
                {getStars()}
              </div>
              <PlatformContainer>
                <h2>Platforms</h2>
                <Platforms>
                  {details.detail.platforms.map((platform) => (
                    <img src={platformsImage(platform.platform.name)} alt="" />
                  ))}
                </Platforms>
              </PlatformContainer>
            </Stats>
            <div className="backgroundImage">
              <motion.img
                layoutId={`image ${numberId} `}
                src={details.detail.background_image}
                alt=""
              />
            </div>
            <div className="description">
              <p>{details.detail.description_raw}</p>
            </div>
            <div className="screenshots">
              {details.screenshot.map((image) => (
                <img src={image.image} alt="" />
              ))}
            </div>
          </DetailPage>
        </Card>
      )}
    </>
  );
};

const Card = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
  overflow-y: scroll;
  width: 100%;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: palegoldenrod;
  }
`;

const DetailPage = styled(motion.div)`
  width: 80%;

  background-color: white;
  border-radius: 10px;
  position: absolute;
  z-index: 10;
  left: 10%;
  img {
    width: 100%;
  }
  p {
    padding: 5rem 3rem;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 3rem 3rem;
  align-items: center;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const GameName = styled(motion.h2)`
  margin: 3rem 10rem 0rem 3rem;
  display: flex;
  justify-content: space-between;
`;
const Platforms = styled(motion.div)`
  display: flex;
  h3 {
    padding: 1rem 1rem;
  }
`;
const PlatformContainer = styled(motion.div)`
  text-align: center;
`;
export default GameDetails;

import { loadGames } from "../actions/gameAction";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Game from "../components/Game";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import GameDetails from "../components/GameDetails";
import { fadeIn } from "../animation";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);

  const { popularGames, newGames, upcomingGames, searched } = useSelector(
    (state) => state.games
  );

  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  return (
    <div>
      <AnimateSharedLayout>
        <GameList>
          <AnimatePresence>
            {pathId && <GameDetails id={pathId} />}
          </AnimatePresence>

          {searched.length ? (
            <div className="searchedgames">
              <motion.h2 variants={fadeIn} initial="hidden" animate="show">
                Searched Games
              </motion.h2>
              <Gamegrid>
                {searched.map((game) => (
                  <Game
                    name={game.name}
                    release={game.released}
                    image={game.background_image}
                    id={game.id}
                  />
                ))}
              </Gamegrid>
            </div>
          ) : (
            ""
          )}
          <motion.h2 variants={fadeIn} initial="hidden" animate="show">
            Upcoming Games
          </motion.h2>
          <Gamegrid>
            {upcomingGames.map((game) => (
              <Game
                name={game.name}
                release={game.released}
                image={game.background_image}
                id={game.id}
              />
            ))}
          </Gamegrid>
        </GameList>
        <GameList>
          <motion.h2 variants={fadeIn} initial="hidden" animate="show">
            Popular Games
          </motion.h2>
          <Gamegrid>
            {popularGames.map((game) => (
              <Game
                name={game.name}
                release={game.released}
                image={game.background_image}
              />
            ))}
          </Gamegrid>
        </GameList>
        <GameList>
          <motion.h2 variants={fadeIn} initial="hidden" animate="show">
            New Games
          </motion.h2>
          <Gamegrid>
            {newGames.map((game) => (
              <Game
                name={game.name}
                release={game.released}
                image={game.background_image}
              />
            ))}
          </Gamegrid>
        </GameList>
      </AnimateSharedLayout>
    </div>
  );
};
const GameList = styled.div`
  padding: 2rem 3rem;
`;
const Gamegrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  column-gap: 2rem;
  row-gap: 1rem;
  margin-top: 5rem;
`;
export default Home;

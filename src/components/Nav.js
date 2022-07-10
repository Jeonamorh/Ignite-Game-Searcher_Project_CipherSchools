import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../actions/gameDetails";
import { fadeIn } from "../animation";

const Nav = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const resetHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(inputText));
    setInputText("");
  };
  const clearHandler = () => {
    dispatch({ type: "CLEAR_SEARCH" });
  };
  return (
    <Navbar variants={fadeIn} initial="hidden" animate="show" exit="exit">
      <div onClick={clearHandler} className="logo">
        <img src={logo} alt="" />
      </div>
      <Search>
        <form>
          <input
            value={inputText}
            onChange={inputHandler}
            type="text"
            name=""
            id=""
          />
          <button onClick={resetHandler}>Submit</button>
        </form>
      </Search>
    </Navbar>
  );
};

const Navbar = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo {
    cursor: pointer;
  }
`;
const Search = styled(motion.div)`
  width: 50%;
  input {
    padding: 0.5rem 0.5rem;
    width: 70%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    margin: 1rem;
    border: transparent;
  }
  button {
    padding: 0.3rem 1rem;
    background-color: peachpuff;
    border: transparent;
  }
`;

export default Nav;

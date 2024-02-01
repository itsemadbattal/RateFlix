import { useState } from "react";
import { useDispatch } from "react-redux";

import logo from "../assets/logo.svg";

import styles from "./TheHeader.module.css";
import { NavLink } from "react-router-dom";

import { searchForAMovie } from "../store/movies-actions";

const TheHeader = () => {
  const [searchParam, setSearchParam] = useState("");

  const dispatch = useDispatch();

  const serachChangeHandler = (value) => {
    setSearchParam(value);
    dispatch(searchForAMovie(searchParam));
  };

  return (
    <div className={styles.header}>
      <NavLink to="/">RateFlix</NavLink>

      <div className={styles.searchContainer}>
        <input
          type="search"
          placeholder="movie name..."
          onChange={(event) => serachChangeHandler(event.target.value)}
        />
      </div>
      <img src={logo} className={styles.logo} />
    </div>
  );
};

export default TheHeader;

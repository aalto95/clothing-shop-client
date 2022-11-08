import React from "react";
import styles from "./Searchbar.module.scss";
import { Redirect } from "react-router-dom";

interface Props {
  searchField: string;
  isSearchbarToggled: boolean;
  isRedirecting: boolean;
  setSearchText: Function;
  toggleIsRedirecting: Function;
  onSearchFieldChange: Function;
}

const Searchbar: React.FC<Props> = (props) => {
  const checkKey = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter" && props.searchField) {
      props.setSearchText();
      props.toggleIsRedirecting(true);
    }
  };

  const onSearchFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onSearchFieldChange(e.target.value);
  };

  if (!props.isSearchbarToggled) return <></>;
  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        className={styles.inputField}
        placeholder="SEARCH PRODUCTS"
        onChange={onSearchFieldChange}
        value={props.searchField}
        onKeyUp={checkKey}
      />
      {props.isRedirecting && <Redirect to={"/search/" + props.searchField} />}
    </div>
  );
};

export default Searchbar;

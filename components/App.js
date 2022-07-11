import React from "react";
import Header from "./Header";
import RandomButton from "./RandomButton";
import ShowsContainer from "./ShowsContainer";
import Search from "./Search";
import {useEffect, useState} from "react";

function App() {
  const [shows, setShows] = useState([]);
  const [searchText, setSearchText] = useState("");
  function fetchShows(){
    fetch('https://api.tvmaze.com/schedule/full')
    .then(res => res.json())
    .then(showData => setShows(showData));
  }
  function handleChange(newText){
    setSearchText(newText);
  }

  useEffect(fetchShows, []);
  return (
    <div>
      <Header />
      <SearchBar onChange={handleChange}/>
      <RandomButton />
      <ShowsContainer shows={shows} searchText={searchText}/>
    </div>
  );
}

export default App;

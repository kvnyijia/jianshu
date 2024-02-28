import React from "react";
import List from "./components/List";
import Recommend from "./components/Recommned";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { HomeLeft, HomeRight, HomeWrapper } from "./style";

function Home() {
  return (
    <HomeWrapper>
      <HomeLeft>
        <img className="banner-img" src="https://m.media-amazon.com/images/I/61GC3F6XpsL._SX3000_.jpg"/>
        <Topic/>
        <List/>
      </HomeLeft>
      <HomeRight>
        <Recommend/>
        <Writer/>
      </HomeRight>
    </HomeWrapper>
  );
}

export default Home;

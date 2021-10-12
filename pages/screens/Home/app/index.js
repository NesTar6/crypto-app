import React from "react";
import Hero from "../Hero/index.js";
import Selection from "../Selection/index.js";
import Popular from "../Popular/index.js";
import HotBid from "../../../components/HotBid/index.js";
import Collections from "../Collections/index.js";
import Discover from "../Discover/index.js";
import Description from "../Description/index.js";
import Page from '../../../components/Page/index'

const Home = () => {
  return (
    <>
    <Page>
      <Hero />
      <Selection />
      <Popular />
      <HotBid classSection="section" />
      <Collections />
      <Discover />
      <Description />
      </Page>
    </>
  );
};

export default Home;

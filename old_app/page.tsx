"use client";
import HeroPage from "../components/Landing/Hero";
import NewHero from "../components/Landing/NewHero";
import WhatImWorkingOn from "../components/Landing/WhatImWorkingOn";
import GeneralMetaTag from "../components/Meta/GeneralMetaTag";

export default function Index() {
  return (
    <>
      <GeneralMetaTag />
      <NewHero />
      {/* <HeroPage /> */}
      {/* <WhatImWorkingOn /> */}
    </>
  );
}

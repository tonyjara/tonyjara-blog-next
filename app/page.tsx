"use client";
import HeroPage from "../components/Landing/Hero";
import WhatImWorkingOn from "../components/Landing/WhatImWorkingOn";
import GeneralMetaTag from "../components/Meta/GeneralMetaTag";

export default function Index() {
  return (
    <>
      <GeneralMetaTag />
      <HeroPage />
      <WhatImWorkingOn />
    </>
  );
}

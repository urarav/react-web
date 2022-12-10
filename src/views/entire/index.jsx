import React, { memo } from "react";
import { EntireWrapper } from "./style";

const Entire = memo(() => {
  return (
    <EntireWrapper>
      <section>Filter</section>
      <section>Main</section>
      <section>Pagenation</section>
    </EntireWrapper>
  );
});

export default Entire;

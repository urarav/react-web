import React, { memo, useState } from "react";
import { EntireFilterWrapper } from "./style";
import classNames from "classnames";
import filterData from "@/assets/mock/filter.json";
import ScrollView from "@/base-ui/scroll-view";

const EntireFilter = memo(() => {
  const [activeItems, setActiveItems] = useState([]);
  function handleClickItem(item) {
    const newActiveItems = [...activeItems];
    if (newActiveItems.includes(item)) {
      const targetIdx = newActiveItems.findIndex((it) => it === item);
      newActiveItems.splice(targetIdx, 1);
    } else {
      newActiveItems.push(item);
    }
    setActiveItems(newActiveItems);
  }
  return (
    <EntireFilterWrapper>
      <ScrollView>
        {filterData.map((li, idx) => (
          <li
            key={idx}
            onClick={(e) => handleClickItem(li)}
            className={classNames("item", {
              "is-active": activeItems.includes(li),
            })}
          >
            <span>{li}</span>
          </li>
        ))}
      </ScrollView>
    </EntireFilterWrapper>
  );
});

export default EntireFilter;

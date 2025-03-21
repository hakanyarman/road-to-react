import React, { useState } from "react";

export const Counter = () => {
  const [counts, setCounts] = useState({ leftCount: 0, rightCount: 0 });

  const [allClicks, setAllClicks] = useState([]);

  const handleLeftClick = () => {
    setCounts({
      ...counts,
      leftCount: counts.leftCount + 1,
    });
    setAllClicks(allClicks.concat("left"));
    // allClicks.concat("left") aslında yeni bir array. yani setAllClicks(newAllClicks) gibi bir şey yaptık aslında.
  };

  const handleRightClick = () => {
    setCounts({
      ...counts,
      rightCount: counts.rightCount + 1,
    });
    setAllClicks(allClicks.concat("right"))
  };

  return (
    <div>
      <button onClick={handleLeftClick}>left {counts.leftCount}</button>
      <button onClick={handleRightClick}>right {counts.rightCount}</button>
      <div>
        <span>click logs: </span>{allClicks.join(" ")}
      </div>
    </div>
  );
};

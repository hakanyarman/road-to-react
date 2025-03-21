import React, { useState } from "react";

export const Counter = () => {
  const [counts, setCounts] = useState({ leftCount: 0, rightCount: 0 });

  const handleLeftClick = () => {
    setCounts({
      ...counts,
      leftCount: counts.leftCount + 1,
    });
  };

  const handleRightClick = () => {
    setCounts({
      ...counts,
      rightCount: counts.rightCount + 1,
    });
  };

  return (
    <div>
      <button onClick={handleLeftClick}>left {counts.leftCount}</button>
      <button onClick={handleRightClick}>right {counts.rightCount}</button>
    </div>
  );
};

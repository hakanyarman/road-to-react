import React, { useState } from "react";
import Button from "./Button";

export const Counter = () => {
  const [counts, setCounts] = useState({ leftCount: 0, rightCount: 0 });

  const [allClicks, setAllClicks] = useState([]);
  const [totalClicks, setTotalClicks] = useState(allClicks.length);

  const handleLeftClick = () => {
    setCounts({
      ...counts,
      leftCount: counts.leftCount + 1,
    });
    setAllClicks(allClicks.concat("left"));
    setTotalClicks(totalClicks + 1);
    // allClicks.concat("left") aslında yeni bir array. yani setAllClicks(newAllClicks) gibi bir şey yaptık aslında.
  };

  //   const handleRightClick = () => {
  //     setCounts({
  //       ...counts,
  //       rightCount: counts.rightCount + 1,
  //     });
  //     setAllClicks(allClicks.concat("right"))
  //   };

  // diğer yöntemimiz bu setAllClicks için. doğrudan state'in kendini değiştirmemeliyiz.
  const handleRightClick = () => {
    setCounts({
      ...counts,
      rightCount: counts.rightCount + 1,
    });
    // setAllClicks(...allClicks.push("right"))
    setAllClicks(allClicks.concat("right"));
    setTotalClicks(totalClicks + 1);
  };

  return (
    <div>
      {/* <button onClick={handleLeftClick}>left {counts.leftCount}</button>
      <button onClick={handleRightClick}>right {counts.rightCount}</button> */}
      <Button buttonText={"left " +counts.leftCount.toString() } onClick={handleLeftClick}/>
      <Button buttonText={"right " + counts.rightCount.toString()} onClick={handleRightClick} />
      <div>
        {allClicks.length ? (
          <p>total click: {totalClicks}</p>
        ) : (
          <p>you havent clicked yet</p>
        )}

        <span>click logs: </span>
        {allClicks.join(" ")}
      </div>
    </div>
  );
};

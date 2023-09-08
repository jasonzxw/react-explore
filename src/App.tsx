import { useState, useCallback } from "react";
import "./App.css";

import Counter from "./components/Counter";
import ThemeContext from "./context/themeContext";
import Memo from "./components/Memo";
import TestRenders from "./components/TestRender";
import Tree from "./components/Tree/Tree";

import useTheme from "./hooks/useTheme";
import useTimeEnd from "./hooks/useEndTime";
import { TreeProps } from "./components/Tree/Tree";

function App() {
  const [flag, setFlag] = useState<boolean>(true);
  const [count, setCount] = useState<number>(1);
  const { theme, switchTheme } = useTheme();
  // const endTime = useTimeEnd(100)

  const data: TreeProps[] = [
    {
      text: "1",
      children: [
        {
          text: "1-1",
        },
        {
          text: "1-2",
        },
      ],
    },
    {
      text: "2",
      children: [
        {
          text: "2-1",
        },
        {
          text: "2-2",
          children: [
            {
              text: '2-2-1'
            }
          ]
        },
      ],
    },
    {
      text: '3',
    }
  ];
  const handleClick = useCallback(() => console.log(`memo click`), []);

  const batchUpdate = () => {
    setFlag((f) => !f);
    setCount((count) => count + 1);
  };
  return (
    <>
      <ThemeContext.Provider value={{ switchTheme, theme }}>
        <Tree array={data}/>
        <button onClick={() => switchTheme()}>root switch theme</button>
        <div onClick={batchUpdate}>root: flag{flag}</div>

        <TestRenders text="TEST_RENDER" count={count} />
        {/* <div> end time: {endTime}</div> */}
        <Memo text="memo" click={handleClick} />

        <div className="card">
          {/* same components same position */}
          {flag ? (
            <Counter text="first" children={<div>1</div>} />
          ) : (
            <Counter text="second" />
          )}
          {/* same components different position */}
          {flag && <Counter text="first" children={<div>1</div>} />}
          {!flag && <Counter text="second" />}
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

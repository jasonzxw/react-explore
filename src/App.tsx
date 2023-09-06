import { useState } from "react";
import "./App.css";

import Counter from "./components/Counter";
import useTheme from "./hooks/useTheme";
import ThemeContext from "./context/themeContext";

function App() {
  const [flag, setFlag] = useState<boolean>(true);
  const {theme , switchTheme} = useTheme();
  return (
    <>
      <ThemeContext.Provider value={{switchTheme ,theme}}>
        <button onClick={() => switchTheme()}>switch theme</button>
        <div onClick={() => setFlag((f) => !f)}>flag{flag}</div>
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

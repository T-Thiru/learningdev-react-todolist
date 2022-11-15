import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import ListBar from "./components/ListBar";
import { useState } from "react";
import DisplayList from "./components/DisplayList";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [checked, setChecked] = useState(false);
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <ListBar
          value={value}
          setValue={setValue}
          list={list}
          setList={setList}
          checked={checked}
          setChecked={setChecked}
        />
        {list
          .sort((a, b) => {
            return a.checked - b.checked;
          })
          .map((el, index) => {
            return (
              <DisplayList
                key={index}
                task={el}
                checked={checked}
                setChecked={setChecked}
              />
            );
          })}
      </main>
      <footer></footer>
    </>
  );
}

export default App;

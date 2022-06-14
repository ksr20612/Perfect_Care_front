import pallette from "./styles/pallette.css";

import Header from "./components/header";
import Screen from "./components/screen";
import TextBox from "./components/textBox";
import TextArea from "./components/textArea";
import MovieClip from "./components/movieClip";

function App() {
  return (
    <>
      <Header/>
      <Screen color="#aaa">
        <TextBox width="200px" />
        <TextArea color={pallette.VIOLET}/>
        <MovieClip />
      </Screen>
    </>
  );
}

export default App;

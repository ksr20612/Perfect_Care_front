import { useEffect } from "react";

import pallette from "./styles/pallette.css";
import Header from "./components/header";
import Screen from "./components/screen";
import TextBox from "./components/textBox";
import TextArea from "./components/textArea";
import MovieClip from "./components/movieClip";
import { useQuery } from "@apollo/client";

import { GET_STANDARD } from "./app/queries";

function App() {

  const { data, loading, error } = useQuery(GET_STANDARD, {
    variables: {
      userIdx: "1",
    }
  })
  if(loading) console.log("fetching data from apollo server...");
  if(error) console.log("could not fetch data...");
  if(data) console.log(data);

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

import { useEffect } from "react";

import Part2 from "./pages/part2";
import Header from "./components/header";
import Screen from "./components/screen";
import ProgressBar from "./components/progressBar";

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
        <Part2 />
      </Screen>
      <ProgressBar/>
    </>
  );
}

export default App;

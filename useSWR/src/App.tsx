import useSWR from "swr";
import "./App.css";
import { usePoke } from "./usePoke";

const fetcher = (args: string) => fetch(args).then((res) => res.json());

function App() {
  // const { poke, isLoading, isError } = usePoke("ditto");

  const name = "ditto";

  const { data: poke, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetcher
  );

  if (error) {
    <div>Errorだよ</div>;
  }

  if (!poke) {
    <div>isLoading...</div>;
  }

  return (
    <div className="App">
      <div>図鑑番号：{poke.id}</div>
      <div>なまえ：{poke.name}</div>
      <img src={poke.sprites.front_default} />
      <img src={poke.sprites.front_shiny} />
    </div>
  );
}

export default App;

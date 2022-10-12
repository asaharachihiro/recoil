import "./App.css";
import useSWR from "swr";

function App() {
  const fetcher = (args: string) => fetch(args).then((res) => res.json());

  const { data, error } = useSWR(
    "https://pokeapi.co/api/v2/pokemon/ditto",
    fetcher
  );
  if (error) {
    return <>ごめんね!errorだよ</>;
  }
  if (!data) {
    return <>loading...</>;
  }

  return (
    <div className="App">
      <div>図鑑番号：{data.id}</div>
      <div>なまえ：{data.name}</div>
      <img src={data.sprites.front_default} />
    </div>
  );
}

export default App;

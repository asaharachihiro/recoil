import useSWR from "swr";

export const usePoke = (name: string) => {
  const fetcher = (args: string) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetcher
  );

  if (error) {
    <div>error</div>;
  }

  if (!data) {
    <div>loading</div>;
  }

  return {
    poke: data,
    isLoading: !error && !data,
    isError: error,
  };
};

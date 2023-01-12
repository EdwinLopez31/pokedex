import { getAllPokemon } from "api/pokemon";
import { useInfiniteQuery } from "@tanstack/react-query";

const useInfinitePokemonQuery = () => {
  const { data, hasNextPage, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["pokemons"],
      ({ pageParam }) => {
        return getAllPokemon(pageParam);
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
        getPreviousPageParam: (lastPage) => lastPage.prevPage,
      }
    );

  return { data, hasNextPage, isLoading, fetchNextPage, isFetchingNextPage };
};

export default useInfinitePokemonQuery;

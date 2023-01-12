import CardList from "components/card-list";
import Card from "components/card";
import Loading from "components/loading";
import { Fragment, useEffect } from "react";
import useInfinitePokemonQuery from "./hooks/useInfinitePokemonQuery";
const PokemonList = () => {
  const { data, hasNextPage, isLoading, fetchNextPage, isFetchingNextPage } =
    useInfinitePokemonQuery();

  useEffect(() => {
    let fetchingSignal = false;

    const onScroll = async (
      event: any
      /* This throws a warning on line 46 & 50
          React.UIEvent<Document> & {
            target: {
              scrollingElement: {
                scrollHeight: number;
                scrollTop: number;
                clientHeight: number;
              };
            };
          }
     */
    ) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetchingSignal && scrollTop + clientHeight * 1.25 >= scrollHeight) {
        fetchingSignal = true;
        if (hasNextPage) await fetchNextPage();
        fetchingSignal = false;
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [hasNextPage]);

  if (isLoading) {
    return <LoaderWrapper />;
  }

  return (
    <CardList className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full relative'>
      {data?.pages.map((pageGroup: any, groupIndex: number) => {
        return (
          <Fragment key={`${groupIndex}`}>
            {pageGroup.result.map((pokemon: any, pokemonIndex: number) => {
              return (
                <Card className='justify-self-center' key={`${pokemon.name}`}>
                  <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                      groupIndex * 20 + pokemonIndex + 1
                    }.png`}
                    alt={pokemon.name}
                  />
                  <Card.Name className='p-2 first-letter:uppercase text-center'>
                    {pokemon.name}
                  </Card.Name>
                </Card>
              );
            })}
          </Fragment>
        );
      })}
      {isFetchingNextPage && <LoaderWrapper />}
    </CardList>
  );
};

const LoaderWrapper = () => (
  <div className='grid place-content-center col-span-full w-full'>
    <Loading className='w-6 h-6' />
  </div>
);

export default PokemonList;

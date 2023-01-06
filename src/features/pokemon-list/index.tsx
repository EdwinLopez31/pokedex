import { getAllPokemon } from "api/pokemon";
import { useQuery } from "react-query";

import CardList from "components/card-list";
import Card from "components/card";
import Loading from "components/loading";
const PokemonList = () => {
  const getPokemonQuery = useQuery("todos", () => getAllPokemon());

  if (getPokemonQuery.isLoading) {
    return (
      <div className='grid place-content-center w-full'>
        <Loading className='w-6 h-6' />
      </div>
    );
  }
  return (
    <CardList className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full'>
      {/* 
      // Pokemon is of type any
      // are there ways to get the type schema of the data from the API
      // or we have to manually declare the schema?
      */}
      {getPokemonQuery.data?.result.map((pokemon: any, index: number) => {
        return (
          <Card
            className='justify-self-center'
            key={`${pokemon.name}-${index}`}
          >
            <Card.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                index + 1
              }.png`}
              alt={pokemon.name}
            />
            <Card.Name className='p-2 first-letter:uppercase text-center'>
              {pokemon.name}
            </Card.Name>
          </Card>
        );
      })}
    </CardList>
  );
};

export default PokemonList;

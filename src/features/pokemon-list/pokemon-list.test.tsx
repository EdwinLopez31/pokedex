import { screen, render, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import PokemonList from ".";
const queryClient = new QueryClient();

describe("Pokemon List Feature", () => {
  it("shows a loading component while fetching from api", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PokemonList />
      </QueryClientProvider>
    );

    expect(screen.getByTitle("Loading")).toBeInTheDocument();
  });

  it("shows a pokemon list component after fetching from api", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PokemonList />
      </QueryClientProvider>
    );

    waitFor(() => expect(screen.getByRole("List")).toBeInTheDocument());
  });
});

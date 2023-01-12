import {
  screen,
  render,
  waitFor,
  fireEvent,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { vi } from "vitest";
import PokemonList from ".";
import useInfinitePokemonQuery from "./hooks/useInfinitePokemonQuery";
import { mockPokemonResponse } from "tests/mockData";
vi.mock("./hooks/useInfinitePokemonQuery");

const PokemonListWrapper = () => {
  const queryClient = new QueryClient({
    logger: {
      log: console.log,
      warn: console.warn,
      error: process.env.NODE_ENV === "test" ? () => {} : console.error,
    },
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList />
    </QueryClientProvider>
  );
};

const mockedUseInfinitePokemonQuery = useInfinitePokemonQuery as jest.Mock<any>;

describe("Pokemon List Feature", () => {
  beforeEach(() => {
    mockedUseInfinitePokemonQuery.mockImplementation(() => ({
      isLoading: true,
    }));
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("shows a loading component while fetching from api", () => {
    render(<PokemonListWrapper />);

    expect(screen.getByTitle("Loading")).toBeInTheDocument();
  });

  it("shows a pokemon list component after fetching from api", async () => {
    mockedUseInfinitePokemonQuery.mockImplementation(() => ({
      isLoading: false,
      data: mockPokemonResponse,
    }));
    render(<PokemonListWrapper />);

    await waitFor(() => expect(screen.getByRole("list")).toBeInTheDocument());
  });

  it("shows a pokemon list item component after fetching from api", async () => {
    mockedUseInfinitePokemonQuery.mockImplementation(() => ({
      isLoading: false,
      data: mockPokemonResponse,
    }));

    render(<PokemonListWrapper />);
    await waitFor(() => expect(screen.getAllByRole("listitem").length > 0));
  });

  // I do not know yet how to test / mock automatic fetching when user scrolls down
  // pls feel free to help me and make a PR regarding to resolve the testing of infinite query
});

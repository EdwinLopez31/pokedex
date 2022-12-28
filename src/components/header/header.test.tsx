import { screen, render } from "@testing-library/react";
import Header from ".";

describe("Header Component", () => {
  it("has a header html tag", () => {
    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders a logo of the application", () => {
    render(<Header />);

    expect(screen.getByRole("img", { name: "pokeball" })).toBeInTheDocument();
  });

  it("renders the name of the application", () => {
    render(<Header />);

    expect(screen.getByRole("heading")).toHaveTextContent(/pokedex/i);
  });

  it("renders a search field", () => {
    render(<Header />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});

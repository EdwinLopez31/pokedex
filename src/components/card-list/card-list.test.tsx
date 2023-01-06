import { screen, render } from "@testing-library/react";
import CardList from ".";

describe("Card List Component", () => {
  it("has a aria role of list", () => {
    render(<CardList>hey</CardList>);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("renders the element passed to it given that the children is not an object", () => {
    render(<CardList>hey</CardList>);

    expect(screen.getByText("hey")).toBeInTheDocument();
  });

  it("renders the element passed to it given that the children is not an object", () => {
    render(<CardList>{["test", "test2"]}</CardList>);

    expect(screen.getByText("testtest2")).toBeInTheDocument();
  });

  it("renders the element passed to it given that the children is not an object", () => {
    render(
      <CardList>
        <span>text</span>
      </CardList>
    );

    expect(screen.getByText("text")).toBeInTheDocument();
  });
});

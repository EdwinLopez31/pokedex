import { screen, render } from "@testing-library/react";
import Card from ".";

describe("Card", () => {
  const cardDetails = {
    name: "Sample Card",
    image: "https://via.placeholder.com/20/",
    description: "Sample Description",
  };

  it("has a role of list item", () => {
    render(
      <Card>
        <Card.Name>{cardDetails.name}</Card.Name>
      </Card>
    );

    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  it("displays the card image", () => {
    render(
      <Card>
        <Card.Image alt={cardDetails.name} src={cardDetails.image} />
      </Card>
    );

    expect(
      screen.getByRole("img", { name: cardDetails.name })
    ).toBeInTheDocument();
  });

  it("displays the proper alt name of the image", () => {
    render(
      <Card>
        <Card.Image alt={cardDetails.name} src={cardDetails.image} />
      </Card>
    );

    expect(screen.getByAltText(`${cardDetails.name}`)).toBeInTheDocument();
  });

  it("displays the name of the card", () => {
    render(
      <Card>
        <Card.Name>{cardDetails.name}</Card.Name>
      </Card>
    );

    expect(screen.getByText(`${cardDetails.name}`)).toBeInTheDocument();
  });

  it("displays the description of the card", () => {
    render(
      <Card>
        <Card.Description>{cardDetails.description}</Card.Description>
      </Card>
    );

    expect(screen.getByText(/sample description/i)).toBeInTheDocument();
  });
});

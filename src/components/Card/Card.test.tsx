import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";
import { Card as CardType } from "../../types/Card";

jest.mock("../FavoriteButton/FavoriteButton", () => () => (
  <div data-testid="favorite" />
));

const card: CardType = {
  id: "1",
  name: "Lightning Bolt",
  type: "Instant",
  text: "Deals 3 damage to any target.",
  imageUrl: "image.png",
};

describe("Card component", () => {
  it("shows zoomed image when clicked and hides on overlay click", () => {
    render(<Card card={card} />);

    const image = screen.getByAltText(card.name);
    fireEvent.click(image);

    const overlay = screen.getByTestId("zoom-overlay");
    expect(screen.getByTestId("zoomed-image")).toBeInTheDocument();

    fireEvent.click(overlay);
    expect(screen.queryByTestId("zoom-overlay")).not.toBeInTheDocument();
  });
});

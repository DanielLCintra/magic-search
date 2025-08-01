import { render, screen, fireEvent } from "@testing-library/react";
import FavoriteButton from "./FavoriteButton";
import { Card } from "../../types/Card";
import { useFavorites } from "../../hooks/useFavorites";

jest.mock("../../hooks/useFavorites");

const card: Card = { id: "1", name: "Bolt", type: "Instant" };

describe("FavoriteButton", () => {
  it("adds card to favorites when not favorite", () => {
    const addFavorite = jest.fn();
    const removeFavorite = jest.fn();
    (useFavorites as jest.Mock).mockReturnValue({
      isFavorite: () => false,
      addFavorite,
      removeFavorite,
    });
    render(<FavoriteButton card={card} />);
    const button = screen.getByTestId("favorite-button");
    fireEvent.click(button);
    expect(addFavorite).toHaveBeenCalledWith(card);
  });

  it("removes card when already favorite", () => {
    const addFavorite = jest.fn();
    const removeFavorite = jest.fn();
    (useFavorites as jest.Mock).mockReturnValue({
      isFavorite: () => true,
      addFavorite,
      removeFavorite,
    });
    render(<FavoriteButton card={card} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(removeFavorite).toHaveBeenCalledWith(card);
  });
});

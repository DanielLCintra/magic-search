import { renderHook, act, waitFor } from "@testing-library/react";
import { useFavorites } from "./useFavorites";
import { Card } from "../types/Card";

describe("useFavorites", () => {
  const card: Card = { id: "1", name: "Bolt", type: "Instant" };

  beforeEach(() => {
    localStorage.clear();
  });

  it("initializes state from localStorage", async () => {
    localStorage.setItem("mtg-favorites", JSON.stringify([card]));
    const { result } = renderHook(() => useFavorites());
    await waitFor(() => {
      expect(result.current.favorites).toEqual([card]);
    });
  });

  it("adds a favorite card", async () => {
    const { result } = renderHook(() => useFavorites());
    act(() => {
      result.current.addFavorite(card);
    });
    await waitFor(() => {
      expect(result.current.favorites).toEqual([card]);
    });
    expect(JSON.parse(localStorage.getItem("mtg-favorites") || "[]")).toEqual([
      card,
    ]);
    expect(result.current.isFavorite(card)).toBe(true);
  });

  it("removes a favorite card", async () => {
    localStorage.setItem("mtg-favorites", JSON.stringify([card]));
    const { result } = renderHook(() => useFavorites());
    await waitFor(() => {
      expect(result.current.favorites).toEqual([card]);
    });

    act(() => {
      result.current.removeFavorite(card);
    });
    await waitFor(() => {
      expect(result.current.favorites).toEqual([]);
    });
    expect(JSON.parse(localStorage.getItem("mtg-favorites") || "[]")).toEqual(
      []
    );
    expect(result.current.isFavorite(card)).toBe(false);
  });
});

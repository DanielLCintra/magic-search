import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("calls onChange when typing", () => {
    const handleChange = jest.fn();
    render(<SearchBar value="" onChange={handleChange} />);

    const input = screen.getByPlaceholderText(
      "Pesquise cartas do Magic: The Gathering",
    );
    fireEvent.change(input, { target: { value: "Bolt" } });

    expect(handleChange).toHaveBeenCalledWith("Bolt");
  });

  it("renders with provided value", () => {
    render(<SearchBar value="Test" onChange={() => {}} />);
    expect(screen.getByDisplayValue("Test")).toBeInTheDocument();
  });
});

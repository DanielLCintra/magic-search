import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

jest.mock("next/link", () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

jest.mock("next/image", () => {
  return (props: any) => <img {...props} />;
});

describe("NavBar", () => {
  it("renders main links", () => {
    render(<NavBar />);

    expect(screen.getByText("Busca")).toHaveAttribute("href", "/");
    expect(screen.getByText("Favoritos")).toHaveAttribute("href", "/favorites");
  });
});

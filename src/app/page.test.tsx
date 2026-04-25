import { render, screen } from "@testing-library/react";
import Page from "./[lang]/page";

describe("Home page", () => {
  it("renders the localized landing page content", async () => {
    render(await Page({ params: Promise.resolve({ lang: "en" }) }));

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /deep research\.\s*distilled to truth\./i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /begin research/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /a rigorous methodology for complex inquiries\./i,
      }),
    ).toBeInTheDocument();
  });
});

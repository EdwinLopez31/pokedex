import { screen, render } from "@testing-library/react";
import AppLayout from "./AppLayout";
describe("App Layout", () => {
  it("should render children inside html main tag", () => {
    render(
      <AppLayout>
        <p>hey</p>
      </AppLayout>
    );

    expect(screen.getByRole("main")).toContainHTML("<p>hey</p>");
  });
});

import React from "react";
import { render as rtlRender } from "react-testing-library";
import { App } from "./App";

function render({ Component = () => <App /> } = {}) {
  return rtlRender(<Component />);
}

describe("basic rendering", () => {
  it("renders", () => {
    render();
  });

  it("says that it is working", () => {
    const { getByText } = render();
    expect(getByText(/is working/i)).toBeInTheDocument();
  });

  it("also renders the text 'Hello World'", () => {
    const { getByText } = render();
    expect(getByText(/hello world/i)).toBeInTheDocument();
  });
});

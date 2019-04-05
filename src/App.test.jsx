import React from "react";
import {
  render as rtlRender,
  fireEvent,
  wait,
  act,
  waitForElement
} from "react-testing-library";
import { App } from "./App";
import "@babel/polyfill";

function render({ component = <App /> } = {}) {
  return rtlRender(component);
}

describe("basic rendering", () => {
  it("renders", () => {
    render();
  });
  it("says that it is working", () => {
    const { getByText } = render();
    expect(getByText(/it is working/i)).toBeInTheDocument();
  });
  it("prints 'hello <username>'", () => {
    const { getByText } = render({
      component: <App username="Tim" />
    });
    expect(getByText(/hello tim/i)).toBeInTheDocument();
    expect(getByText(/Tim/)).toBeInTheDocument();
  });

  it("has a correctly labeled input", () => {
    const { getByLabelText, debug } = render();
    const input = getByLabelText(/username/i);
    expect(input).toBeInTheDocument();

    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "NeuerText" } });

    expect(input.value).toBe("NeuerText");

    // debug();
  });

  it("switches from loading to success", async () => {
    const { getByText, queryByText } = render();
    expect(getByText(/loading/i)).toBeInTheDocument();
    expect(queryByText(/success/i)).not.toBeInTheDocument();

    await act(() => waitForElement(() => getByText(/success/i)));

    expect(getByText(/success/i)).toBeInTheDocument();
    expect(queryByText(/loading/i)).not.toBeInTheDocument();
  });
});

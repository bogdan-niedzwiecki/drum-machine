import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, act } from "@testing-library/react";
import Power from ".";

const mockedProps = {
  btn: "p",
  power: false,
  onChange: vi.fn(),
};

describe("Power", () => {
  it("Should turn off on 'p' keypress", async () => {
    await act(async () => {
      render(<Power {...mockedProps} />);
    });

    fireEvent.keyPress(document, { key: "p" });

    expect(mockedProps.onChange).toBeCalled();
  });
});

import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, act } from "@testing-library/react";
import Volume from ".";

const mockedProps = {
  volume: 0.3,
  onChange: vi.fn(),
};

describe("Volume", () => {
  it("Should change volume on 'ArrowUp' key press", async () => {
    await act(async () => {
      render(<Volume {...mockedProps} />);
    });

    fireEvent.keyDown(document, { key: "ArrowUp" });

    expect(mockedProps.onChange).toBeCalled();
  });

  it("Should change volume on 'ArrowDown' key press", async () => {
    await act(async () => {
      render(<Volume {...mockedProps} />);
    });
    fireEvent.keyDown(document, { key: "ArrowDown" });

    expect(mockedProps.onChange).toBeCalled();
  });
});

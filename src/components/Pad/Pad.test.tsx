import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import Pad from ".";

const mockedProps = {
  btn: "q",
  name: "Heater-1",
  url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  power: true,
  volume: 0.3,
  onPlay: vi.fn(),
};

describe("Pad", () => {
  it("Should be pressed on 'Q' keydown", async () => {
    await act(async () => {
      render(<Pad {...mockedProps} />);
    });
    const padButton = screen.getByTestId("pad");

    fireEvent.keyDown(document, { key: "Q" });

    expect(padButton).toHaveClass("drummachine__pad--pressed");
  });

  it("Should be unpressed on 'Q' keyup", async () => {
    await act(async () => {
      render(<Pad {...mockedProps} />);
    });
    const padButton = screen.getByTestId("pad");

    fireEvent.keyDown(document, { key: "Q" });
    fireEvent.keyUp(document, { key: "Q" });

    expect(padButton).not.toHaveClass("drummachine__pad--pressed");
  });
});

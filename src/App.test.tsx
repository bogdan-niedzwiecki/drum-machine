import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("Should play sound on pad click", async () => {
    await act(async () => {
      render(<App />);
    });

    const padButton = screen.queryAllByTestId("pad")[0];
    const display = screen.getByTestId("display");

    fireEvent.click(padButton);

    expect(display).toHaveTextContent("Heater-1");
  });

  it("Should play sound on pad keydown", async () => {
    await act(async () => {
      render(<App />);
    });

    const display = screen.getByTestId("display");

    fireEvent.keyDown(document, { key: "Q", code: "KeyQ" });

    expect(display).toHaveTextContent("Heater-1");
  });

  it("Should change volume level", async () => {
    await act(async () => {
      render(<App />);
    });

    const display = screen.getByTestId("display");
    const volumeInput = screen.getByTestId("volume");

    fireEvent.change(volumeInput, { target: { value: "0.25" } });

    expect(display).toHaveTextContent("Volume: 0.25");
  });

  it("Should turn off", async () => {
    await act(async () => {
      render(<App />);
    });

    const display = screen.getByTestId("display");
    const powerButton = screen.getByTestId("power");

    fireEvent.click(powerButton);

    expect(display).toHaveTextContent("Power Off");
  });

  it("Should change preset", async () => {
    await act(async () => {
      render(<App />);
    });

    const display = screen.getByTestId("display");
    const presetButton = screen.getByTestId("preset");

    fireEvent.click(presetButton);
    fireEvent.click(presetButton);

    expect(display).toHaveTextContent("Preset: Primary");
  });
});

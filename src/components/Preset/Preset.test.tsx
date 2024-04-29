import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, act } from "@testing-library/react";
import Preset from ".";
import { PresetEnum } from "../../App.types";

const mockedProps = {
  btn: "[",
  preset: PresetEnum.Primary,
  onChange: vi.fn(),
};

describe("Preset", () => {
  it("Should change preset on '[' keypress", async () => {
    await act(async () => {
      render(<Preset {...mockedProps} />);
    });

    fireEvent.keyPress(document, { key: "[" });

    expect(mockedProps.onChange).toBeCalled();
  });
});

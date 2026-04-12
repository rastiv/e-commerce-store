import { describe, it, expect } from "vitest";
import { classNames } from "./classNames";

describe("classNames", () => {
  it("should return empty string when no arguments are provided", () => {
    expect(classNames()).toBe("");
  });

  it("should handle single string argument", () => {
    expect(classNames("btn")).toBe("btn");
  });

  it("should join multiple string arguments with spaces", () => {
    expect(classNames("btn", "primary", "large")).toBe("btn primary large");
  });

  it("should filter out undefined and null values", () => {
    expect(classNames("btn", undefined, null, "primary")).toBe("btn primary");
  });

  it("should handle object with truthy values", () => {
    expect(classNames({ btn: true, primary: true, disabled: false })).toBe(
      "btn primary",
    );
  });

  it("should combine strings and objects", () => {
    expect(classNames("btn", { primary: true, secondary: false })).toBe(
      "btn primary",
    );
  });

  it("should handle multiple objects", () => {
    expect(classNames({ btn: true }, { primary: true, disabled: false })).toBe(
      "btn primary",
    );
  });

  it("should handle falsy string values as empty", () => {
    expect(classNames("btn", "", "primary")).toBe("btn primary");
  });

  it("should handle complex mixed arguments", () => {
    expect(
      classNames(
        "btn",
        { primary: true, disabled: false },
        undefined,
        "text-lg",
        { "font-bold": true, "text-red": false },
      ),
    ).toBe("btn primary text-lg font-bold");
  });

  it("should return empty string for all falsy values", () => {
    expect(classNames(null, undefined, "", { active: false })).toBe("");
  });
});

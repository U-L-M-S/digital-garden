import { describe, it, expect } from "vitest";

/**
 * Guards the whole Eleventy config against load-time breakage.
 *
 * Dependency bumps (especially majors that go ESM-only) can turn a
 * `require()`d plugin into a namespace object, which Eleventy rejects with
 * "Invalid EleventyConfig.addPlugin signature". That failure only surfaces
 * at deploy time, breaking every preview build. Loading the config here
 * catches it in `npm test` instead.
 */
describe("eleventy config", () => {
  it("loads and processes every plugin without error", async () => {
    const { default: Eleventy } = await import("@11ty/eleventy");
    const eleventy = new Eleventy("src/site", "dist", { quietMode: true });

    await expect(eleventy.init()).resolves.not.toThrow();
  }, 60000);

  it("registers the RSS plugin as a callable function", async () => {
    const rss = require("@11ty/eleventy-plugin-rss");
    const plugin = rss.rssPlugin ?? rss;

    expect(typeof plugin).toBe("function");
  });
});

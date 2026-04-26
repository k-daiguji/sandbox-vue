import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import App from "@/App.vue";

describe("app", () => {
  it("mounts renders properly", () => {
    const WRAPPER = mount(App);

    const ACTUAL = WRAPPER.text();

    expect(ACTUAL).toContain("You did it!");
  });
});

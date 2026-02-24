import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import App from "@/App.vue";

describe("App", () => {
  it("mounts renders properly", () => {
    const wrapper = mount(App);

    const actual = wrapper.text();

    expect(actual).toContain("You did it!");
  });
});

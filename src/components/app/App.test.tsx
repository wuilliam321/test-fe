import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import App from "./App";

describe("RestaurantMap", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it("should render a <div />", () => {
    expect(wrapper.find(".App").length).toEqual(1);
  });

  it("should render a <RestaurantMap />", () => {
    expect(wrapper.find("RestaurantMap").length).toEqual(1);
  });
});

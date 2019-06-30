import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import RestaurantList from "./RestaurantList";
import RestaurantsProps from "../../shared/props/RestaurantsProps";

describe("RestaurantList", () => {
  let wrapper: ShallowWrapper;
  let restaurantsProps: RestaurantsProps

  beforeAll(() => {
    restaurantsProps = {
      restaurants: []
    }
  })

  beforeEach(() => (wrapper = shallow(<RestaurantList {...restaurantsProps} />)));

  it("should render a <div />", () => {
    expect(wrapper.find(".RestaurantList").length).toEqual(1);
  });
});

import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import RestaurantMap from "./RestaurantMap";
import RestaurantsProps from "../../shared/props/RestaurantsProps";

describe("RestaurantMap", () => {
  let wrapper: ShallowWrapper;
  let restaurantsProps: RestaurantsProps;

  beforeAll(() => {
    restaurantsProps = {
      restaurants: []
    };
  });

  beforeEach(
    () => (wrapper = shallow(<RestaurantMap {...restaurantsProps} />))
  );

  it("should render a <div />", () => {
    expect(wrapper.find(".RestaurantMap").length).toEqual(1);
  });
});

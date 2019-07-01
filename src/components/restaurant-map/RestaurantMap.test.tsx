import { shallow, ShallowWrapper, mount } from "enzyme";
import React from "react";
import RestaurantMap from "./RestaurantMap";
import RestaurantMapProps from "../../shared/props/RestaurantMapProps";

describe("RestaurantMap", () => {
  let wrapper: ShallowWrapper;
  let restaurantMapProps: RestaurantMapProps;

  beforeAll(() => {
    restaurantMapProps = {
      restaurants: [],
      setRestaurants: jest.fn()
    };
  });

  beforeEach(
    () => (wrapper = shallow(<RestaurantMap {...restaurantMapProps} />))
  );

  it("should render a <div />", () => {
    expect(wrapper.find(".RestaurantMap").length).toEqual(1);
  });
});

import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import RestaurantListProps from "../../shared/props/RestaurantListProps";
import RestaurantList from "./RestaurantList";

describe("RestaurantList", () => {
  let wrapper: ShallowWrapper;
  let restaurantListProps: RestaurantListProps;

  beforeAll(() => {
    restaurantListProps = {
      restaurants: []
    };
  });

  beforeEach(
    () => (wrapper = shallow(<RestaurantList {...restaurantListProps} />))
  );

  it("should render a <div />", () => {
    expect(wrapper.find(".RestaurantList").length).toEqual(1);
  });
});

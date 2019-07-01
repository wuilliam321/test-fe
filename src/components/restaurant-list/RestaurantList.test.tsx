import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import RestaurantListProps from "../../shared/props/RestaurantListProps";
import RestaurantList from "./RestaurantList";

describe("RestaurantList", () => {
  let wrapper: ShallowWrapper;
  let restaurantListProps: RestaurantListProps;

  beforeAll(() => {
    restaurantListProps = {
      restaurants: [
        {
          id: 1,
          logo: "1",
          ratingScore: "1",
          deliveryTimeMaxMinutes: "1",
          link: "1",
          name: "1",
          coordinates: "1",
          topCategories: "1"
        }
      ]
    };
  });

  beforeEach(
    () => (wrapper = shallow(<RestaurantList {...restaurantListProps} />))
  );

  it("should render a <div />", () => {
    expect(wrapper.find(".RestaurantList").length).toEqual(1);
  });
});

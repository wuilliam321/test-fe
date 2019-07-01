import { shallow, ShallowWrapper, mount } from "enzyme";
import React from "react";
import RestaurantMap from "./RestaurantMap";
import RestaurantMapProps from "../../shared/props/RestaurantMapProps";

describe("RestaurantMap", () => {
  let wrapper: ShallowWrapper;
  let restaurantMapProps: RestaurantMapProps;

  beforeAll(() => {
    restaurantMapProps = {
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
      ],
      setRestaurants: jest.fn()
    };
  });

  beforeEach(
    () => (wrapper = shallow(<RestaurantMap {...restaurantMapProps} />))
  );

  it("should render a <div />", () => {
    expect(wrapper.find(".RestaurantMap").length).toEqual(1);
  });

  it("should render a <div />", () => {
    expect(wrapper.find(".RestaurantMap").length).toEqual(1);
  });
});

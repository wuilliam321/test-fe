import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import RestaurantItem from "./RestaurantItem";
import RestaurantItemProps from "../../shared/props/RestaurantItemProps";

describe("RestaurantItem", () => {
  let wrapper: ShallowWrapper;
  let restaurantItemProps: RestaurantItemProps;

  beforeAll(() => {
    restaurantItemProps = {
      restaurant: {
        id: 1,
        logo: '1',
        ratingScore: '1',
        deliveryTimeMaxMinutes: '1',
        link: '1',
        name: '1',
        coordinates: '1',
        topCategories: '1',
      }
    };
  });

  beforeEach(
    () => (wrapper = shallow(<RestaurantItem {...restaurantItemProps} />))
  );

  it("should render a <div />", () => {
    expect(wrapper.find(".RestaurantItem").length).toEqual(1);
  });
});

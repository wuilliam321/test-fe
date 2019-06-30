import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import RestaurantMarker from "./RestaurantMarker";
import RestaurantItemProps from "../../shared/props/RestaurantItemProps";

describe("RestaurantMarker", () => {
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
    () => (wrapper = shallow(<RestaurantMarker {...restaurantItemProps} />))
  );

  it("should render a <div />", () => {
    expect(wrapper.find(".RestaurantMarker").length).toEqual(1);
  });
});

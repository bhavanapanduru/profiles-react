import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import ProfileCardComponent from "./ProfileCardComponent";

Enzyme.configure({ adapter: new Adapter() });
let component;

beforeEach(() => {
    const person = {
        image: "imageTestUrl",
        name: "Bhavana P",
        age: 23,
        place: "AP"
    };

    component = shallow(<ProfileCardComponent person={person} />);
});

it("should show person name", () => {
    const nameTag = component.find(".name");
    expect(nameTag.text()).toBe("Bhavana P");
});

it("should show person age", () => {
    const ageTag = component.find("#age");
    expect(ageTag.text()).toBe("Age: 23");
});

it("should show person place", () => {
    const placeTag = component.find("#place");
    expect(placeTag.text()).toBe("Place: AP");
});

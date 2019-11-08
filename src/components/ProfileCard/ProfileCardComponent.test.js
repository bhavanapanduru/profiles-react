import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme";
import ProfileCardComponent from "./ProfileCardComponent";

Enzyme.configure({ adapter: new Adapter() });
let component;

beforeEach(() => {
    const person = [
        {
            image: "imageTestUrl",
            name: "Bhavana P"
        }
    ];

    component = shallow(<ProfileCardComponent person={person} />);
});

it("should show person name", () => {
    const nameTag = component.find(".name");
    expect(nameTag.text()).toBe("Bhavana P");
});

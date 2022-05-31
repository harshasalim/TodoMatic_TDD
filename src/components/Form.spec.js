import { shallow } from "enzyme";
import React from "react";
import Form from './Form';
import "../setupTests";

describe("Basic rendering of Form", () => {
    it("Should render form component", () => {
        const form = shallow(<Form/>);
        const formExists = form.find("form").exists();
        expect(formExists).toBeTruthy();
    });
    it("Should render new task input text box", () => {
        const form = shallow(<Form/>);
        const inputTextBox = form.find("input");
        expect(inputTextBox).toHaveLength(1);
    });
    it("Should render submit button", () => {
        const form = shallow(<Form/>);
        const submitButton = form.find("button");
        expect(submitButton).toHaveLength(1);
    });
});

describe("Functionality of Form", () => {
    it("Should add new task", () => {

    });
});


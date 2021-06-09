import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus.jsx';

describe("Profile status component", () => {
    test("status from props should be in the state", () =>{
        const component = create(<ProfileStatus status="it-it" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-it");
    });

    test("after creation <span> should be displayed", () =>{
        const component = create(<ProfileStatus status="it-it" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation <span> should contains correct status", () =>{
        const component = create(<ProfileStatus status="it-it" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("it-it");
    });

    test("after creation <input> shouldnt be displayed", () =>{
        const component = create(<ProfileStatus status="it-it" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("input should be displayed in edit mode instead of span", () =>{
        const component = create(<ProfileStatus status="it-it" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("it-it");
    });

    test("callbach should be called", () =>{
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="it-it" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });

});
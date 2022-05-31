import React from "react";
import "../index.css";

export default function Form(){
    return(
        <form>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    New task
                </label>
            </h2>
            <input type="text" id="new-todo-input" className="input input__lg"
                name="text" autoComplete="off" data-testid="Form-input" />
            <button type="submit" className="btn btn__primary btn__lg">Add</button>
        </form>
    );
}
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("adds input to the list", () => {
    render(<ContactForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    fireEvent.change(firstNameInput, {target: { value: "Travis"}})
  })
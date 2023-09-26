import * as random from "./random";

random.choice = jest.fn();

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Eightball from "./Eightball";


const answers = [
    { msg: "No", color: "red" },

];

it("renders initially", function () {
  let { queryByText } = render(<Eightball answers={answers} />);
  
  expect(queryByText("Yes")).not.toBeInTheDocument();
  expect(queryByText("Think of Question.")).toBeInTheDocument();

});

it("changes on click", function () {
  random.choice
      .mockReturnValueOnce({ msg: "Yes", color: "red" })
      .mockReturnValueOnce({ msg: "Maybe", color: "pink" });
      
   let { container, queryByText } = render(<Eightball answers={answers} />);

   fireEvent.click(container.querySelector(".Eightball"));

   expect(queryByText("Yes")).toBeInTheDocument();
   expect(queryByText("Think of Question.")).not.toBeInTheDocument();

   fireEvent.click(container.querySelector(".Eightball"));

   expect(queryByText("Maybe")).toBeInTheDocument();
   expect(queryByText("Yes")).not.toBeInTheDocument(); 
});
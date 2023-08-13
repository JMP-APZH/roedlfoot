import { render } from "@redwoodjs/testing/web";

import MatchpartPage from "./MatchpartPage";

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe("MatchpartPage", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<MatchpartPage />);
    }).not.toThrow();
  });
});

import { useState } from "react";

export default function WebForm() {
  const [juiceSize, setJuiceSize] = useState("small");
  return (
    <>
      <h2>Web Form</h2>
      <form>
        <fieldset>
          <legend>Fruit juice size</legend>
          <p style={{ textAlign: "left" }}>
            Required fields are followed by <span aria-label="required">*</span>
          </p>
          <div style={{ display: "flex" }}>
            <label htmlFor="username">
              Name:{" "}
              <span aria-label="required" style={{ marginRight: "3px" }}>
                *
              </span>
            </label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <p>
              <input
                type="radio"
                name="size"
                id="size_1"
                value="small"
                onChange={(e) => setJuiceSize(e.target.value)}
                checked={juiceSize === "small"}
              />
              <label htmlFor="size_1">Small</label>
            </p>
            <p>
              <input
                type="radio"
                name="size"
                id="size_2"
                value="medium"
                onChange={(e) => setJuiceSize(e.target.value)}
                checked={juiceSize === "medium"}
              />
              <label htmlFor="size_2">Medium</label>
            </p>
            <p>
              <input
                type="radio"
                name="size"
                id="size_3"
                value="large"
                onChange={(e) => setJuiceSize(e.target.value)}
                checked={juiceSize === "large"}
              />
              <label htmlFor="size_3">Large</label>
            </p>
          </div>
        </fieldset>
      </form>
    </>
  );
}

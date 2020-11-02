import React, { ReactElement } from "react";
import { Spinner } from "react-bootstrap";

interface Props {}

function Loader({}: Props): ReactElement {
  return (
    <Spinner
      animation="border"
      role="status"
      variant="warning"
      style={{ width: 50, height: 50, margin: "auto", display: "block" }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}

export default Loader;

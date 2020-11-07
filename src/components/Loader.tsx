import React, { ReactElement } from "react";
import { Spinner } from "react-bootstrap";

interface Props {
  size?: number;
}

function Loader({ size = 50 }: Props): ReactElement {
  return (
    <Spinner
      animation="border"
      role="status"
      variant="warning"
      style={{ width: size, height: size, margin: "auto", display: "block" }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}

export default Loader;

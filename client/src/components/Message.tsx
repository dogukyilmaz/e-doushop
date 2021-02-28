import { removeListener } from "process";
import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

interface Message {
  variant: string;
  error: any;
}

const Message: React.FC<Message> = ({ error, variant = "info" }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const removeAlert = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(removeAlert);
  }, []);

  return (
    <Alert
      show={show}
      variant={variant}
      dismissible
      onClose={() => setShow(false)}
      className="fluid"
      style={{ position: "fixed", right: 50, top: 80, zIndex: 9999 }}
    >
      <Alert.Heading>{error.name || "Internal Server Error"}</Alert.Heading>
      <hr />
      <p className="mb-0">{error.message || "Please try again later."}</p>
    </Alert>
  );
};

export default Message;

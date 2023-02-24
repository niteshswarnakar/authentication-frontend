import Alert, { AlertColor } from "@mui/material/Alert";

import React from "react";

interface AlertProps {
  severity: AlertColor | undefined;
  message: string;
  resetHandler: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertComponent = ({ severity, message, resetHandler }: AlertProps) => {
  return (
    <>
      <Alert
        color={severity}
        variant="filled"
        onClose={() => {
          resetHandler(false);
        }}>
        {message}
      </Alert>
    </>
  );
};

export default AlertComponent;

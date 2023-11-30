import React, { useEffect } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function SendMessageStatus({ sent, setSent }) {
  useEffect(() => {
    setTimeout(() => setSent(undefined), 2000);
  });

  // If we haven't opened the MessageModal
  if (typeof sent == "undefined") return null;

  //   If the message was sent successfully
  if (sent)
    return (
      <div
        className="z-50"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
        <div
          className="flex bg-white text-green-500 text-sm space-x-2 p-2 m-2 sm:mx-auto"
          style={{
            marginTop: "50px",
            maxWidth: "400px",
          }}
        >
          <CheckCircleIcon color="success" />
          <div>Your message was sent. Thanks for contacting me.</div>
        </div>
      </div>
    );

  // If an error occured while sending the message
  return (
    <div
      className="z-50"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <div
        className="flex bg-white text-red-500 text-sm space-x-2 p-2 m-2 sm:mx-auto"
        style={{
          marginTop: "50px",
          maxWidth: "400px",
        }}
      >
        <ErrorIcon color="warning" />
        <div>
          An error occured while trying to contact me. Please try again later.
        </div>
      </div>
    </div>
  );
}

export default SendMessageStatus;

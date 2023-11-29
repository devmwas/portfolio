import { Button, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import emailJS from "@emailjs/browser";

function MessageModal({ isMessageOpen, setIsMessageOpen, setSent }) {
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [sendingMessageStatus, setSendingMessageStatus] =
    useState("Send Message");

  const subjects = [
    "Job",
    "Project",
    "Contract",
    "Partnership/Collaboration",
    "Interview",
    "Consultation",
    "Meeting",
    "Internship",
    "Other",
  ];

  useEffect(() => {
    console.log(messageData);
  }, [{ ...messageData }]);

  const handleChange = (e) => {
    setMessageData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  // This function will validate emails and return a Boolean result
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSendMessage = () => {
    // We do data validation before sending any message
    messageData.name === "" ? setNameError(true) : setNameError(false);
    !validateEmail(messageData.email)
      ? setEmailError(true)
      : setEmailError(false);
    messageData.subject === "" ? setSubjectError(true) : setSubjectError(false);
    messageData.message === "" ? setMessageError(true) : setMessageError(false);

    // If we have no errors, we send the message
    if (!(nameError && emailError && subjectError && messageError)) {
      // We update the Button Text
      setSendingMessageStatus("Sending...");
      emailJS
        .send(
          "service_rhaf2b9",
          "template_693sejm",
          messageData,
          "7eCZNeRns-eBVEZAe"
        )
        .then(
          (response) => {
            // We notify the user that the message has been sent
            response.status == 200 ? setSent(true) : setSent(false);
            // We update the Button Text
            setSendingMessageStatus("Send Message");
            // Then close the Message Modal
            setIsMessageOpen(false);
          },
          (err) => {
            // We notify the user that the message was not sent
            setSent(false);
            // We update the Button Text
            setSendingMessageStatus("Send Message");
            // Then close the Message Modal
            setIsMessageOpen(false);
          }
        );
    }
  };

  // If the user hasn't clicked the make contact button, we don't show the MessageModal
  if (!isMessageOpen) return null;

  return createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-orange-400 opacity-100">
      <div
        className="bg-white z-20 mt-20 opacity-100 space-y-4 p-4 mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <div className="flex justify-between">
          <div>Send Me a Message</div>
          <CloseIcon
            fontSize="medium"
            onClick={() => setIsMessageOpen(false)}
          />
        </div>
        <div>
          {nameError ? (
            <TextField
              label="Your Name"
              fullWidth
              size="small"
              name="name"
              error
              helperText="Please provide a valid name."
              value={messageData.name}
              onChange={handleChange}
            />
          ) : (
            <TextField
              label="Your Name"
              fullWidth
              size="small"
              name="name"
              value={messageData.name}
              onChange={handleChange}
            />
          )}
        </div>
        <div>
          {emailError ? (
            <TextField
              label="Your Email"
              fullWidth
              size="small"
              name="email"
              error
              helperText="Please provide a valid email."
              value={messageData.email}
              onChange={handleChange}
            />
          ) : (
            <TextField
              label="Your Email"
              fullWidth
              size="small"
              name="email"
              value={messageData.email}
              onChange={handleChange}
            />
          )}
        </div>
        <div>
          {subjectError ? (
            <TextField
              label="Your Subject"
              select
              size="small"
              fullWidth
              name="subject"
              error
              helperText="Please provide a valid subject."
              onChange={handleChange}
              value={messageData.subject}
            >
              {subjects.map((subject, index) => {
                return (
                  <MenuItem key={index} value={subject}>
                    {subject}
                  </MenuItem>
                );
              })}
            </TextField>
          ) : (
            <TextField
              label="Your Subject"
              select
              size="small"
              fullWidth
              name="subject"
              onChange={handleChange}
              value={messageData.subject}
            >
              {subjects.map((subject, index) => {
                return (
                  <MenuItem key={index} value={subject}>
                    {subject}
                  </MenuItem>
                );
              })}
            </TextField>
          )}
        </div>
        <div>
          {messageError ? (
            <TextField
              label="Your Message"
              multiline
              name="message"
              error
              helperText="Please provide a valid message."
              value={messageData.message}
              onChange={handleChange}
              rows={4}
              fullWidth
              size="small"
            />
          ) : (
            <TextField
              label="Your Message"
              multiline
              name="message"
              value={messageData.message}
              onChange={handleChange}
              rows={4}
              fullWidth
              size="small"
            />
          )}
        </div>
        <div className="text-center">
          <Button variant="contained" onClick={handleSendMessage}>
            {sendingMessageStatus}
          </Button>
        </div>
      </div>
    </div>,
    document.querySelector("#messagePortal")
  );
}

export default MessageModal;

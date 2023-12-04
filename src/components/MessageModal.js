import { Button, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import emailJS from "@emailjs/browser";

function MessageModal({ isMessageOpen, setIsMessageOpen, setSent }) {
  const [messageData, setMessageData] = useState({
    name: undefined,
    email: undefined,
    subject: undefined,
    message: undefined,
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

  // We dont want all textfields to start on error state as it's unaesthetic, so we use many useEffects
  // We validate the name after every change is made to it
  useEffect(() => {
    // We ensure that we're not setting error on the first render when our state will be undefined
    if (!(messageData.name === undefined)) {
      // We check for empty strings or whitespaces
      messageData.name.trim() === "" ? setNameError(true) : setNameError(false);
    }
  }, [messageData.name]);

  // We validate the email after every change is made to it
  useEffect(() => {
    // We ensure that we're not setting error on the first render when our state will be undefined
    if (!(messageData.email === undefined)) {
      // We trim the email before any validation starts
      !validateEmail(messageData.email.trim())
        ? setEmailError(true)
        : setEmailError(false);
    }
  }, [messageData.email]);

  // We validate the subject after every change is made to it
  useEffect(() => {
    // We ensure that we're not setting error on the first render when our state will be undefined
    if (!(messageData.subject === undefined)) {
      messageData.subject.trim() === ""
        ? setSubjectError(true)
        : setSubjectError(false);
    }
  }, [messageData.subject]);

  // We validate the message after every change is made to it
  useEffect(() => {
    // We ensure that we're not setting error on the first render when our state will be undefined
    if (!(messageData.message === undefined)) {
      messageData.message.trim() === ""
        ? setMessageError(true)
        : setMessageError(false);
    }
  }, [messageData.message]);

  // Updating the state after every change
  const handleChange = (e) => {
    console.log("Check Errors: ", checkErrors());
    console.log("Check Undefineds: ", checkUndefined());
    console.log("Check checkErrorsAndUndefined: ", checkErrorsOrUndefined());
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

  // This function will check if we have any errors and return a Boolean indicating the presence of errors
  const checkErrors = () => {
    if (!nameError) {
      if (!emailError) {
        if (!subjectError) {
          if (!messageError) {
            return false;
          } else return true;
        } else return true;
      } else return true;
    } else return true;
  };

  // This function will check if we have any undefined state variables and help in data validation
  const checkUndefined = () => {
    if (!(messageData.name === undefined)) {
      if (!(messageData.email === undefined)) {
        if (!(messageData.subject === undefined)) {
          if (!(messageData.message === undefined)) {
            return false;
          } else return true;
        } else return true;
      } else return true;
    } else return true;
  };

  // We check for both undefined and errors
  const checkErrorsOrUndefined = () => {
    // If we have errors or undefineds
    if (checkErrors() || checkUndefined()) return true;
    // If we have no errors or undefineds
    return false;
  };

  const handleSendMessage = () => {
    // If we have no errors, we send the message
    if (!checkErrors()) {
      // We first update the Button Text
      setSendingMessageStatus("Sending...");

      // We trimm all user inputs off any leading or trailing whitespaces
      const trimmedMessageData = {
        name: messageData.name.trim(),
        email: messageData.email.trim(),
        subject: messageData.subject.trim(),
        message: messageData.message.trim(),
      };

      // Would have trimmed this way, but then updating state is async and we might send untrimmed data to server
      // setMessageData((prevData) => {
      //   return {
      //     name: prevData.name.trim(),
      //     email: prevData.name.trim(),
      //     subject: prevData.name.trim(),
      //     message: prevData.name.trim(),
      //   }
      // });

      const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_API_KEY } =
        process.env;

      // Sending the message
      emailJS
        // WE NEED TO HIDE THIS DATA IN THE .ENV FILE FOR A LIL MORE SECURITY
        .send(
          REACT_APP_SERVICE_ID,
          REACT_APP_TEMPLATE_ID,
          trimmedMessageData,
          REACT_APP_API_KEY
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
    <div className="fixed top-0 left-0 right-0 bottom-0 opacity-100 z-40">
      <div
        className="bg-white mt-20 opacity-100 space-y-4 p-2 sm:p-4 m-2 sm:mx-auto"
        style={{
          maxWidth: "500px",
          borderRadius: "2%",
          backgroundImage:
            "linear-gradient(to bottom right, white, cyan, white)",
        }}
      >
        <div className="flex justify-between">
          <div className="text-blue-400 font-bold">Send Me a Message</div>
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
              label="Name"
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
              label="Email"
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
              label="Email"
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
              label="Subject"
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
              label="Subject"
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
              label="Message"
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
              label="Message"
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
        <div className="text-center ">
          {checkErrorsOrUndefined() ? (
            // We disable Sending button if we have any errors or any undefined variables
            <Button variant="contained" disabled onClick={handleSendMessage}>
              {sendingMessageStatus}
            </Button>
          ) : (
            //  We only enable he send button if we don't have undefineds or errors
            <Button variant="contained" onClick={handleSendMessage}>
              {sendingMessageStatus}
            </Button>
          )}
        </div>
      </div>
    </div>,
    document.querySelector("#messagePortal")
  );
}

export default MessageModal;

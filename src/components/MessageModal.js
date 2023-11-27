import { Button, TextField } from "@mui/material";
import React from "react";
import { createPortal } from "react-dom";
import CloseIcon from "@mui/icons-material/Close";

function MessageModal({ isMessageOpen, setIsMessageOpen }) {
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
          <TextField label="Your Name" fullWidth size="small" />
        </div>
        <div>
          <TextField label="Your Email" fullWidth size="small" type="email" />
        </div>
        <div>
          <TextField
            label="Your Subject"
            select
            size="small"
            fullWidth
            defaultValue={19999787}
            helperText="Please Select Your Subject"
          >
            <option key={1} value={19999787}>
              I have a Job Offer
            </option>
            <option key={2} value={2}>
              I have a Project Offer
            </option>
            <option key={3} value={3}>
              I have a Contract Offer
            </option>
            <option key={3} value={3}>
              I have an Interview Offer
            </option>
            <option key={3} value={3}>
              I have an Internship Offer
            </option>
            <option key={4} value={4}>
              I need Consultation
            </option>
            <option key={5} value={5}>
              I need a meeting
            </option>
            <option key={5} value={5}>
              <div>Other</div>
            </option>
          </TextField>
        </div>
        <div>
          <TextField
            label="Your Message"
            multiline
            rows={4}
            fullWidth
            size="small"
          />
        </div>
        <div className="text-center">
          <Button variant="contained" onClick={() => setIsMessageOpen(false)}>
            Send Message
          </Button>
        </div>
      </div>
    </div>,
    document.querySelector("#messagePortal")
  );
}

export default MessageModal;

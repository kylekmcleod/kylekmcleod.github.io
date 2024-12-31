"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

function ContactForm() {
  const [state, handleSubmit] = useForm("xovaqrvq");
  if (state.succeeded) {
    return <p>Your message has been sent.</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <Input
          type="text"
          name="firstName"
          id="firstName"
          variant="bordered"
          label="First Name"
          placeholder="Enter first name"
          fullWidth
        />
        <ValidationError
          prefix="First Name"
          field="firstName"
          errors={state.errors}
        />
        <Input
          type="text"
          name="lastName"
          id="lastName"
          variant="bordered"
          label="Last Name"
          placeholder="Enter last name"
          fullWidth
        />
        <ValidationError
          prefix="Last Name"
          field="lastName"
          errors={state.errors}
        />
      </div>
      <Input
        type="email"
        name="email"
        id="email"
        variant="bordered"
        label="Email"
        placeholder="Enter your email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <Textarea
        label="Message"
        name="message"
        id="message"
        variant="bordered"
        placeholder="Enter message"
        disableAnimation
        disableAutosize
        classNames={{
          input: "resize-y min-h-[80px]",
        }}
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button type="submit" color="primary" disabled={state.submitting}>
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;

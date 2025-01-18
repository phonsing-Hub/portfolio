"use client";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Input, Textarea } from "@heroui/input";
import { Form } from "@heroui/form";
import { SiMinutemailer } from "react-icons/si";
import { message } from "antd";
import emailjs from "emailjs-com";

import { title } from "../primitives";

export default function CtaSection() {
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading, setIsloading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsloading(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, USER_ID).then(
      () => {
        setIsloading(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
        messageApi.open({
          type: "success",
          content: "Send email success.",
        });
      },
      () => {
        setIsloading(false);
        messageApi.open({
          type: "error",
          content: "Error sending email",
        });
        //console.error("Error sending email:", error.text);
      },
    );
  };

  return (
    <section
      className="cta-section flex flex-wrap justify-between items-center my-4"
      id="cta-section"
    >
      <div className="md:w-1/2 w-full">
        <h2 className={title({ color: "yellow" })}>Reach Out Anytime</h2>
        <p
          className={
            "text-pretty md:w-80 text-md lg:text-lg text-default-600 my-4"
          }
        >
          Have a project in mind or looking to collaborate? Feel free to reach
          out I’d love to hear from you!
        </p>
      </div>
      {contextHolder}
      <Form
        className="md:w-1/2 w-full mb-4 flex flex-col gap-4"
        validationBehavior="native"
        onSubmit={sendEmail}
      >
        <Chip color="warning" radius="sm" size="sm" variant="dot">
          Send me
        </Chip>
        <div className="flex gap-4 w-full">
          <Input
            isRequired
            color="warning"
            errorMessage="Please enter a valid name"
            label="Name"
            name="name"
            placeholder="Enter your name"
            radius="sm"
            size="sm"
            type="text"
            value={formData.name}
            variant="bordered"
            onChange={handleChange}
          />
          <Input
            isRequired
            color="warning"
            errorMessage="Please enter a valid subject"
            label="Subject"
            name="subject"
            placeholder="Enter your email"
            radius="sm"
            size="sm"
            type="text"
            value={formData.subject}
            variant="bordered"
            onChange={handleChange}
          />
        </div>
        <Input
          isRequired
          color="warning"
          errorMessage="Please enter a valid email"
          label="Email"
          name="email"
          placeholder="Enter your email"
          radius="sm"
          size="sm"
          type="email"
          value={formData.email}
          variant="bordered"
          onChange={handleChange}
        />

        <Textarea
          disableAutosize
          isRequired
          classNames={{
            //base: "max-w-xs",
            input: "resize-y min-h-[128px]",
          }}
          color="warning"
          errorMessage="Please enter a valid description"
          label="Description"
          name="message"
          placeholder="Enter your description"
          radius="sm"
          value={formData.message}
          variant="bordered"
          onChange={handleChange}
        />
        <Button
          color="warning"
          endContent={<SiMinutemailer size={22} />}
          isLoading={isLoading}
          radius="sm"
          type="submit"
          variant="bordered"
        >
          Send Email
        </Button>
      </Form>
    </section>
  );
}

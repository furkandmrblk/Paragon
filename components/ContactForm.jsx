import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  ContactFormButton,
  ContactFormDiv,
  ContactFormInput,
  ContactFormInputDiv,
  ContactFormIntro,
  ContactFormScroll,
  ContactFormText,
  ContactFormTextArea,
  ErrorField,
  SuccessField,
} from './ContactFormS';

export const ContactForm = () => {
  const [status, setStatus] = useState({
    info: { error: false, msg: null },
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(50, 'Must be 50 characters or less')
        .required('Required field'),
      email: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .max(100, 'Must be 100 characters or less')
        .email('Invalid email adress')
        .required('Required field'),
      message: Yup.string()
        .min(3, 'Must be at least 3 characters')
        .max(400, 'Must be 400 characters or less')
        .required('Required field'),
    }),
    onSubmit: (values) => {
      axios
        .post(`formspreeUrl`, {
          name: values.name,
          email: values.email,
          message: values.message,
        })
        .then(() => {
          setStatus(true, 'Thank you, your message has been submitted.');
        })
        .catch((error) => {
          setStatus(false, error.response.data.error);
        });
    },
  });

  return (
    <ContactFormDiv>
      <ContactFormIntro>
        <ContactFormText>
          Let's Work <br />{' '}
          <span style={{ color: `#6a6a6b32` }}>
            Together on <br /> Something
          </span>
          .
        </ContactFormText>
        <svg
          width="14"
          height="23"
          viewBox="0 0 14 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.61914 1.08477L12.2539 11.0391L1.61914 20.9934"
            stroke="#8f8f8f"
            strokeWidth="2.13307"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ContactFormIntro>
      <ContactFormInputDiv id="contactform" onSubmit={formik.handleSubmit}>
        <ContactFormText style={{ color: '#151515', marginBottom: '10rem' }}>
          Get in Touch
        </ContactFormText>
        <ContactFormInput
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorField>{formik.errors.name}</ErrorField>
        ) : null}
        <ContactFormInput
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <ErrorField>{formik.errors.email}</ErrorField>
        ) : null}
        <ContactFormTextArea
          id="message"
          name="message"
          type="text"
          placeholder="Message"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <ErrorField>{formik.errors.message}</ErrorField>
        ) : null}
        <ContactFormButton type="submit">Send</ContactFormButton>
        {status.info.error ? <ErrorField>{status.info.msg}</ErrorField> : null}
        {!status.info.error && status.info.msg && (
          <SuccessField>{status.info.msg}</SuccessField>
        )}
      </ContactFormInputDiv>
    </ContactFormDiv>
  );
};

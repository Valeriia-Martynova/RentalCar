import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../../redux/contacts/operations";

import * as Yup from "yup";
import c from "./ContactForm.module.css";
import { FaPen } from "react-icons/fa";
import { useCallback } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min length 3 characters!")
    .max(50, "Max length 50 characters!")
    .required("Enter name"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Format xxx-xx-xx")
    .required("Enter number"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (values, { resetForm }) => {
      dispatch(addContact(values));
      resetForm();
    },
    [dispatch]
  );

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={c.form}>
        <div className={c.inputContainer}>
          <label htmlFor="name">Name</label>
          <div className={c.inputWrapper}>
            <Field type="text" id="name" name="name" placeholder="Name" />
            <FaPen className={c.icon} />
          </div>
          <ErrorMessage className={c.error} name="name" component="span" />
        </div>
        <div className={c.inputContainer}>
          <label htmlFor="number">Number</label>
          <div className={c.inputWrapper}>
            <Field type="text" id="number" name="number" placeholder="Number" />
            <FaPen className={c.icon} />
          </div>
          <ErrorMessage className={c.error} name="number" component="span" />
        </div>

        <button type="submit" className={c.btnForm}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;

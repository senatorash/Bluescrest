import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
  phone: string;
  subject: string;
}

// Defines the type for form errors
type FormErrors = Partial<Record<keyof FormValues, string[]>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
  phone: "",
  subject: "",
};

// Custom hook for form validation
const useFormValidator = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const validators = {
    name: (value: string) => {
      return value.trim() ? [] : ["Name is required."];
    },
    email: (value: string) => {
      return /\S+@\S+\.\S+/.test(value) ? [] : ["Email is invalid."];
    },
    message: (value: string) => {
      return value.trim() ? [] : ["Message is required"];
    },
    phone: (value: string) => {
      return /^\+?[1-9]\d{1,14}$/.test(value)
        ? []
        : ["Phone number is invalid."];
    },
    subject: (value: string) => {
      return value.trim() ? [] : ["Subject is required."];
    },
  };

  //   update form values on change
  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validate = (fields?: (keyof FormValues)[]) => {
    const validatedErrors: FormErrors = {};
    const fieldsTovalidate = fields ?? Object.keys(values);

    // loop through and validate each field
    fieldsTovalidate.forEach((field) => {
      const fieldErrors = validators[field as keyof FormValues](
        values[field as keyof FormValues]
      );

      if (fieldErrors.length) {
        validatedErrors[field as keyof FormValues] = fieldErrors;
      }
    });

    setErrors(validatedErrors);
    return Object.keys(validatedErrors).length === 0;
  };

  //   reset form to initial state and clear all errors
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    validate,
    resetForm,
  };
};

export default useFormValidator;

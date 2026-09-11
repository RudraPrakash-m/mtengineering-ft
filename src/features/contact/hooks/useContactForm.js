import { useState } from 'react';
import { toast } from 'react-toastify';
import { validateContactForm } from '../validations/contactValidation';
import { submitProjectInquiry } from '../services/contactService';

const initialValues = {
  name: '',
  email: '',
  company: '',
  projectType: 'scale-model',
  scale: '1:100',
  budget: '2.5-10',
  deadline: '',
  message: '',
};

export function useContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSelectField = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { errors: validationErrors, isValid } = validateContactForm(values);

    if (!isValid) {
      setErrors(validationErrors);
      const firstErrorMessage = Object.values(validationErrors)[0];
      toast.error(firstErrorMessage || 'Please complete all required fields.', {
        position: 'bottom-right',
      });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await submitProjectInquiry(values);
      setReferenceId(response.referenceId);
      setIsSubmitted(true);
      setValues(initialValues);

      toast.success(
        `Inquiry Logged (${response.referenceId}). A senior model maker will reply within 24 hours.`,
        {
          position: 'bottom-right',
          autoClose: 6000,
        }
      );
    } catch (err) {
      toast.error(err.message || 'Submission failed. Please email us directly at inquiry@mtengineering.in', {
        position: 'bottom-right',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setReferenceId('');
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    referenceId,
    handleChange,
    handleSelectField,
    handleSubmit,
    resetForm,
  };
}

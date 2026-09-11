export function validateContactForm(values) {
  const errors = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Please provide your full name.';
  }

  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please provide a valid professional email address.';
  }

  if (!values.company || values.company.trim().length < 2) {
    errors.company = 'Please specify your architecture firm or organization.';
  }

  if (!values.projectType) {
    errors.projectType = 'Please select a project category.';
  }

  if (!values.message || values.message.trim().length < 15) {
    errors.message = 'Please include details regarding scale, deadlines, or requirements (min 15 chars).';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}

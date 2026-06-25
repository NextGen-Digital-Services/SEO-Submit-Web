// REUSABLE FORM HANDLER — Opens default email client via mailto link
export const handleFormSubmit = (formData, formType) => {
  return new Promise((resolve) => {
    const to = 'info@seosubmitweb.com';
    const subject = 'New Website Lead';

    // Build a clean, readable body from all submitted fields
    const lines = [];
    lines.push(`Form: ${formType}`);
    lines.push('');

    const name = formData.name
      || ((formData.firstName || formData.lastName)
        ? `${formData.firstName || ''} ${formData.lastName || ''}`.trim()
        : '');

    if (name) lines.push(`Name: ${name}`);
    if (formData.email) lines.push(`Email: ${formData.email}`);
    if (formData.phone) lines.push(`Phone: ${formData.phone}`);
    if (formData.company) lines.push(`Company: ${formData.company}`);
    if (formData.service) lines.push(`Service: ${formData.service}`);
    if (formData.leadType) lines.push(`Lead Type: ${formData.leadType}`);
    if (formData.budget) lines.push(`Budget: ${formData.budget}`);
    if (formData.rating) lines.push(`Rating: ${formData.rating} / 5`);
    if (formData.review) lines.push(`Review: ${formData.review}`);
    if (formData.message) lines.push(`Message: ${formData.message}`);

    lines.push('');
    lines.push('---');
    lines.push('Sent from SEOSubmitWeb.com');

    const body = lines.join('\n');

    const mailtoUrl =
      `mailto:${to}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;

    // Resolve after a short delay so the form UI can show success state
    setTimeout(() => {
      resolve({ status: 200, text: 'MAILTO_OPENED' });
    }, 500);
  });
};

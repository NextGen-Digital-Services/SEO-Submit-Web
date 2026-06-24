// REUSABLE FORM HANDLER FUNCTION
export const handleFormSubmit = (formData, formType) => {
  // BUILD WHATSAPP MESSAGE
  const waMessage = `
NEW LEAD FROM SEO SUBMIT WEB WEBSITE

Form Type: ${formType}
Name: ${formData.name || (formData.firstName || formData.lastName ? (formData.firstName || '') + ' ' + (formData.lastName || '') : '') || 'Not provided'}
Email: ${formData.email || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Service Interested In: ${formData.service || 'Not provided'}
Budget: ${formData.budget || 'Not provided'}
Message: ${formData.message || 'Not provided'}

Time: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}
Source: Website Contact Form
  `.trim();

  // OPEN WHATSAPP
  const encodedMessage = encodeURIComponent(waMessage);
  const whatsappURL = `https://wa.me/17165755447?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');

  // SEND EMAIL VIA EMAILJS
  if (window.emailjs) {
    window.emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        form_type: formType,
        from_name: formData.name || (formData.firstName || formData.lastName ? (formData.firstName || '') + ' ' + (formData.lastName || '') : '') || 'Not provided',
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        service: formData.service || 'Not provided',
        budget: formData.budget || 'Not provided',
        message: formData.message || 'Not provided',
        to_email: 'Seosubmitweb@gmail.com',
        reply_to: formData.email,
      }
    ).then(() => {
      console.log('Email sent successfully');
    }).catch((error) => {
      console.log('Email error:', error);
    });
  }
};

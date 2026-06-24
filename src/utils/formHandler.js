// REUSABLE FORM HANDLER FUNCTION
export const handleFormSubmit = (formData, formType) => {
  const serviceId = 'YOUR_SERVICE_ID';
  const templateId = 'YOUR_TEMPLATE_ID';

  return new Promise((resolve, reject) => {
    // If the template/service IDs are placeholders, simulate successful delivery in dev mode
    if (serviceId.includes('YOUR_') || templateId.includes('YOUR_')) {
      console.warn(`[Dev Mode] Simulating email delivery for: "${formType}"`);
      console.log('Recipient (To): info@seosubmitweb.com');
      console.log('Backup (Bcc): seosubmitweb@gmail.com');
      console.log('Data:', formData);
      
      setTimeout(() => {
        resolve({ status: 200, text: 'MOCK_SUCCESS' });
      }, 800);
      return;
    }

    if (!window.emailjs) {
      reject(new Error('Email service is not loaded yet. Please try again.'));
      return;
    }

    window.emailjs.send(
      serviceId,
      templateId,
      {
        form_type: formType,
        from_name: formData.name || (formData.firstName || formData.lastName ? (formData.firstName || '') + ' ' + (formData.lastName || '') : '') || 'Not provided',
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        service: formData.service || 'Not provided',
        budget: formData.budget || 'Not provided',
        message: formData.message || 'Not provided',
        to_email: 'info@seosubmitweb.com',
        bcc_email: 'seosubmitweb@gmail.com',
        reply_to: formData.email,
      }
    ).then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
      resolve(response);
    }).catch((error) => {
      console.error('Email send error:', error);
      reject(error);
    });
  });
};

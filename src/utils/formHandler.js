// REUSABLE MASTER FORM HANDLER — Sends email directly using FREE Web3Forms API
export const handleFormSubmit = (formData, formType) => {
  return new Promise((resolve, reject) => {
    
    console.log(`[${formType}] Submitting via Web3Forms:`, formData); 

    // 1. Apna Web3Forms ka data object ready karte hain
    let web3Data = {
      // ⚠️ APNI ACCESS KEY YAHAN PAR PASTE KARO
      access_key: "9f7a489f-8ca5-42ee-8749-a795d2697dda", 
      
      // Email ka subject line kya dikhega inbox me
      subject: `New Lead: ${formType}`,
      from_name: "SEO Submit Web Leads",
    };

    // 2. Har form ke data ko ek dum clean standard keys me convert karte hain taaki email me saaf dikhe
    switch (formType) {
      
      case 'Hero Section - Quick Request':
      case 'Hero - Verified Lead Request':
        web3Data.Name = formData.name || formData.fullName || 'N/A';
        web3Data.Email = formData.email || 'N/A';
        web3Data.Phone = formData.phone || 'N/A';
        web3Data.Company = formData.company || formData.agencyName || 'N/A';
        web3Data["Service Needed"] = formData.service || 'N/A';
        break;

      case 'SEO Leads Page - Enquiry':
        web3Data.Name = formData.name || formData.fullName || 'N/A';
        web3Data.Email = formData.email || formData.businessEmail || 'N/A';
        web3Data.Phone = formData.phone || 'N/A';
        web3Data["SEO Agency Name"] = formData.seoAgencyName || formData.company || 'N/A';
        web3Data["Monthly Lead Budget"] = formData.budget || formData.monthlyBudget || 'N/A';
        web3Data.Requirements = formData.requirements || formData.message || 'N/A';
        break;

      case 'Web Design Leads Page - Enquiry':
        web3Data.Name = formData.name || formData.fullName || 'N/A';
        web3Data.Email = formData.email || formData.businessEmail || 'N/A';
        web3Data.Phone = formData.phone || 'N/A';
        web3Data["Web Agency Name"] = formData.webAgencyName || formData.company || 'N/A';
        web3Data["Monthly Lead Budget"] = formData.budget || formData.monthlyBudget || 'N/A';
        web3Data.Requirements = formData.requirements || formData.message || 'N/A';
        break;

      case 'Appointment Leads Page - Enquiry':
        web3Data.Name = formData.name || formData.fullName || 'N/A';
        web3Data.Email = formData.email || formData.businessEmail || 'N/A';
        web3Data.Phone = formData.phone || 'N/A';
        web3Data["Agency Name"] = formData.agencyName || formData.company || 'N/A';
        web3Data["Appointment Budget"] = formData.appointmentBudget || formData.budget || 'N/A';
        web3Data["Target Client Description"] = formData.targetClient || formData.message || 'N/A';
        break;

      case 'Review - Submission':
        web3Data.Name = formData.name || formData.fullName || 'N/A';
        web3Data["Company Name"] = formData.company || formData.agencyName || 'N/A';
        web3Data["Service Used"] = formData.serviceUsed || 'N/A';
        web3Data["Rating Given"] = formData.rating || 'N/A';
        web3Data.Review = formData.review || formData.message || 'N/A';
        break;

      case 'Contact Page - Message':
        if (formData.firstName || formData.lastName) {
          web3Data.Name = `${formData.firstName || ''} ${formData.lastName || ''}`.trim();
        } else {
          web3Data.Name = formData.name || 'N/A';
        }
        web3Data.Email = formData.email || 'N/A';
        web3Data.Phone = formData.phone || 'N/A';
        web3Data.Company = formData.company || formData.agencyName || 'N/A';
        web3Data["Service Interested In"] = formData.serviceInterested || formData.service || 'N/A';
        web3Data["Monthly Budget"] = formData.monthlyBudget || formData.budget || 'N/A';
        web3Data.Message = formData.message || 'N/A';
        break;

      default:
        // Generic fallback
        web3Data.Name = formData.name || 'N/A';
        web3Data.Email = formData.email || 'N/A';
        web3Data.Phone = formData.phone || 'N/A';
        web3Data.Message = formData.message || 'N/A';
        break;
    }

    // 3. Web3Forms API par direct POST request bhejte hain
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(web3Data),
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status === 200) {
          console.log(`[${formType}] SUCCESS via Web3Forms!`, json);
          resolve({ status: 200, text: 'EMAIL_SENT_DIRECTLY' });
        } else {
          console.error(`[${formType}] Web3Forms Error:`, json);
          reject(json);
        }
      })
      .catch((err) => {
        console.error(`[${formType}] Connection Failed:`, err);
        reject(err);
      });
  });
};
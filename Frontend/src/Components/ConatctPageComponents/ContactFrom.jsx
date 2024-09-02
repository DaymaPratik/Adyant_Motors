import  { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    email: '',
    message: '',
    enquiryType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // You can add further logic to handle form submission here
  };

  return (
    <div className="w-full mx-auto p-4 text-white bg-[#252558d3] shadow-[0px_0px_10px_3px_#7878ac] rounded-md z-10 ">
    <h1 className="text-[25px] min-[500px]:text-[30px] font-bold mb-2">Contact Us</h1>
     <p className='my-4 text-[14px] min-[500px]:text-[17px]'>Having a complete range of products allows us to ensure our customers receive the best quality prices and service. We take great pride in everything that we do!</p>
    <form onSubmit={handleSubmit}>
      <div className="min-[500px]:flex l gap-4 mb-4">
        <div className="w-[100%] my-2">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-1 min-[500px]:p-2 border border-gray-300 rounded-md bg-[#2c29296b] focus:outline-[#36315f] focus:border-0 focus:outline-none"
            required
          />
        </div>
        <div className="w-[100%] my-2">
          <label className="block text-sm font-medium mb-2" htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-1 min-[500px]:p-2 border border-gray-300 rounded-md bg-[#2c29296b] focus:outline-[#36315f] focus:border-0 focus:outline-none"
          />
        </div>
      </div>

      <div className="min-[500px]:flex max-[500px]:flex-col gap-4 mb-4">
        <div className="w-[100%] my-2">
          <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-1 min-[500px]:p-2 border border-gray-300 rounded-md bg-[#2c29296b] focus:outline-[#36315f] focus:border-0 focus:outline-none"
          />
        </div>
        <div className="w-[100%] my-2">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-1 min-[500px]:p-2 border border-gray-300 rounded-md bg-[#2c29296b] focus:outline-[#36315f] focus:border-0 focus:outline-none"
            required
          />
        </div>
      </div>
        
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="enquiryType">Enquiry Type</label>
        <select
          id="enquiryType"
          name="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          className="w-full p-1 min-[500px]:p-2 border border-gray-300 rounded-md bg-[#2c29296b] focus:border-0 focus:outline-none"
        >
          <option value="" disabled>Enquiry Type</option>
          <option value="purchase" >Purchase</option>
          <option value="feedback">Feedback</option>
          <option value="careers">Careers</option>
          <option value="export">Export</option>
          <option value="others">Others</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full p-1 min-[500px]:p-2 border border-gray-300 rounded-md bg-[#2c29296b] focus:outline-[#36315f] focus:border-0 focus:outline-none"
        />
      </div>

      

      <button
        type="submit"
        className="w-fit mx-auto block px-5 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  </div>
  );
};

export default ContactForm;

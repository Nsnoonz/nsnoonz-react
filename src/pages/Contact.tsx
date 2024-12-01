import React, { useState } from 'react';
import CanvasCosmix from '../components/items/CanvasCosmix'; 
import axios from 'axios';
import Swal from 'sweetalert2'; 
type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    validate(e.target.name, e.target.value, 'change');
  };

  const validate = (fieldName?: string, fieldValue?: string, from?: string): boolean => {
    let newErrors = { ...errors }
    let isValid = true;
		const regexMail = /^[\w.-]+@[a-zA-Z\d-]+\.[a-zA-Z]{2,}$/
    const validateField = (name: string, value: string) => {
      let errorMessage  = ''
      if (name === 'name' && !value) {
        errorMessage = 'Please enter you name';
      }

      if (name === 'email' && !value && !from) {
        errorMessage = 'Please enter Email';
      } else if (name === 'email' && value && !regexMail.test(value)) {
        errorMessage = 'Must be a valid email address.';
      }
      
      if (name === 'message' && value.length < 15 ) {
        errorMessage = 'Please enter a message containing at least 15 characters.';
      }
      return errorMessage
    }

    if (fieldName && fieldValue !== undefined) {
      const errorMessage = validateField(fieldName, fieldValue);
      newErrors = { ...newErrors, [fieldName]: errorMessage };
      setErrors(newErrors);
      return errorMessage === '';
    } else {
      Object.keys(formData).forEach((key) => {
        const value = formData[key as keyof typeof formData];
        const errorMessage = validateField(key, value);
        newErrors[key as keyof typeof formData] = errorMessage;
        if (errorMessage) isValid = false;
      });
      setErrors(newErrors);
      return isValid;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      try {
        const authData = { "username": "devNsnoonz", "password": "passNsnoonz" }
        const responseAuth = await axios.post('https://api-nsnoonz.vercel.app/api/authenticate/v1.0/fnGenerateAccessToken', authData);
        if (responseAuth.status === 200) {
          const objSendmail = { mailname: formData.name, mailsender: formData.email, mailmessage: formData.message }
          const response = await axios.post('https://api-nsnoonz.vercel.app/api/profile/v1.0/fnSendmail', objSendmail, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Nsnoonz ${responseAuth.data.result.data}`
            }
          });
          if (response.status === 200) {
            Swal.fire({ title: 'Success!',text: `Senmail successfully`, icon: 'success', confirmButtonText: 'OK' });
          } else {
            Swal.fire({ title: 'Error', text: response.data.message, icon: 'error', confirmButtonText: 'OK' });
          }
        } else {
          Swal.fire({ title: 'Error', text: responseAuth.data.message, icon: 'error', confirmButtonText: 'OK' });
        }
      } catch (error: any) {
        Swal.fire({ title: 'Error', text: error.message, icon: 'error', confirmButtonText: 'OK' });
      }
    }
  };

  return (
  <div className="relative min-h-screen flex items-center justify-center bg-black">
  <CanvasCosmix width={window.innerWidth} height={window.innerHeight} />
  <div className="relative z-10 p-6 container  text-sky-950">
    <form onSubmit={handleSubmit} className="mx-auto max-w-6xl p-6  bg-white bg-opacity-100 shadow-md rounded-md">
      <div className="flex flex-wrap">
      <div className="w-full sm:w-full md:w-1/3 lg:w-1/3 p-4">
        <p className="font-semibold mb-4 text-5xl">Contact Me</p>
        <p>Have a question or want to work together? </p>
        <p>Please feel free to get in touch, </p>
        <p>and I'll get back to you as soon as possible.</p>
      </div>
      <div className="w-full sm:w-full md:w-2/3 lg:w-2/3 p-4">
        <div className="mb-4">
          <label htmlFor="name" className="block ">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block ">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block ">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button type="submit" className="w-full bg-[#172842] text-white py-2 rounded-md hover:bg-[#3d4f6b]">Send</button>
      </div>
    </div>
    </form>
  </div>
</div>
  );
};

export default ContactForm;
import React, { useState } from 'react'
import { toast } from 'sonner';

const Form = () => {
   const [loading, setLoading] = useState(false)
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   });
   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };
   const handleSubmit = async (e) => {
      setLoading(true)
      e.preventDefault();

      try {
         const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });

         const result = await response.json();
         if (result.error) {
            toast.error(result.error)
            setLoading(false)
         } else {
            toast.success(result.message)
            setLoading(false)
         }
      } catch (error) {
         setLoading(false)
         console.error('Error submitting form:', error);
         toast.error('Ocorreu um error por-favor tente de novo');
      }
   };
   return (
      <form
         onSubmit={handleSubmit}
         // action="https://formsubmit.co/info@ahoura.ao"
         // method="post"
         autoComplete="off"
      >
         <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-2 gap-4">
               <label className="block">
                  <span className="text-gray-700">Full name</span>
                  <input
                     type="text"
                     className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                     required
                  />
               </label>
               <label className="block">
                  <span className="text-gray-700">Email address</span>
                  <input
                     type="email"
                     className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     required
                  />
               </label>
            </div>
            <label className="block">
               <span className="text-gray-700">Message</span>
               <textarea
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                  rows="2"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
               />
            </label>
            <div className="block">
               <div className="mt-2">
                  <div className="flex justify-between">
                     <label className="inline-flex items-center">
                        <input
                           type="checkbox"
                           className="border-gray-300 border-2 text-black focus:border-gray-300 focus:ring-black"
                           required
                        />
                        <span className="ml-2">
                           Email me news and special offers
                        </span>
                     </label>
                     <button
                        disabled={loading}
                        type="submit"
                        className={`inline-flex items-center px-4 py-2 mt-2 font-medium text-white transition duration-500 ease-in-out transform rounded-lg text-md md:mt-0 md:ml-4 ${loading ? 'bg-gray-700' : 'bg-gray-900'}`}
                     >
                        <span className="justify-center">{loading ? 'Enviando' : 'Enviar'}</span>

                        <svg
                           className="w-3 h-3 fill-current text-gray-400 flex ml-2 -mr-1"
                           viewBox="0 0 12 12"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <title>Ahoura - Consultoria</title>
                           <path
                              d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                              fillRule="nonzero"
                           />
                        </svg>
                     </button>
                     <input
                        type="hidden"
                        name="_blacklist"
                        value="spammy pattern, banned term, phrase"
                     />
                     <input
                        type="hidden"
                        name="_captcha"
                        value="false"
                     />
                     <input
                        type="hidden"
                        name="_template"
                        value="table"
                     />
                  </div>
               </div>
            </div>
         </div>
      </form>
   )
}

export default Form

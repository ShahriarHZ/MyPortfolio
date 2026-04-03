import React, { useState } from 'react';

/**
 * Contact Component
 * Uses FormSubmit.co AJAX API for email handling.
 * Includes honeypot protection and status feedback.
 */
function Contact() {
    const [status, setStatus] = useState('idle'); // idle, sending, sent, error
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        
        // FormSubmit.co specific configurations
        formData.append('_subject', `Portfolio Contact: ${formData.get('subject') || 'New message'}`);
        formData.append('_template', 'table');
        formData.append('_captcha', 'false');

        setStatus('sending');
        setErrorMessage('');

        try {
            const response = await fetch('https://formsubmit.co/ajax/shahriarhossainbsl@gmail.com', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Request failed');
            }

            const result = await response.json();
            const isSuccess = result?.success === true || result?.success === 'true';
            
            if (!isSuccess) {
                throw new Error('Submission failed');
            }

            // Success Actions
            form.reset();
            setStatus('sent');
            // Revert to idle after 5 seconds to allow for new messages
            setTimeout(() => setStatus('idle'), 5000);
            
        } catch (error) {
            setStatus('error');
            setErrorMessage('Message failed to send. Please try again in a moment.');
        }
    };

    return (
        <section id="contact" className="py-16 bg-transparent">
            <div className="contact-shell mx-auto max-w-screen-xl px-6 md:px-10">
                
                {/* Section Header */}
                <div className="section-heading text-center mb-10">
                    <p className="text-indigo-500 font-semibold uppercase tracking-wide">Get In Touch</p>
                    <h1 className="text-4xl font-bold mt-2 mb-4">Contact Me</h1>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Reach out with questions, opportunities, or anything you would like to discuss.
                    </p>
                </div>

                {/* Form Container */}
                <form 
                    id="emailForm" 
                    className="contact-form-card flex flex-col mx-auto max-w-2xl gap-y-4" 
                    onSubmit={sendEmail}
                >
                    {/* Status Messages */}
                    {status === 'sent' && (
                        <div className="p-4 bg-green-100 border border-green-400 rounded">
                            <h2 className="text-center text-lg font-bold text-green-700">Message Sent!</h2>
                            <p className="text-center text-green-600 text-sm">I'll get back to you as soon as possible.</p>
                        </div>
                    )}
                    
                    {status === 'error' && (
                        <div className="p-4 bg-red-100 border border-red-400 rounded">
                            <p className="text-center text-sm font-semibold text-red-700">{errorMessage}</p>
                        </div>
                    )}

                    {/* Input Fields */}
                    <input 
                        name="name" 
                        type="text" 
                        placeholder="Full Name" 
                        aria-label="Full Name"
                        className="contact-input px-4 py-3 bg-gray-100 rounded-lg shadow-sm w-full focus:ring-2 focus:ring-indigo-500 outline-none transition" 
                        required 
                    />

                    <input 
                        name="email" 
                        type="email" 
                        placeholder="Email Address" 
                        aria-label="Email Address"
                        className="contact-input px-4 py-3 bg-gray-100 rounded-lg shadow-sm w-full focus:ring-2 focus:ring-indigo-500 outline-none transition" 
                        required 
                    />

                    <input 
                        name="subject" 
                        type="text" 
                        placeholder="Subject" 
                        aria-label="Subject"
                        className="contact-input px-4 py-3 bg-gray-100 rounded-lg shadow-sm w-full focus:ring-2 focus:ring-indigo-500 outline-none transition" 
                        required 
                    />

                    <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        aria-label="Message"
                        rows="6" 
                        className="contact-input px-4 py-3 bg-gray-100 rounded-lg shadow-sm w-full focus:ring-2 focus:ring-indigo-500 outline-none transition resize-none" 
                        required 
                    />

                    {/* Anti-Spam Honeypot (Hidden) */}
                    <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className={`mt-2 w-full md:w-max md:px-10 py-3 rounded-lg font-bold text-white transition-all duration-200 
                            ${status === 'sending' 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-md'
                            }`}
                    >
                        {status === 'sending' ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </span>
                        ) : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
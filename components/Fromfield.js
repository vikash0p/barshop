"use client"
import React, { useState } from 'react';

const Fromfield = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, e.g., send data to a server
        // console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 p-6 border border-gray text-black shadow-lg">
            <div className="mb-4">
                <label htmlFor="name" className="text-white after:content-['*'] after:ml-0.5 after:text-red-500  block text-gray-600 font-medium">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-2 border  focus:outline-none focus:border-yellow"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className=" text-white after:content-['*'] after:ml-0.5 after:text-red-500  block text-gray-600 font-medium">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-2 border  focus:outline-none focus:border-yellow"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="subject" className=" text-white after:content-['*'] after:ml-0.5 after:text-red-500  block text-gray-600 font-medium">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-2 border  focus:outline-none focus:border-yellow"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="text-white after:content-['*'] after:ml-0.5 after:text-red-500  block text-gray-600 font-medium">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-2 border  focus:outline-none focus:border-yellow"
                    rows="5"
                ></textarea>
            </div>
            <div className="mt-6 mx-auto">
                <button type="submit" className="px-8 mx-auto py-2 bg-yellow text-white ll hover:bg-yellow focus:outline-none">
                    Send
                </button>
            </div>
        </form>
    );
};

export default Fromfield;

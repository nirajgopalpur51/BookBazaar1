import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage = () => {
    return (
        
        <div>
            <Navbar/>
            <br /><br /><br />
            <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-4xl mb-8">
                <h1 className="text-3xl font-bold mb-4">About Our Bookstore</h1>
                <p className="text-gray-700 mb-6">
                    Welcome to Our Bookstore, where we are dedicated to helping you learn something new every day! Our mission is to provide you with a curated selection of career-focused books and personalized recommendations to help you learn the newest skills and technologies, all in one place. Whether you're looking to advance your career, change fields, or simply expand your knowledge, we have the resources you need to succeed. Start building your dream career today with Our Bookstore.
                </p>

                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                    <li>Curated Book Selection: High-quality and valuable content selected for various career paths.</li>
                    <li>Personalized Recommendations: Get book suggestions based on your interests and career goals.</li>
                    <li>Free Resources: Access a wealth of knowledge at no cost to support your learning and career growth.</li>
                    <li>Email Subscription: Receive updates on new books, special offers, and career tips.</li>
                    <li>User-Friendly Interface: Easily navigate and find the books you need.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4">How to Use</h2>
                <ol className="list-decimal list-inside text-gray-700 mb-6">
                    <li>Browse Books: Explore various categories and genres or use the search functionality.</li>
                    <li>Get Recommendations: Fill out your profile to receive personalized book suggestions.</li>
                    <li>Access Free Books: Visit our free books section to explore and download resources at no cost.</li>
                    <li>Subscribe to Email: Enter your email to receive updates about new arrivals and exclusive offers.</li>
                    <li>Purchase Books: Add books to your cart and proceed to checkout for a seamless experience.</li>
                </ol>

                <h2 className="text-2xl font-bold mb-4">Support and Feedback</h2>
                <p className="text-gray-700 mb-6">
                    We value your feedback and are here to help with any issues you may encounter. If you have any questions, suggestions, or need assistance, please do not hesitate to contact our support team. We are committed to providing you with the best possible experience and continuously improving our services.
                </p>

                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-6">
                    If you have any inquiries or need support, please reach out to us through the contact form on our website or via email at <a href="mailto:support@ourbookstore.com" className="text-blue-500 hover:underline">support@ourbookstore.com</a>. Our team is here to assist you and ensure your experience with Our Bookstore is exceptional.
                </p>

                <p className="text-gray-700">Thank you for choosing Our Bookstore. We are excited to be a part of your learning journey and help you achieve your career goals.</p>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default AboutPage;

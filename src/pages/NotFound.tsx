import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import rexee from "../../src/assets/svg/rexee-face.svg";
import Header from '../components/Header';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const NotFound = () => {
    return (
        <div className="w-screen  text-text-dark flex flex-col gap-0 justify-center items-center">
            <Header type="dark" />

            <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
                {/* Illustration */}
                <motion.img
                    src={rexee}
                    alt="Page not found"
                    className="xs:w-[50px] h-auto sm:w-[70px] lg:w-[120px] max-w-lg mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                />

                {/* 404 Message */}
                <motion.h1
                    className="text-8xl font-extrabold text-gray-900 mb-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                >
                    404
                </motion.h1>

                {/* Friendly Message */}
                <motion.p
                    className="text-lg text-text-med mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                >
                    Sorry, looks like the page you're looking for does not exist.
                </motion.p>

                {/* Go Back Home Button */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                    className='mt-6'
                >
                    <Link to="/" className="px-6 py-3 bg-primary text-white text-lg rounded-full hover:bg-primary-dark transition">
                        Go Back Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;

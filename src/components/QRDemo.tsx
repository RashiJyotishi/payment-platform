'use client';

import { useState, useRef } from 'react';
import QRCode from 'react-qr-code';
import { motion } from 'framer-motion';
import { FiDownload, FiRefreshCw } from 'react-icons/fi';

export default function QRDemo() {
    const [qrValue, setQrValue] = useState('https://your-payment-link.com');
    const [isGenerating, setIsGenerating] = useState(false);
    const qrRef = useRef<HTMLDivElement>(null);

    const generateNewCode = () => {
        setIsGenerating(true);
        setQrValue(`https://your-payment-link.com/${Math.random().toString(36).substring(7)}`);
        setTimeout(() => setIsGenerating(false), 1000);
    };

    const downloadQRCode = () => {
        if (qrRef.current) {
            const svg = qrRef.current.querySelector('svg');
            if (svg) {
                const svgData = new XMLSerializer().serializeToString(svg);
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const img = new Image();

                img.onload = () => {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx?.drawImage(img, 0, 0);
                    const pngFile = canvas.toDataURL('image/png');
                    const downloadLink = document.createElement('a');
                    downloadLink.download = 'qr-code.png';
                    downloadLink.href = pngFile;
                    downloadLink.click();
                };

                img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
            }
        }
    };

    return (
        <section className="px-6 py-20 lg:px-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="mb-8 text-3xl font-bold md:text-4xl">
                        Try Our QR Payment Demo
                    </h2>
                    <p className="max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300">
                        Scan the QR code below with your mobile device to experience seamless payments.
                    </p>
                </motion.div>
                <div className="flex flex-col items-center justify-center gap-8">
                    <motion.div
                        ref={qrRef}
                        key={qrValue}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="p-8 bg-white shadow-xl dark:bg-gray-800 rounded-2xl"
                    >
                        <QRCode
                            value={qrValue}
                            size={256}
                            fgColor="#2C3E50"
                            bgColor="#FFFFFF"
                            level="H"
                        />
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button
                            onClick={generateNewCode}
                            disabled={isGenerating}
                            className="flex items-center gap-2 px-6 py-3 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                        >
                            <FiRefreshCw /> Generate New Code
                        </button>
                        <button
                            onClick={downloadQRCode}
                            className="flex items-center gap-2 px-6 py-3 text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
                        >
                            <FiDownload /> Download QR Code
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
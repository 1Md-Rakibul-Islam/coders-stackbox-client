import React from 'react';
const FAQCard = ({ q }) => {
    return (
        <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>

            <div>
                <h1 className="text-xl font-semibold text-white">{q.Ques}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    {q.Ans}
                </p>
            </div>
        </div>
    );
};

export default FAQCard;
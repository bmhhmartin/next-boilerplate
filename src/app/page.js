import React from 'react';

const page = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='py-5 text-3xl text-red-600 font-bold'>Homepage</h1>
            <h2 className='py-5 text-xl text-blue-600 font-bold'>Use here:</h2>
            <ul>
                <li>Javascript</li>
                <li>Tailwind CSS (no plugin)</li>
                <li>ES Lint</li>
                <li>Route</li>
                <li>Loading page created</li>
                <li>Not Found page created</li>
                <li>.env file created</li>
                <li>Some property added in next.config.js</li>
            </ul>
        </div>
    );
};

export default page;
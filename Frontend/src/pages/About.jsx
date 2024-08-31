import React from 'react'

function About() {
    return (
        <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
            <div className="max-w-3xl mx-auto">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight">About This Website</h1>
                    <p className="text-muted-foreground text-lg">
                        This website is built on the MERN stack, which includes MongoDB, Express.js, React, and Node.js. Designed for efficiency and scalability, it delivers a dynamic user experience with a seamless interface. The platform brings together powerful backend functionality with a responsive front end, ensuring a modern web experience.
                    </p>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">Key Features</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-card p-6 rounded-md shadow-sm">
                                <h3 className="text-xl font-semibold">Custom URL Creation</h3>
                                <p className="text-muted-foreground">
                                Gain valuable insights into your link's performance, including click counts, new visitors.                                </p>
                            </div>
                            <div className="bg-card p-6 rounded-md shadow-sm">
                                <h3 className="text-xl font-semibold">URL Analytics</h3>
                                <p className="text-muted-foreground">
                                Gain valuable insights into your link unique visitors.
                                </p>
                            </div>
                            <div className="bg-card p-6 rounded-md shadow-sm">
                                <h3 className="text-xl font-semibold">Open Source</h3>
                                <p className="text-muted-foreground">
                                This project is completely open source, allowing developers to contribute, modify, and enhance the platform. Transparency and collaboration are at the heart of this website’s development.
                                </p>
                            </div>
                            <div>
                                <a className='text-4xl cursor-pointer' href='https://github.com/IzzMehh/Url-Shortner' target="_blank"><ion-icon name="logo-github"></ion-icon></a>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
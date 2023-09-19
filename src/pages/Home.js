import React from 'react';
import { Plane, Linkedin, Github, Website, Software, DataAnalysis, Email, Phone, Timeline, Timeline1, Timeline2, ArrowTopRight, ProfilePicture, DeepPurple, Capstone, PersonalPortfolio } from "../assets";

function Home() {
    return(
        <>
            <div>
                {/* Hi! section */}
                <div className="md:h-screen h-full bg-[#FEF4DE] md:px-28 px-8 md:pb-0 pb-4">
                    {/* Navbar */}
                    <div className="pt-4 flex justify-between items-center">
                        <a href="/">
                            <p className="font-bold text-3xl">gh</p>
                        </a>
                        <div>
                            <a href="#about" className="md:mr-12 mr-4 hover:text-[#3B68FF]">About</a>
                            <a href="#education" className="md:mr-12 mr-4 hover:text-[#3B68FF]">Education</a>
                            <a href="#projects" className="md:mr-12 mr-4 hover:text-[#3B68FF]">Projects</a>
                            <a href="#footer" className="hover:text-[#3B68FF]">Contact</a>
                        </div>
                    </div>

                    <div className="mt-8 md:flex justify-between items-center">
                        {/* Left part */}
                        <div className="md:text-left text-center">
                            <div className="font-extrabold md:text-7xl text-6xl">
                                <p className="text-[#424242]">Hi! I am</p>
                                <p className="text-[#FF3535]">Gui Hendro</p>
                            </div>
                            <a href="#" className="mt-4 border rounded rounded-xl bg-[#424242] text-xl text-white md:px-6 md:py-4 px-4 py-2 inline-flex items-center hover:bg-[#343434]">
                                <p className="mr-2">View my resume</p>
                                <img src={Plane}></img>
                            </a>
                            <div className="mt-4 flex items-center justify-center md:justify-start">
                                <p className="text-lg ">Check Out My</p>
                                <a href="https://www.linkedin.com/in/guihendro/" className="bg-[#424242] rounded-full p-4 text-center items-center ml-4 hover:bg-[#343434]">
                                    <img src={Linkedin}></img>
                                </a>
                                <a href="https://github.com/guihendro" className="bg-[#424242] rounded-full p-4 text-center items-center ml-4 hover:bg-[#343434]">
                                    <img src={Github}></img>
                                </a>
                            </div>
                        </div>

                        {/* Profile picture */}
                        <div className="justify-end">
                            <img src={ProfilePicture}
                            alt="profile"
                            className="max-w-full md:w-500 md:h-550" // Apply different sizing based on screen size
                            style={{ width: '100%', maxWidth: '500px', maxHeight: '550px' }}
                            ></img>
                        </div>
                    </div>
                </div>

                {/* About me section */}
                <div id="about" className="flex flex-col justify-center md:h-screen h-full bg-[#FFD438] md:py-0 py-8">
                    <div className="grid w-full gap-16 md:grid-cols-2 md:px-28 px-8">
                        <div>
                            <p className="font-bold text-5xl text-[#424242]">About me</p>
                            <div className="text-xl mt-8 text-[#424242] text-justify">
                                <p>
                                    I recently graduated with a degree in Computer Science, majoring in Big Data from the University of Wollongong, Singapore Institute of Management. 
                                </p>
                                <br></br>
                                <p>
                                    I enjoy creating simple yet elegant websites and software. I'm also skilled in data analytics, allowing me to process data and uncover meaningful insights.
                                </p>
                            </div>
                        </div>

                        {/* Cards */}
                        <div className="flex flex-col items-center">
                            <div class="flex flex-col bg-white border border-gray-200 rounded-2xl shadow w-4/5 mb-8">
                                <div class="flex items-center md:p-6 p-3">
                                    <div className="bg-[#FF3535] md:w-20 md:h-20 w-16 h-16 rounded-full flex justify-center items-center">
                                        <img src={Website}></img>
                                    </div>
                                    <p className="font-bold md:text-2xl text-lg ml-4">Website Development</p>
                                </div>
                            </div>

                            <div class="flex flex-col bg-white border border-gray-200 rounded-2xl shadow w-4/5 mb-8">
                                <div class="flex items-center md:p-6 p-3">
                                    <div className="bg-[#FFD438] md:w-20 md:h-20 w-16 h-16 rounded-full flex justify-center items-center">
                                        <img src={Software}></img>
                                    </div>
                                    <p className="font-bold md:text-2xl text-lg ml-4">Software Development</p>
                                </div>
                            </div>

                            <div class="flex flex-col bg-white border border-gray-200 rounded-2xl shadow w-4/5">
                                <div class="flex items-center md:p-6 p-3">
                                    <div className="bg-[#27996B] md:w-20 md:h-20 w-16 h-16 rounded-full flex justify-center items-center">
                                        <img src={DataAnalysis}></img>
                                    </div>
                                    <p className="font-bold md:text-2xl text-lg ml-4">Data Analysis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Education section */}
                <div id="education" className="h-screen bg-[#FEF4DE] md:px-28 px-8">
                    <p className="flex justify-center font-bold text-5xl text-[#424242] md:py-16 py-8">My Academic Journey</p>
                    <div className="md:grid md:grid-cols-8">
                        <div className="col-span-3 text-xl">
                            <p className="font-bold">Diploma in Information Technology</p>
                            <p className="font-bold">Singapore Institute of Management</p>
                            <p>Oct 2020 - Oct 2021</p>
                        </div>
                        <div className="col-span-1 hidden md:block">
                            <img src={Timeline1}></img>
                        </div> 
                        <div className="col-span-4 md:mt-0 mt-2">
                            <p className="text-justify md:text-lg text-md">I enrolled in the Diploma in Information Technology at the Singapore Institute of Management (SIM) due to my strong interest in programming. I successfully graduated with a GPA of 3.94 and received the SIM Bronze Award. During the program, I gained a solid foundation in programming, data structures, and algorithms.</p>
                        </div>
                    </div>
                    <div className="md:grid md:grid-cols-8 md:mt-0 mt-4">
                        <div className="col-span-3 text-xl">
                            <p className="font-bold">Computer Science (Big Data)</p>
                            <p className="font-bold">University of Wollongong</p>
                            <p>Oct 2021 - Oct 2023</p>
                        </div>
                        <div className="col-span-1 hidden md:block">
                            <img src={Timeline2}></img>
                        </div> 
                        <div className="col-span-4 md:mt-0 mt-2">
                            <p className="text-justify md:text-lg text-md">Driven by my passion for the field, I pursued a Bachelor of Computer Science specializing in Big Data. Throughout my academic journey, I undertook several projects, including web-based applications and desktop software development. I am proud to have achieved a Weighted Average Mark of 87.2 and was honored to be included in the EIS Dean's Merit List for the year 2022.</p>
                        </div>
                    </div>
                </div>

                {/* Projects section */}
                <div id="projects" className="md:h-screen h-full bg-[#FFD438] md:px-28 px-8 flex items-center md:py-0 py-8">
                    <div className="md:grid md:grid-cols-3 gap-8">
                        <div className="">
                            <div className="font-bold text-5xl text-[#424242] md:mb-16">
                                <p>Recent</p>
                                <p>Projects</p>
                            </div>
                            <hr className="h-px mt-4 bg-[#424242] border-0"></hr>
                            <div className="">
                                <div className="flex items-center justify-between px-4">
                                    <p className="font-medium text-2xl text-[#424242] py-4">DeepPurple Website</p>
                                    <a href="https://frontend.d22e4ei8cn3no7.amplifyapp.com/" type="button" class="bg-[#3B68FF] rounded-full p-3.5 hover:bg-[#3260FD]">
                                        <img src={ArrowTopRight}></img>
                                    </a>
                                </div>
                                <img src={DeepPurple}></img>
                            </div>
                        </div>
                        <div className="md:pt-20">
                            <hr className="h-px mt-4 bg-[#424242] border-0"></hr>
                            <div className="">
                                <div className="flex items-center justify-between px-4">
                                    <div className="font-medium text-xl text-[#424242] py-4">
                                        <p>How Can a Wellness Technology</p>
                                        <p>Company Play It Smart?</p>
                                    </div>
                                    <a href="https://www.kaggle.com/code/guihendro/capstone-bellabeat-case-study" type="button" class="bg-[#3B68FF] rounded-full p-3.5 hover:bg-[#3260FD]">
                                        <img src={ArrowTopRight}></img>
                                    </a>
                                </div>
                                <img src={Capstone}></img>
                            </div>
                        </div>
                        <div className="md:pt-4">
                            <hr className="h-px mt-4 bg-[#424242] border-0"></hr>
                            <div className="">
                                <div className="flex items-center justify-between px-4">
                                    <p className="font-medium text-2xl text-[#424242] py-4">Personal Portfolio Website</p>
                                    <a href="#" class="bg-[#3B68FF] rounded-full p-3.5 hover:bg-[#3260FD]">
                                        <img src={ArrowTopRight}></img>
                                    </a>
                                </div>
                                <img src={PersonalPortfolio}></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div id="footer" className="h-64 bg-[#FEF4DE] md:px-28 px-8">
                    <div className="flex items-center grid grid-cols-2 text-[#424242] pt-14 mb-12">
                        <div>
                            <p className="font-bold md:text-2xl text-lg mb-2">Information</p>
                            <div className="flex items-center">
                                <img src={Email}></img>
                                <p className="ml-2 md:text-lg text-sm">guihendro1@gmail.com</p>
                            </div>
                            <div className="flex items-center">
                                <img src={Phone}></img>
                                <p className="ml-2 md:text-lg text-sm">(+65) 8886 4332</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <p className="md:text-4xl text-2xl ml-4 md:ml-0 font-bold">Let's connect together!</p>
                        </div>
                    </div>
                    <hr className="h-px mt-4 bg-[#424242] border-0"></hr>
                    <div className="flex justify-center my-4">
                        <p className="font-light mr-1">Design by</p>
                        <p className="font-medium">Gui Hendro</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
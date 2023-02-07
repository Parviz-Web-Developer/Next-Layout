import React from 'react';
import Link from 'next/link'
import style from '../styles/Home.module.css'

const MainLayout = ({ chidlren }) => {
    return (
        <>
            <header className={style.def_header} >
                <div className="left">
                    <img src="/images/icon.png" alt="" />
                    <Link href="#" >Home</Link>
                    <Link href="#" >About me</Link>
                    <Link href="#" >Portfolio</Link>
                    <Link href="#" >Contact</Link>
                </div>
                <div className="right">
                    <div className="rounded"></div>
                    <div className="rounded"></div>
                    <div className="rounded">
                    </div>
                    <Link href="/auth/signup">
                        <button className="text-white" >Sign-Up</button>
                    </Link>
                </div>
            </header>
            <main>
                {chidlren}
                <div className="inMain">
                    <div className="txt">
                        <p className='hi'>HELLO</p>
                        <p className='nameM'>I'M MURCH <br /> MURCHEV</p>
                        <p>I've been doing web design, front-end <br /> and back-end development for a year now. Do you <br /> need a website design, site layout, or maybe a <br /> turnkey website? Then contact me.<br /><br />P.s To contact me, you need to register or log in to your account.</p>
                    </div>
                    <img src="/images/Gleb.png" alt="" />
                </div>
            </main>
            <div className='mainVtwo'>
                <img className='skills' src="/images/Sills.png" alt="" />
                <div className="about">
                    <img className='roundOne' src="/images/FirstRound.png" alt="" />
                    <img className='roundTwo' src="/images/Yellow.png" alt="" />
                    <img className='roundThree' src="/images/Blue.png" alt="" />
                    <div className="aboutMe">
                        <h1 className='txt_me'>ABOUT ME</h1>
                        <div className="txt_about">
                            <p>Hello again everyone! So, you already know that my name is Murch. A little about myself: student, 18 y.o., I love creativity since childhood, I live in Samarkand, Uzbekistan. Why programming? Everything is elementary - I like it, the profession of the future, thanks to which I can provide myself and fulfill my dream - travel, at the moment I specialize in web design, front-end and back-end development, turnkey websites. Why should you choose me? I approach each order with great responsibility and love, as I want to make a name for myself, exclude plagiarism and negligence, fully study the project, the client and its target audience, work for quality, trying to make an order as quickly and uniquely as possible, taking into account all the edits and wishes.
                                By trusting me, you will get the maximum return for your project, save your nerves and time.
                                If you are interested in me , you want to know something more or use my services, then I will provide all my contacts below. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mainThree">
                <p className='porto'>PORTFOLIO</p>
                <div className="portfolio">
                    <img className='portImg' src="/images/PortImg.png" alt="" />
                    <div className="txt_portfolio_t">
                        <h1>Landing Ice-cream</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut orci eu elit consequat posuere ut sed elit. Nulla et tristique felis. Morbi quis orci non purus blandit fringilla. Etiam et mollis eros. Duis venenatis vulputate lacus, non tristique eros placerat vel. Nam nec magna lacus. Etiam euismod egestas mauris nec mollis. Phasellus efficitur et ex vel condimentum. Cras enim purus, tempor sed massa vel, accumsan bibendum magna. Nullam hendrerit cursus purus, sit amet viverra arcu gravida vel.</p>
                    </div>
                </div>
            </div>
        </>
    );
};


export default MainLayout;
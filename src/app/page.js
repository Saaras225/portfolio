'use client'
import Head from 'next/head';
import {useState} from 'react';
import dictionary from './../app/utilities/dictionary';
import icons from './../app/utilities/icons';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [hiddenMobile, setHiddenMobile] = useState(false);
  const [language, setLanguage] = useState('sp');
  const menu = hiddenMobile ? 'w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden': 
  'w-full block flex-grow lg:flex lg:items-center lg:w-auto';
  const langContent = dictionary;
  const content = langContent[language];
  const projects = content.listProjects;
  const projectsMap = projects.map((item) => {
    const url = item.url;
    return(
      <div key={item.index} className='text-center shadow-lg p-2 rounded-xl border-2 border-indigo-600'>
        <img
            id= {item.title}
            className='rounded-xl w-64 h-40'
            src= {`./${item.img}`}
            alt= {item.title}
            onClick={()=>window.open(url, '_blank')}
            width={100}
            height={100}
          />
        <h3 className='dark:text-rose-300 font-bold text-purple-500'>{item.title}</h3>
        <p className='dark:text-rose-300'>{item.type}</p>
      </div>
    );
  });
  
  const aboutMe = () => {
    return(
      language == 'sp'?
        <div>
          <h3 className='text-base md:text-xl lg:text-5xl font-mono text-transparent py-1 bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>SOBRE MI</h3>
          <p className='text-xs md:text-sm lg:text-base py-2 leading-8 text-grey-80 dark:text-rose-300'>Hola, mi nombres es Kerlismar (complicado, lo sé) pero <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>NADIE</span> me llama por el, todos me conocen por mi segundo nombre Sara</p>
          <p className='text-xs md:text-sm lg:text-base leading-8 text-grey-80 dark:text-rose-300'>Me considero una persona curiosa, cuando me gusta mucho algo indago mucho sobre el tema. Me gusta leer y me atraen mucho los idiomas por lo que sé <span className='text-transparent text-lg bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>INGLÉS</span> a un nivel avanzado  y <span className='text-transparent text-lg bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>FRANCÉS</span> a un nivel medio.</p>
          <p className='text-xs md:text-sm lg:text-base py-2 leading-8 text-grey-80 dark:text-rose-300'>Mis hobbies son escuchar <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>MÚSICA</span> y ver peliculas. Mis temporadas favorita es el <span className='text-transparent text-lg bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>OTOÑO Y EL INVIERNO</span></p>
        </div> :
        <div>
          <h3 className='text-base md:text-xl lg:text-5xl font-mono text-transparent py-1 bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>ABOUT ME</h3>
          <p className='text-xs md:text-sm lg:text-base py-2 leading-8 text-grey-80 dark:text-rose-300'>Hi, my name is Kerlismar (complicated, I know) but <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>NOBODY</span> call me that way, everybody know me for my second name Sara</p>
          <p className='text-xs md:text-sm lg:text-base leading-8 text-grey-80 dark:text-rose-300'>I consider myself a curious person, when I really like something I do a lot of research on the subject. I like to read and I also learn languages, that's why I speak <span className='text-transparent text-lg bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>ENGLISH</span> at an advance level  and also <span className='text-transparent text-lg bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>FRENCH</span> at a medium level.</p>
          <p className='text-xs md:text-sm lg:text-base py-2 leading-8 text-grey-80 dark:text-rose-300'>My hobbies are listening to <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>MUSIC</span> and watch author movies. My favorite seasons are <span className='text-transparent text-lg bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>AUTUMN AND WINTER</span></p> 
        </div>
    );
  };

  const iconsMap = Object.entries(icons).map(([key, value]) => {
    return (
      <div key={key}>
        <img
          className='cursor-pointer rounded-full mt-1 lg:mt-10 w-14 md:w-20 lg:w-24 overflow-hidden'
          src={`./${value}`}
          alt={key}
      />
      </div>
    );
  });


  // const classToggle = document.getElementById('menu').classList.toggle('hidden');
  return (
    <div className={darkMode?'dark' : ''}>
      <Head>
        <title>sara's Portfolio</title>
      </Head>
      <div className='flex flex-col'>
      <main>
        <nav className="flex items-center justify-between flex-wrap bg-slate-950 p-6 sticky top-0 z-50">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <img
                className='cursor-pointer text-2xl'
                src="./SARAY.png"
                alt="moon-Logo"
                width={50}
              />
            </span>
          </div>
          <div className="block lg:hidden">
          </div>
          <div id='menu' className={menu}>
            <div className="text-sm lg:flex-grow">
              <a href="#init" className="block mt-4 lg:inline-block lg:mt-0 text-transparent bg-clip-text bg-pink-500 hover:text-white mr-4">
                Init
              </a>
              <a href="#aboutMe" className="block mt-4 lg:inline-block lg:mt-0 text-transparent bg-clip-text bg-pink-500 hover:text-white mr-4">
                About-me
              </a>
              <a href="#tech" className="block mt-4 lg:inline-block lg:mt-0 text-transparent bg-clip-text bg-pink-500 hover:text-white mr-4">
                Tech
              </a>
              <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 text-transparent bg-clip-text bg-pink-500 hover:text-white">
                Projects
              </a>
            </div>
            <div className='flex mx-3 lg:mr-5'>
            <div className='flex items-center font-bold'>
              <button id='en' onClick={()=>setLanguage('en')} className="block mt-4 lg:inline-block lg:mt-0 text-transparent bg-clip-text bg-pink-500 hover:text-white mr-4">
                  EN
                </button>
                <button id='sp' onClick={()=>setLanguage('sp')} className="block mt-4 lg:inline-block lg:mt-0 text-transparent bg-clip-text bg-pink-500 hover:text-white mr-4">
                  SP
                </button>
            </div>
            <button onClick={()=> setDarkMode(!darkMode)}>
                    <img
                      className='cursor-pointer text-2xl'
                      src="./nightOne.png"
                      alt="moon-Logo"
                      width={50}
                      height={50}
                    />
                  </button>

            </div>
            <div>
              <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded bg-clip-text text-transparent bg-pink-500 border-pink-500 hover:border-transparent hover:text-transparent via-purple-500 hover:bg-white mt-4 lg:mt-0">Resume</a>
            </div>
          </div>
        </nav>

        <section id='init' className="min-h-screen flex flex-col justify-center bg-[url('/portfolio/spacewhite6.png')] dark:bg-[url('/portfolio/space1.png')]">
          <div className='m-auto'>
            <div className='p-5 text-center rounded-lg border-4 border-purple-500 backdrop-opacity-10 backdrop-invert bg-slate-300 dark:bg-transparent'>
              <h2 className='text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Sarays G. Yance</h2>
              <h3 className='text-1xl mt-0 py-1 font-bold lg:text-4xl leading-8 text-gray-800  dark:text-rose-300'>Front-end Developer / Data Enthusiast</h3>
            </div>
            <div className='mx-auto flex justify-center'>
              <img
                className='cursor-pointer overflow-hidden rounded-full'
                src="./spacegirl15.png"
                alt="girl"
                width={550}
                height={600}
              />
            </div>
          </div>
        </section>
        
        <section id='aboutMe' className="min-h-screen flex flex-col justify-center bg-cover bg-no-repeat bg-[url('/portfolio/spacewhite12.png')] dark:bg-[url('/portfolio/spacePlanet3.png')]">
          <div className='flex flex-col lg:flex-row justify-center'>
            <div className='self-center w-auto h-1/4 md:w-1/2 lg:w-1/3'>
              <img
                className='cursor-pointer lg:ml-28 sm:h-80 md:h-auto lg:h-auto'
                src="./spacegirlOne.png"
                alt="spaceImg"
              />
            </div>
            <div className='rounded-lg border-4 border-purple-500 backdrop-opacity-10 backdrop-invert bg-slate-300 dark:bg-transparent w-auto m-5 md:m-auto md:w-3/4 lg:w-1/2' >
                <div className='text-center lg:mx-10'>
                  {aboutMe()}
                </div>
                <div className='flex justify-center gap-16 sm:mt-1 md:mt-5 lg:mt-5'>
                  <img
                    className='cursor-pointer sm:w-10 sm:h-16 md:w-24 md:h-20 lg:w-28 lg:h-18'
                    src="./githubNeon.svg"
                    alt="github-Logo"
                  />
                  <img
                    className='cursor-pointer sm:w-10 sm:h-16 md:w-24 md:h-20 lg:w-28 lg:h-184'
                    src="./linkedinNeo.svg"
                    alt="Linekdin-Logo"
                  />
                  <img
                    className='cursor-pointer sm:w-10 sm:h-16 md:w-24 md:h-20 lg:w-28 lg:h-18'
                    src="./resumeDown.png"
                    alt="resume-Logo"
                  />
                </div>
            </div>
          </div>
        </section>

        <section id='tech' className="min-h-screen flex flex-col justify-center bg-cover bg-no-repeat bg-[url('/portfolio/spacewhite11.png')]  dark:bg-[url('/portfolio/planetsDark.png')]">
          <div className='flex flex-col-reverse lg:m-auto lg:flex-row items-center'>
            <div className='rounded-lg border-4 border-purple-500 backdrop-opacity-10 backdrop-invert bg-slate-300 dark:bg-transparent text-center items-center mx-8 mt-8 md:w-3/4 lg:m-12'>
              <div className='flex flex-col justify-center lg:w-1/2 m-auto'>
                <h3 className='text-base md:text-2xl lg:text-5xl font-mono text-transparent font-semibold mt-5 bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Tecnologías</h3>
                <div className='flex flex-wrap justify-center self-center'>
                  {iconsMap}
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <img
                className='cursor-pointer overflow-hidden'
                src="./floating15.png"
                alt="spacegirl"
              />
            </div>
          </div>
        </section>

         <section id='projects' className="min-h-screen flex flex-col justify-center bg-cover bg-no-repeat bg-[url('/portfolio/spacewhite8.png')] dark:bg-[url('/portfolio/moon2.png')]">
          <div className='m-10 flex flex-col items-center justify-evenly lg:flex-row'>
            <div className='spaceProgrammer'>
              <div className='item-center'>
                <img
                  className='cursor-pointer overflow-hidden'
                  src="./projects2.png"
                  alt="spacemanPC"
                />
              </div>
            </div>
            <div className='flex flex-col rounded-lg border-4 border-purple-500 backdrop-opacity-10 backdrop-invert bg-slate-300 dark:bg-transparent'>
              <div className='text-center'>
                <h3 className='text-base md:text-xl lg:text-5xl font-semibold font-mono text-transparent py-5 bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>projects</h3>
              </div>
              <div id='cards' className='mb-5 flex flex-wrap justify-center self-center gap-3 w-full lg:grid-cols-3'>
                {projectsMap}
              </div>
            </div>
          </div>
        </section>

      </main>
      </div>
    </div>
  )
}

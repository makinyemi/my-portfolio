import './Home.css'

const Home = () => {
  return (
    <div className="Section google-sans-code-font my-8">
      <div className="flex flex-col justify-center items-center">
        <div className="my-8">
          <h1 className="text-7xl">
            Howdy, I'm <span className="text-cyan-300">Michael</span>
          </h1>
          <h2 className="text-4xl">Software Engineer & Web Developer</h2>
        </div>
        <div className="my-20">
          <img
            src="https://placehold.co/600x400"
            alt="Placeholder image for michael"
          />
        </div>
        <div className="lg:w-1/2 mt-8 mx-auto text-center items-center">
          <p className="">
            Full stack software engineer skilled in building secure, scalable,
            full stack applications.
            <br />
            <br />I build backend application with{' '}
            <span className="text-blue-400">Python</span>/
            <span className="text-green-300">FastAPI</span> and{' '}
            <span className="text-yellow-300">TypeScript</span>/
            <span className="text-orange-100">Express.js</span>.
            <br />
            <br />
            I'm also skilled at building front end applications with{' '}
            <span className="text-cyan-300">React.js</span>,{' '}
            <span className="text-gray-400">Next.js</span>,{' '}
            <span>TypeScript</span>. in{' '}
            <span className="text-blue-400">Python</span>,{' '}
            <span className="text-yellow-300">TypeScript</span>,{' '}
            <span className="text-orange-300">Java</span>,{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home

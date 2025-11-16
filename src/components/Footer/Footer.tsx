import { Link } from 'react-router'
import './Footer.css'

const Footer = () => {
  return (
    <div className="FooterContainer bg-black p-8 text-white bottom-0 w-full">
      <div className="FooterContent grid grid-cols-3 mb-4">
        <div className="FooterContentItem">
          <a
            className="FooterContentLink"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>X</span>
            <img src="./logo-white.png" alt="" width={25} height={25} />
          </a>
        </div>
        <div className="FooterContentItem">
          <a
            className="FooterContentLink"
            href="https://github.com/makinyemi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Github</span>
            <img src="./github-mark-white.png" alt="" width={25} height={25} />
          </a>
        </div>
        <div className="FooterContentItem">
          <a
            className="FooterContentLink"
            href="https://www.linkedin.com/in/makinyemi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Linkedin</span>
            <img src="./InBug-White.png" alt="" width={25} height={25} />
          </a>
        </div>
      </div>
      <div className="FooterBottom flex justify-center gap-3 text-xs px-22">
        <p>© 2025 Michael Akinyemi. All rights reserved.</p>
        <div>
          <ul className="flex gap-4">
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

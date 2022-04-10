import React from 'react'
import iconInstagram from '../assets/icon-instagram.png'
import iconLinkedin from '../assets/icon-linkedin.png'
import iconYoutube from '../assets/icon-youtube.png'

const Footer = () => {
  return (
    <footer className='footer-principal'>
      <h3 className='copyright-footer'>&copy; Ecommerce Academlo 2022</h3>
      <ul className='list-social-media'>
        <li className="social-media-item">
          <img 
            className="icon-social-media"
            src={iconInstagram} 
            alt="icon instagram" 
          />
        </li>
        <li className="social-media-item">
          <img 
            className="icon-social-media"
            src={iconLinkedin} 
            alt="icon linkedin" 
          />
        </li>
        <li className="social-media-item">
          <img 
            className="icon-social-media"
            src={iconYoutube}
            alt="icon youtube"
          />
        </li>
      </ul>
    </footer>
  )
}

export default Footer
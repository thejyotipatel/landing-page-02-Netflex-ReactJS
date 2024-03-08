import { IoEarthSharp } from 'react-icons/io5'
import { FaCaretDown } from 'react-icons/fa6'

const links = [
  'FAQ',
  'Help Centre',
  'Account',
  'Media Centre',
  'Investor Relations',
  'Jobs',
  'Ways to Watch',
  'Terms of Use',
  'Privacy',
  'Cookie Preferences',
  'Corporate Information',
  'Contact Us',
  'Speed Test',
  'Legal Notices',
  'Only on Netflix',
]

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='footer-center'>
            <h2>Questions? Call 000-800-919-1694</h2>

            <ul role='list'>
              {links.map((item, index) => {
                return (
                  <li key={index}>
                    <a href='#'>{item}</a>
                  </li>
                )
              })}
            </ul>
 
            <div className='lag'>
              <button className='btn'>
                <span>
                  <IoEarthSharp />
                </span>
                English
                <span>
                  <FaCaretDown />
                </span>
              </button>

              <p className='country'>Netflix India</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer

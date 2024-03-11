import JoinButton from './JoinButton'
import { NetflixLogo } from '../assets/logoIcon'
const Navbar = () => {
  return (
    <>
      <section className='navbar'>
        <div className='nav-container'>
          <div className='nav-center'>
            <div className='logo-container'>
              <a href='/'>
                <span className='icon'>
                  <NetflixLogo />
                </span>
              </a>
            </div>

            <nav>
              <h1 className=' '>UNLIMITED TV SHOWS & MOVIES</h1>

              <JoinButton text='join now' />

              <JoinButton text='Sign in' />
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}
export default Navbar

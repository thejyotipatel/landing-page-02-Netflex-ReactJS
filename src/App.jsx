// import { FaCaretDown ,FaChevronLeft,FaChevronRight  } from 'react-icons/fa6'
// import { IoPlaySharp } from 'react-icons/io5'

import {
  CommingSoonContainer,
  EpisodesList,
  Footer,
  HeroContainer,
  MoreDetailsContainer,
  MoreLinkMoviesList,
  MovieVideosList,
  Navbar,
} from './components'

function App() {
  return (
    <>
      <Navbar />
      <main className='main'>
        {/* <HeroContainer />
        <MovieVideosList />
        <EpisodesList />
        <MoreDetailsContainer />
        <MoreLinkMoviesList /> */}
        <CommingSoonContainer />
      </main>

      <Footer />
    </>
  )
}

export default App

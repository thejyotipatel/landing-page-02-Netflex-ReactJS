import SectionTitle from './SectionTitle'
import MoreLinkMovieItem from './MoreLinkMovieItem'

const MoreLinkMoviesList = () => {
  return (
    <>
      <section className='container'>
        <div className='container-center'>
          <SectionTitle title='More Like This' />

          {/* list */}
          <div className='cols'>
            <MoreLinkMovieItem />
          </div>
        </div>
      </section>
    </>
  )
}
export default MoreLinkMoviesList

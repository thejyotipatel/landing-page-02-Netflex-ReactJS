import SectionTitle from './SectionTitle'
import MovieVideoItem from './MovieVideoItem'

const MovieVideosList = () => {
  return (
    <>
      <section className='container'>
        <div className='container-center'>
          <SectionTitle title='Videos' subTitle='Gyeongseong Creature' />

          {/* list */}
          <div className='video-lists'>
            <MovieVideoItem />
          </div>
        </div>
      </section>
    </>
  )
}
export default MovieVideosList

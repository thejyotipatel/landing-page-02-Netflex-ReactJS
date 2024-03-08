import SectionTitle from './SectionTitle'
import EpisodeItem from './EpisodeItem'

const EpisodesList = () => {
  return (
    <>
      <section className='container'>
        <div className='container-center'>
          <SectionTitle title='Episodes' subTitle='Gyeongseong Creature' />

          <div className='eps-info'>
            <p>Season 1</p>
            <h4>Release year: 2023</h4>
            <p>
              Gyeongseong, 1945. In Seoul's grim era under colonial rule, an
              entrepreneur and a sleuth fight for survival and face a monster
              born out of human greed.
            </p>
          </div>

          {/* list */}
          <div className='cols'>
            <EpisodeItem />
          </div>
        </div>
      </section>
    </>
  )
}
export default EpisodesList

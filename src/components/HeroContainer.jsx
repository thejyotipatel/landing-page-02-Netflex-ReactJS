const data = {
  id: 1,
  title: 'Gyeongseong Creature',
  year: 2023,
  canWatch: 16,
  season: 1,
  gean: 'Horror',
  description:
    "Gyeongseong, 1945. In Seoul's grim era under colonial rule, an entrepreneur and a sleuth fight for survival and face a monster born out of human greed.",
  starring: ['Park Seo-jun', 'Han So-hee', 'Claudia Kim'],
  creators: ['Kang Eun-kyung', 'Chung Dong-yoon'],
}

const HeroContainer = () => {
  return (
    <section className='hero'>
      <div className='hero-container'>
        <div className='movie-info'>
          <h1>Gyeongseong Creature</h1>
          <p className='detail'>
            <span>{data.year}</span>

            <span>U/A{data.canWatch}+</span>

            <span>{data.season} Season</span>

            <span>{data.gean}</span>
          </p>
          <p className='desc'>{data.description}</p>

          <p className='starring'>
            <span>starring:</span>
            {data.starring.map((item, index) => {
              return <span key={index}>{item}</span>
            })}
          </p>

          <p className='creators'>
            <span>Creators:</span>
            {data.creators.map((item, index) => {
              return <span key={index}>{item}</span>
            })}
          </p>
        </div>
      </div>
    </section>
  )
}
export default HeroContainer

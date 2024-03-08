const moviesData = [
  {
    id: 1,
    title: 'Heeramandi: The Diamond Bazaar',
    img: '',
    href: '#',
    season: 1,
  },
  {
    id: 2,
    title: 'Heeramandi: The Diamond Bazaar',
    img: '',
    href: '#',
    season: 1,
    part: 2,
    teaser: null,
  },
  {
    id: 3,
    title: 'Heeramandi: The Diamond Bazaar',
    img: '',
    href: '#',
    season: 1,
    part: 1,
    teaser: 2,
  },
  {
    id: 4,
    title: 'Heeramandi: The Diamond Bazaar',
    img: '',
    href: '#',
    season: 1,
    part: 1,
    teaser: 1,
  },
  {
    id: 5,
    title: 'Heeramandi: The Diamond Bazaar',
    img: '',
    href: '#',
    season: 1,
    part: 1,
    teaser: 3,
  },
]

const MovieVideoItem = () => {
  return (
    <>
      <div className='cols-item'>
        <div className='img-container'>
          <img src='/01.jpg' alt='01.jpg' />
        </div>

        <div className='info-container'>
          <h2 className='head'>
            Season 1 Part 1 Trailer: Gyeongseong Creature
            <span>
              Season {moviesData.id} Part {moviesData.id}{' '}
              {moviesData === 1 ? 'Trailer:' : `Teaser ${moviesData.id} :`}
              {moviesData.title}
            </span>
          </h2>
          <p>{moviesData.description}</p>
        </div>
      </div>
    </>
  )
}
export default MovieVideoItem

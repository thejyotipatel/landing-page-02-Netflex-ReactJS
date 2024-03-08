const moviesData = {
  id: 1,
  title: 'Najin',
  description:
    'Facing financial ruin, Jang Tae-sang agrees to track down a missing person — but two figures trail him. Meanwhile, sinister operations occur underground.',
  time: 68,
  img: '',
}

const EpisodeItem = () => {
  return (
    <>
      <div className='cols-item'>
        <div className='img-container'>
          <img src='/01.jpg' alt='01.jpg' />
        </div>

        <div className='info-container'>
          <h2 className='head'>
            <span>
              {moviesData.id}.{moviesData.title}
            </span>
            <span>{moviesData.time}</span>
          </h2>
          <p>{moviesData.description}</p>
        </div>
      </div>
    </>
  )
}
export default EpisodeItem

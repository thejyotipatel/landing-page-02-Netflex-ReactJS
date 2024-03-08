import SectionTitle from './SectionTitle'

const moviesData = [
  {
    id: 1,
    header: 'Watch offline',
    describetion: 'Download and watch everywhere you go.',
  },
]
const MoreDetailsContainer = () => {
  return (
    <>
      <section className='container'>
        <div className='container-center'>
          <SectionTitle title='More Details' />

          {/* list */}
          <div className='cols'>
            <div className='cols-item'>
              <h3>{moviesData[0].header}</h3>
              <p>{moviesData[0].describetion}</p>
            </div>
          </div>

          <h2>Cast</h2>
          <div className='cols'>
            <div className='cols-item'>
              <h3>{moviesData[0].header}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default MoreDetailsContainer

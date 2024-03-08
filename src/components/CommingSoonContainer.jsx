import SectionTitle from './SectionTitle'

const moviesData = [
  {
    id: 1,
    header: 'Heeramandi: The Diamond Bazaar',
    describetion:
      'Sanjay Leela Bhansali brings his majestic signature flair to stories of love and betrayal in the lives of courtesans in pre-independence India.',
  },
]

const CommingSoonContainer = () => {
  return (
    <>
      <section className='container'>
        <div className='container-center'>
          <SectionTitle title='Coming Soon' />

          {/* list */}
          <div className='cols'>
            <div className='cols-item'>
              <h3>{moviesData[0].header}</h3>
              <p>{moviesData[0].describetion}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default CommingSoonContainer

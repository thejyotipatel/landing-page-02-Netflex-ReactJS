import JoinButton from './JoinButton'

const WatchBox = () => {
  return (
    <>
      <div className='item-container'>
        <div className='items'>
          <div className='item'>
            <h1>
              <img src='./n-logo.svg' alt='n-logo' />
              Watch all you want.
            </h1>
          </div>
          <div className='item'>
            <JoinButton text='join now' />
          </div>
        </div>
      </div>
    </>
  )
}
export default WatchBox

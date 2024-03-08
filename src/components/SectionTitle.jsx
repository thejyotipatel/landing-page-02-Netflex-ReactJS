import { Suspense } from 'react'

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className='main-title'>
      <h1>{title}</h1>
      {subTitle && <h2>{subTitle}</h2>}
    </div>
  )
}
export default SectionTitle

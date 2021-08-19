import './styles.css'
import IMAGE from './react.png'

export const App = () => {
  const num = 100
  const test = "mfmgnfm"

  return (
    <>
      <img src={IMAGE} alt="react logo" />
      <h1>
        React template new build running - {process.env.NODE_ENV} -{' '}
        {process.env.name}
      </h1>
    </>
  )
}

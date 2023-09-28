import { Link } from 'react-router-dom'
import './Home.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (
    <>
      <h1>Hi, I'm Byron!</h1>
      <p>I'm a senior at NYU studying CS.</p>
      <p>In my free time, I like to play soccer, go for casual runs and read up on fashion.</p>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs

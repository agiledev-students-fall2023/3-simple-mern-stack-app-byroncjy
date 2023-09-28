import { useState, useEffect } from 'react'
import axios from 'axios'
import loadingIcon from './loading.gif'
import './Home.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
    const [text, setText] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState('')
    // const imageUrl = 'https://i.ibb.co/vx0PPpH/Photo-Niagara.jpg'
    const [imageUrl, setImageUrl] = useState('');
    /**
   * A nested function that fetches text from the back-end server.
   */
  const fetchText = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about-us`)
      .then(response => {
        // axios bundles up all response data in response.data property
        const text = response.data.text
        setText(text)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        // the response has been received, so remove the loading icon
        setLoaded(true)
      })
  }

  // set up loading data from server when the component first loads
  useEffect(() => {
    // fetch messages this once
    fetchText()

    // get image url from backend
    axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/image-url`)
      .then((response) => {
        setImageUrl(response.data.imageUrl);
      })
      .catch((error) => {
        console.error(error);
      });

    // set a timer to load data from server every n seconds
    const intervalHandle = setInterval(() => {
        fetchText()
    }, 5000)

    // return a function that will be called when this component unloads
    return e => {
      // clear the timer, so we don't still load messages when this component is not loaded anymore
      clearInterval(intervalHandle)
    }
  }, []) // putting a blank array as second argument will cause this function to run only once when component first loads

  return (
    <>
      <p>{text}</p>
      <img src={imageUrl} alt="Image"/>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs

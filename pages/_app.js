// import App from 'next/app'
import '../styles/global.css'
import TransitionLayout from '../components/transitionlayout'
import {useState} from 'react'

export default function App({ Component, pageProps }) {

    const [inventory,updateInventory] = useState([])
    const [playerLocation,updatePlayerLocation] = useState(0)

    return (
        <TransitionLayout>
    <Component {...pageProps} />
    </TransitionLayout>
    );
  }

  // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
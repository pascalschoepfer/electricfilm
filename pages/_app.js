import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {useEffect} from "react";
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])
  return <Component {...pageProps} />
}

export default MyApp

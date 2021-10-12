import React from 'react'
import "./styles/app.sass";
// 2. Extend the theme to include custom colors, fonts, etc

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
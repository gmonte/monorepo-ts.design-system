/* eslint-disable */
import { useEffect } from 'react'

const DoczProvider = ({ children }) => {
  useEffect(
    () => {
      if (process.env.NODE_ENV === 'development') {
        console.info(
          'You can apply react providers by editing the "src/gatsby-theme-docz/wrapper.js"'
        )
      }
    },
    []
  )

  // desabilita zoom no documentador em dispositivos móveis
  useEffect(
    () => {
      const meta = document.querySelector('meta[name="viewport"]')
      meta.setAttribute(
        'content',
        'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,shrink-to-fit=no'
      )
    },
    []
  )

  return children
}

export default DoczProvider

import React from 'react'

import Uploader from '../uploader/uploader'
import styles from './app.scss'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <div className={styles.normal}>HELLO WORLD!</div>
      </div>
    )
  }
}

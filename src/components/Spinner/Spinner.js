import React from 'react'
import styles from './Spinner.css'

export default function Spinner({
  fetching,
  putting,
  item,
}) {
  return (
    <div>
      <span className={styles.spinner}></span>
      {fetching ? <span>{`Fetching ${item}`}</span> : null}
      {putting ? <span>{`Creating ${item}`}</span> : null}
    </div>
  )
}

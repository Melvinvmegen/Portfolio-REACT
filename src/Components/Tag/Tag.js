import React from 'react'
import styles from  './Tag.module.css'

const tag = (props) => {
  return (
    <ul className={styles.TagList}>
      {props.tags.map( tag => {
        return <li key={tag.id} className={styles.Tag}>{tag.name}</li>
      })}
    </ul>
  )
}

export default tag;

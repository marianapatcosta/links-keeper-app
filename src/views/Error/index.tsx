import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'

export const Error = () => {
  return (
    <div className={styles['error']}>
      <div>
        <Link
          to='/'
          title='Go to home page'
          aria-label='Click to navigate to home page'
          className={`${styles['navigation-link']} navigation-link`}
        >
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <h1>404 - Page Not Found</h1>
        <p>This page does not exist.</p>
        <Link
          to='/'
          title='Go to home page'
          aria-label='Click to navigate to home page'
        >
         Go to Homepage
        </Link>
      </div>
    </div>
  )
}

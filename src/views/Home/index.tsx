import { LinksKeeper } from '@marianapatcosta/links-keeper'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'

export const Home = () => {
  return (
    <div className={styles['home']}>
      <LinksKeeper />
      <Link
        to='/about'
        title='Go to about page'
        aria-label='Click to navigate to about page'
        className='navigation-link'
      >
        <FontAwesomeIcon icon={faCircleInfo} />
      </Link>
    </div>
  )
}

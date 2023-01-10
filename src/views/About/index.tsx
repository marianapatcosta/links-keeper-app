import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'

const about = `
  LinksKeeper is an application to group, manage and display all your network links, e-mail and phone numbers in the same place.
  Thus, it is useful to manage a personal contact list offline, which allows you to have permanent access of the information.
`
const privacyPolicyLastUpdate = 'Last update: January 10, 2023\n'
const privacyPolicyBold =
  ' LinksKeeper does not upload, store, use or share any of your data.'
const privacyPolicyBody = `
 LinksKeeper neither collects any data nor implies any data collection by third parties or intermediaries. Any data collected when using LinksKeeper (username, avatar and links-related data) will be strictly stored in your browser. The data stored in the browser are containerized, i. e. stored with access restricted to this application, and cannot be accessed by other apps installed on the device.
 This Privacy Policy might be updated from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and update the 'Last updated' date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
 `

const contactUs =
  'If you have any questions about this Privacy Policy, you can contact us'

export const About = () => {
  return (
    <div className={styles['about']}>
      <div>
        <Link
          to='/'
          title='Go to home page'
          aria-label='Click to navigate to home page'
          className={`${styles['navigation-link']} navigation-link`}
        >
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <h1>About LinksKeeper</h1>
        <p>{about}</p>
        <h2>Privacy Policy</h2>
        <p>
          <span className='italic'>{privacyPolicyLastUpdate}</span>
          <span className='bold'>{privacyPolicyBold}</span>
          {privacyPolicyBody}
          <span>
            {contactUs}
            <a
              target='_blank'
              rel='nofollow noopener noreferrer'
              href='https://github.com/marianapatcosta'
            >{` here.`}</a>
          </span>
        </p>
      </div>
    </div>
  )
}

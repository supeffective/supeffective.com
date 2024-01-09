import { Close2Icon } from '@/lib/icons'
import { useState } from 'react'
import styles from './AppMainText.module.scss'

function AppMainText() {
  const [showArticle, setShowArticle] = useState(true)
  const handleDismissArticle = () => {
    setShowArticle(false)
  }
  const mainProps: React.HTMLAttributes<HTMLElement> = {}
  if (!showArticle) {
    mainProps.hidden = true
  }
  return (
    <main className={styles.info} {...mainProps}>
      <article>
        <button className={styles.dismissTrigger} title="Close" type="button" onClick={handleDismissArticle}>
          <Close2Icon />
        </button>
        Online Pokédex Tracker that saves your progress locally, without the need for an account.
        <p>
          Developed by the creators of{' '}
          <a href="https://supereffective.gg" target="_blank" rel="noreferrer">
            SuperEffective.gg
          </a>
          , a cloud-based version with a Living Dex Box Organizer and many other tools.
        </p>
      </article>
    </main>
  )
}

export default AppMainText

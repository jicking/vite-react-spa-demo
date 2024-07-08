import React from 'react'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('homePage.heading')}</h1>
        <p>{t('homePage.subtext')}</p>
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('fil')}>Filipino</button>
      </header>
    </div>
  )
}

export default Home

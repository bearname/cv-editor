import React from 'react'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store'
import MultilineInputField from '../Common/MultilineInputField'
import './index.css'

const AboutMe = () => {
  const { appProps, aboutMe } = useStore()
  const { t } = useTranslation()

  return (
    <div className='about-me item item_1'>
      <MultilineInputField
        className='about-me__description title title_2'
        value={aboutMe.description}
        onChange={(e) => aboutMe.setDescription(e.target.value)}
        placeholder={t('Tell about you')}
        readOnly={!appProps.editable}
      />
    </div>
  )
}

export default observer(AboutMe)

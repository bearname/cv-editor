import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { observer } from 'mobx-react-lite'
import InputField from '../Common/InputField'
import MultilineInputField from '../Common/MultilineInputField'
import Button from '../Common/Button'
import './index.css'

const Experience = ({ editable, experience, removeExperience }) => {
  const { t } = useTranslation()

  return (
    <div
      className='experience card card_1 item item_2'
      data-editable={editable}
    >
      <InputField
        className='experience__position title title_1'
        value={experience.position}
        onChange={(e) => experience.setPosition(e.target.value)}
        placeholder={t('Position')}
        readOnly={!editable}
      />
      <InputField
        className='experience__company title title_2'
        value={experience.company}
        onChange={(e) => experience.setCompany(e.target.value)}
        placeholder={t('Company')}
        readOnly={!editable}
      />
      <InputField
        className='experience__duration title title_5'
        value={experience.duration}
        onChange={(e) => experience.setDuration(e.target.value)}
        placeholder={t('Experience duration')}
        readOnly={!editable}
      />
      <MultilineInputField
        className='experience__description title title_2'
        value={experience.description}
        onChange={(e) => experience.setDescription(e.target.value)}
        placeholder={t('Experience description')}
        readOnly={!editable}
      />
      {editable && (
        <Button
          className='experience__remove-btn'
          title='x'
          onClick={() => removeExperience(experience.id)}
        />
      )}
    </div>
  )
}

Experience.propTypes = {
  editable: PropTypes.bool.isRequired,
  experience: PropTypes.shape({
    id: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    setPosition: PropTypes.func.isRequired,
    setCompany: PropTypes.func.isRequired,
    setDuration: PropTypes.func.isRequired,
    setDescription: PropTypes.func.isRequired,
  }),
  removeExperience: PropTypes.func.isRequired,
}

export default observer(Experience)

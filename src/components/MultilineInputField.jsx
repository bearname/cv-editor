import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const MultilineInputField = ({
  value,
  onChange,
  className = '',
  placeholder = '',
  readOnly = false,
  readOnlyPlaceholder = '',
}) => {
  const textAreaRef = useRef()
  const [textAreaHeight, setTextAreaHeight] = useState('auto')

  useEffect(() => {
    // FIXME: don't should remove the bottom padding in JS
    if (!readOnly) {
      setTextAreaHeight(`calc(${textAreaRef.current.scrollHeight}px - 0.3rem)`)
    } else {
      setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`)
    }
  }, [value, readOnly])

  const onChangeHandler = (e) => {
    setTextAreaHeight('auto')

    if (onChange) {
      onChange(e)
    }
  }

  let textAreaValue = value

  if (!value && readOnly) {
    if (readOnlyPlaceholder) {
      textAreaValue = readOnlyPlaceholder
    } else if (placeholder) {
      textAreaValue = placeholder
    }
  }

  return (
    <textarea
      ref={textAreaRef}
      className={className}
      value={textAreaValue}
      placeholder={placeholder}
      readOnly={readOnly}
      rows='1'
      style={{ height: textAreaHeight }}
      onChange={onChangeHandler}
    />
  )
}

MultilineInputField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  readOnlyPlaceholder: PropTypes.string,
}

export default MultilineInputField

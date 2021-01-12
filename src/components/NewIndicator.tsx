import React from 'react'

export const NewIndicator: React.FC = () => {
  return (
    <span>
      <span
        style={{
          height: '8px',
          width: '8px',
          marginRight: '4px',
          marginBottom: '2px',
          backgroundColor: 'rgb(68,126,90)',
          borderRadius: '50%',
          display: 'inline-block'
        }}
      >
        {' '}
      </span>
      <span>New</span>
    </span>
  )
}

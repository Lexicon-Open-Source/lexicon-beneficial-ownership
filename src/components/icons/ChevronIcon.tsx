import React from 'react'

export default function ChevronIcon ({ rotation }: { rotation: 'up' | 'left' | 'right' | 'down' }): React.ReactElement {
  const rotationValue = rotation === 'up' ? 'rotate-180' : rotation === 'left' ? 'rotate-90' : rotation === 'right' ? '-rotate-90' : ''
  return (
    <svg className={`transform ${rotationValue}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.41 8.57999L12 13.17L16.59 8.57999L18 9.99999L12 16L6 9.99999L7.41 8.57999Z" fill="black"/>
    </svg>
  )
}

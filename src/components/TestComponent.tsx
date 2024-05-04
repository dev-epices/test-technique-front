import React from 'react'
import { useUiDateContext } from '../Utils/UiContext'

export const TestComponent = () => {
  const selectionDate = useUiDateContext()

  return (
    <div>
      <p>TestComponent</p>
      <p>{selectionDate.toLocaleString('fr-FR', { dateStyle: 'full' })}</p>
    </div>
  )
}

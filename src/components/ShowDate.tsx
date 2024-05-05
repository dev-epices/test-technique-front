import React from 'react'
import { useUiDateContext } from '../Utils/UiContext'

export const ShowDate = () => {
  const selectionDate = useUiDateContext()

  return <p>{selectionDate.toLocaleString('fr-FR', { dateStyle: 'full' })}</p>
}

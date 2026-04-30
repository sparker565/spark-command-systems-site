import { Navigate } from 'react-router-dom'
import CommandLabPage from './CommandLabPage'

export default function CommandLabGate({ isUnlocked, onLock }) {
  if (!isUnlocked) {
    return <Navigate to="/command-lab-login" replace />
  }

  return <CommandLabPage onLock={onLock} />
}

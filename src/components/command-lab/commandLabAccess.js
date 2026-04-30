export const COMMAND_LAB_ACCESS_KEY = 'scs_command_lab_access'

export function hasCommandLabAccess() {
  try {
    return window.sessionStorage.getItem(COMMAND_LAB_ACCESS_KEY) === 'unlocked'
  } catch {
    return false
  }
}

export function storeCommandLabAccess() {
  try {
    window.sessionStorage.setItem(COMMAND_LAB_ACCESS_KEY, 'unlocked')
  } catch {
    // Component state keeps access for the current render session if storage is unavailable.
  }
}

export function clearCommandLabAccess() {
  try {
    window.sessionStorage.removeItem(COMMAND_LAB_ACCESS_KEY)
  } catch {
    // No-op when storage is unavailable.
  }
}

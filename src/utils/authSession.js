const AUTH_STORAGE_KEY = 'phuongtrang_auth'
export const AUTH_SESSION_CHANGE_EVENT = 'phuongtrang_auth_change'

function toDate(value) {
  if (!value) return null
  const parsed = new Date(value)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}

function emitAuthSessionChange() {
  if (typeof window === 'undefined') {
    return
  }

  window.dispatchEvent(new Event(AUTH_SESSION_CHANGE_EVENT))
}

export function saveAuthSession(data) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(data))
  emitAuthSessionChange()
}

export function getAuthSession() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY)
    if (!raw) return null

    const session = JSON.parse(raw)
    if (!session || typeof session !== 'object') {
      return null
    }

    return session
  } catch (error) {
    console.error('Error parsing auth session:', error)
    return null
  }
}

export function isAccessTokenExpired(session, skewSeconds = 15) {
  const expiresAt = toDate(session?.expiresAt)
  if (!expiresAt) {
    return false
  }

  const now = Date.now()
  return now >= (expiresAt.getTime() - skewSeconds * 1000)
}

export function clearAuthSession() {
  localStorage.removeItem(AUTH_STORAGE_KEY)
  emitAuthSessionChange()
}




const AUTH_STORAGE_KEY = 'phuongtrang_auth'
export const AUTH_SESSION_CHANGE_EVENT = 'phuongtrang_auth_change'

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
    
    // ✅ Check xem token có hết hạn không
    if (session?.expiresAt) {
      const expiresAt = new Date(session.expiresAt)
      const now = new Date()
      
      if (now >= expiresAt) {
        console.warn('Token has expired')
        // Token hết hạn, xóa session
        clearAuthSession()
        return null
      }
    }
    
    return session
  } catch (error) {
    console.error('Error parsing auth session:', error)
    return null
  }
}

export function clearAuthSession() {
  localStorage.removeItem(AUTH_STORAGE_KEY)
  emitAuthSessionChange()
}




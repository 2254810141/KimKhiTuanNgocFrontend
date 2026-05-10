import { useEffect, useCallback, useState } from 'react'
import { useSignalR } from './useSignalR'
import { API_BASE_URL } from '../utils/apiBaseUrl'
const HUB_URL = `${API_BASE_URL.replace(/\/$/, '')}/hubs/order-notification`

export function useOrderNotifications(onOrderCreated) {
  const [notificationCount, setNotificationCount] = useState(0)
  const { on, off, isConnected } = useSignalR(HUB_URL)

  const handleNewOrderCreated = useCallback(
    (notification) => {
      console.log('New order notification received:', notification)
      setNotificationCount((prev) => prev + 1)

      if (onOrderCreated) {
        onOrderCreated(notification)
      }
    },
    [onOrderCreated]
  )

  useEffect(() => {
    if (isConnected) {
      on('NewOrderCreated', handleNewOrderCreated)

      return () => {
        off('NewOrderCreated', handleNewOrderCreated)
      }
    }
  }, [isConnected, on, off, handleNewOrderCreated])

  return {
    isConnected,
    notificationCount,
  }
}



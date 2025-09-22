import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop({ behavior = 'auto' }) {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top on pathname change
    window.scrollTo({ top: 0, left: 0, behavior })
  }, [location.pathname, behavior])

  return null
}

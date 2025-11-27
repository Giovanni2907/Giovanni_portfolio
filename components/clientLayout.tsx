"use client"

import { useEffect, useState } from "react"
import SplashScreen from "./splash_screen"

export default function ClientLayout({ children }: { children: React.ReactNode }) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [loading])

  return (
    <>
      {loading && <SplashScreen onFinish={() => setLoading(false)} />}
      {!loading && children}
    </>
  )
}

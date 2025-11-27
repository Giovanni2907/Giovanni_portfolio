"use client"

import Lottie from "lottie-react"
import splashAnimation from "@/public/lotties/loading.json"

interface SplashScreenProps {
    onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden flex items-center justify-center bg-white">
      
      <Lottie 
        animationData={splashAnimation}
        loop={false}
        onComplete={onFinish}
        className="w-100 h-100"
      />

    </div>
  )
}

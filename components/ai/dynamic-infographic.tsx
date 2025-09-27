// components/ai/dynamic-infographic.tsx
"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface InfographicProps {
  missionPoints: any[]
  visionPoints: any[]
  t: (key: string) => string
}

export function DynamicInfographic({ missionPoints, visionPoints, t }: InfographicProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="bg-gradient-to-r from-amber-100 to-orange-100">
        <CardHeader>
          <CardTitle className="text-amber-900">{t('infographic.mission_title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {missionPoints.map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-3 h-3 mt-1.5 rounded-full bg-amber-500 mr-3"></div>
                <div>
                  <h4 className="font-medium text-amber-800">{t(`mission.${point.title}`)}</h4>
                  <p className="text-sm text-amber-700">{t(`mission.${point.description}`)}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-r from-blue-100 to-cyan-100">
        <CardHeader>
          <CardTitle className="text-blue-900">{t('infographic.vision_title')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {visionPoints.map((point, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-3 h-3  mt-1.5 rounded-full bg-blue-500 mr-3"></div>
                <div>
                  <h4 className="font-medium text-blue-800">{t(`vision.${point.title}`)}</h4>
                  <p className="text-sm text-blue-700">{t(`vision.${point.description}`)}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
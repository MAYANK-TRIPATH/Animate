'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'

// Type definitions
interface FileItem {
  name: string
  icon: string
  removable?: boolean
}

interface AppItem {
  name: string
}

interface SettingItem {
  name: string
  value: number
}

interface MediaContent {
  type: 'image' | 'files' | 'apps' | 'conversation' | 'settings'
  content: string | FileItem[] | AppItem[] | SettingItem[]
}

interface Step {
  id: number
  title: string
  description: string
  badge: string
  badgeIcon: string
  step: string
  media: MediaContent
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Consultation',
    description: 'Discuss your business needs with our experts.',
    badge: 'Your Call is Booked',
    badgeIcon: '📅',
    step: '01',
    media: {
      type: 'image',
      content: '/Consult.webp'
    }
  },
  {
    id: 2,
    title: 'Customization',
    description: 'We tailor the AI agent to your specifications.',
    badge: 'Michael',
    badgeIcon: '👤',
    step: '02',
    media: {
      type: 'files',
      content: [
        { name: 'Patient Information.xls', icon: '📊', removable: true },
        { name: 'Voice & Tone Guide.pdf', icon: '📄', removable: true },
        { name: 'Plan Directory.mp3', icon: '🎵', removable: true }
      ]
    }
  },
  {
    id: 3,
    title: 'Integration',
    description: 'Seamless setup and integration into your existing systems.',
    badge: 'Action',
    badgeIcon: '⚙️',
    step: '03',
    media: {
      type: 'image',
      content: ''
    }
  },
  {
    id: 4,
    title: 'Optimization',
    description: 'Continuous monitoring and adjustment to ensure peak performance.',
    badge: '',
    badgeIcon: '',
    step: '04',
    media: {
      type: 'conversation',
      content: 'I saw on your website you\'re offering [Discount.Name] off to new customers, how can I redeem that?'
    }
  },
  {
    id: 5,
    title: 'Empowerment',
    description: 'Receive the training and materials needed to independently create and manage your AI agents, allowing for quick adaptations and improvements as your business evolves.',
    badge: 'Tessa & Gabriel',
    badgeIcon: '👥',
    step: '05',
    media: {
      type: 'settings',
      content: [
        { name: 'Assertiveness', value: 75 },
        { name: 'Humor Level', value: 25 }
      ]
    }
  },
]

export default function ProcessFlow() {
  const renderMedia = (media: MediaContent) => {
    switch (media.type) {
      case 'files':
        return (
          <div className="bg-white rounded-lg p-4 shadow-sm border">
            {(media.content as FileItem[]).map((file: FileItem, index: number) => (
              <div key={index} className="flex items-center justify-between mb-2 last:mb-0">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{file.icon}</span>
                  <span className="text-sm text-gray-700">{file.name}</span>
                </div>
                {file.removable && (
                  <button className="text-gray-400 hover:text-gray-600 text-sm">×</button>
                )}
              </div>
            ))}
          </div>
        )
      
      case 'apps':
        return (
          <div className="flex items-center gap-2">
            {(media.content as AppItem[]).map((app: AppItem, index: number) => (
              <div key={index} className="flex items-center gap-1">
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                  {app.name}
                </div>
                {index < (media.content as AppItem[]).length - 1 && (
                  <span className="text-green-500 text-sm">+</span>
                )}
                {index === (media.content as AppItem[]).length - 1 && (
                  <span className="text-green-500 text-sm">✓</span>
                )}
              </div>
            ))}
          </div>
        )
      
      case 'conversation':
        return (
          <div className="bg-white rounded-lg p-3 shadow-sm border max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-700">{media.content as string}</p>
          </div>
        )
      
      case 'settings':
        return (
          <div className="bg-white rounded-lg p-3 shadow-sm border">
            {(media.content as SettingItem[]).map((setting: SettingItem, index: number) => (
              <div key={index} className="mb-2 last:mb-0">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                  <span>{setting.name}</span>
                  <span>{setting.value}%</span>
                </div>
                <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${setting.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )
      
      default:
        return (
          <div className="w-32 h-20 bg-gray-100 rounded-lg shadow-inner flex items-center justify-center">
            <span className="text-gray-400 text-sm">Media</span>
          </div>
        )
    }
  }

  return (
    <div className="relative px-4 py-16 sm:px-6 lg:px-20 space-y-32 overflow-x-hidden bg-gray-50">
      {/* SVG Edges - Smooth */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {steps.map((_, index) => {
          if (index === steps.length - 1) return null
          
          const y1 = index * 320 + 160
          const y2 = (index + 1) * 320 + 160
          const centerX = 600 // Fixed center value instead of window.innerWidth
          const offsetX = 200
          
          // Create smooth zigzag path
          const x1 = centerX - offsetX
          const x2 = centerX + offsetX
          
          const path = index % 2 === 0 
            ? `M${x1},${y1} C${x1 + 100},${y1} ${x2 - 100},${y2} ${x2},${y2}`
            : `M${x2},${y1} C${x2 - 100},${y1} ${x1 + 100},${y2} ${x1},${y2}`
          
          return (
            <path
              key={index}
              d={path}
              stroke="#d1d5db"
              fill="transparent"
              strokeWidth="2"
            />
          )
        })}
      </svg>

      {/* Step Cards */}
      {steps.map((step, index) => {
        const StepComponent = () => {
          const ref = React.useRef(null)
          const isInView = useInView(ref, { once: true, margin: "-50px" })

          return (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative max-w-6xl mx-auto"
            >
              <div
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <motion.div 
                  className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
                >
                  {step.badge && (
                    <motion.div 
                      className={`mb-3 inline-flex items-center gap-2 rounded-lg bg-blue-100 text-blue-800 px-3 py-1 text-sm font-medium ${
                        index % 2 === 0 ? 'justify-start' : 'justify-end'
                      }`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    >
                      <span>{step.badgeIcon}</span>
                      <span>{step.badge}</span>
                    </motion.div>
                  )}
                  <motion.h2 
                    className="text-2xl font-bold text-gray-900 mb-3"
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  >
                    {step.title}{' '}
                    <span className="text-green-600 text-lg">{step.step}</span>
                  </motion.h2>
                  <motion.p 
                    className="text-gray-600 text-base leading-relaxed"
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>

                {/* Media - Positioned right next to content */}
                <motion.div 
                  className="flex-shrink-0"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                >
                  {renderMedia(step.media)}
                </motion.div>
              </div>
            </motion.div>
          )
        }

        return <StepComponent key={step.id} />
      })}
    </div>
  )
}

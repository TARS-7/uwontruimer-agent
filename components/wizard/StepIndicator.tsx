'use client'

interface Group {
  label: string
  steps: number[]
}

const GROUPS: Group[] = [
  { label: 'Woning',  steps: [1, 2, 3, 4] },
  { label: "Foto's",  steps: [5] },
  { label: 'Offerte', steps: [6, 7] },
]

interface StepIndicatorProps {
  currentStep: number
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full">
      <div className="flex items-center">
        {GROUPS.map((group, index) => {
          const isCompleted = group.steps.every((s) => currentStep > s)
          const isActive    = group.steps.includes(currentStep)

          return (
            <div key={group.label} className="flex items-center flex-1">
              {/* Node */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`
                    flex h-9 w-9 items-center justify-center rounded-full
                    text-sm font-semibold transition-all duration-200
                    ${isCompleted ? 'bg-blue-600 text-white' : ''}
                    ${isActive    ? 'bg-blue-600 text-white ring-4 ring-blue-100' : ''}
                    ${!isActive && !isCompleted ? 'bg-slate-100 text-slate-400' : ''}
                  `}
                >
                  {isCompleted ? (
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </div>
                <span
                  className={`
                    text-xs font-medium whitespace-nowrap transition-colors duration-200
                    ${isActive    ? 'text-blue-700' : ''}
                    ${isCompleted ? 'text-slate-500' : ''}
                    ${!isActive && !isCompleted ? 'text-slate-400' : ''}
                  `}
                >
                  {group.label}
                </span>
              </div>

              {/* Connector */}
              {index < GROUPS.length - 1 && (
                <div className="flex-1 mx-3 mb-5">
                  <div
                    className={`h-px w-full transition-colors duration-300
                      ${isCompleted ? 'bg-blue-600' : 'bg-slate-200'}
                    `}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

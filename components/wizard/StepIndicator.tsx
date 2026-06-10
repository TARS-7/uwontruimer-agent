'use client'

interface Props {
  currentStep: number
  totalSteps?: number
}

export default function StepIndicator({ currentStep, totalSteps = 5 }: Props) {
  // Endowed progress: start at ~15% on step 1, reach 100% at final step
  const progress = Math.min(
    100,
    Math.round(15 + ((currentStep - 1) / (totalSteps - 1)) * 85),
  )

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500">
          Stap {currentStep} van {totalSteps}
        </span>
        <span className="text-xs font-medium text-slate-400">{progress}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

'use client'

import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className = '', id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-slate-700"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            h-10 w-full rounded-xl border bg-white px-3 text-sm text-slate-900
            placeholder:text-slate-400
            transition-colors duration-150
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500
            ${error ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 hover:border-slate-300'}
            ${className}
          `}
          {...props}
        />
        {hint && !error && <p className="text-xs text-slate-500">{hint}</p>}
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input

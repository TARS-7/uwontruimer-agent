'use client'

import { useState } from 'react'
import StepIndicator from '@/components/wizard/StepIndicator'
import StepOntruimingType, { type StepOntruimingTypeResult } from '@/components/wizard/StepOntruimingType'
import StepWoning, { type StepWoningResult } from '@/components/wizard/StepWoning'
import StepFotosEnWaardevol, { type StepFotosEnWaardevollResult } from '@/components/wizard/StepFotosEnWaardevol'
import StepAdresContact, { type StepAdresContactResult } from '@/components/wizard/StepAdresContact'
import Step6Offerte from '@/components/wizard/Step6Offerte'
import type { WizardState } from '@/lib/types'
import { initialWizardState } from '@/lib/types'

export default function Page() {
  const [state, setState] = useState<WizardState>(initialWizardState)

  function handleStep1Complete(result: StepOntruimingTypeResult) {
    setState((s) => ({ ...s, ontruimingType: result.ontruimingType, step: 2 }))
  }

  function handleStep2Complete(result: StepWoningResult) {
    setState((s) => ({ ...s, woningType: result.woningType, woningGrootte: result.woningGrootte, step: 3 }))
  }

  function handleStep3Complete(result: StepFotosEnWaardevollResult) {
    setState((s) => ({
      ...s,
      fotos: result.fotos,
      fotoUrls: result.fotoUrls,
      step: 4,
    }))
  }

  function handleStep4Complete(result: StepAdresContactResult) {
    setState((s) => ({
      ...s,
      address:  result.address,
      naam:     result.naam,
      email:    result.email,
      telefoon: result.telefoon,
      step: 5,
    }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <a href="https://uwontruimer.nl" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="font-semibold text-slate-900">Uw Ontruimer</span>
          </a>
          <a
            href="tel:0853035894"
            className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
          >
            085-303 58 94
          </a>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 py-8 px-4 sm:px-6">
        <div className="mx-auto max-w-3xl flex flex-col gap-6">

          <StepIndicator currentStep={state.step} />

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
            {state.step === 1 && (
              <StepOntruimingType
                initialData={{ ontruimingType: state.ontruimingType }}
                onComplete={handleStep1Complete}
              />
            )}

            {state.step === 2 && (
              <StepWoning
                initialData={{ woningType: state.woningType, woningGrootte: state.woningGrootte }}
                onComplete={handleStep2Complete}
                onBack={() => setState((s) => ({ ...s, step: 1 }))}
              />
            )}

            {state.step === 3 && (
              <StepFotosEnWaardevol
                initialData={{ fotos: state.fotos }}
                onComplete={handleStep3Complete}
                onBack={() => setState((s) => ({ ...s, step: 2 }))}
              />
            )}

            {state.step === 4 && (
              <StepAdresContact
                initialData={{
                  address:  state.address,
                  naam:     state.naam,
                  email:    state.email,
                  telefoon: state.telefoon,
                }}
                onComplete={handleStep4Complete}
                onBack={() => setState((s) => ({ ...s, step: 3 }))}
              />
            )}

            {state.step === 5 && state.address && (
              <Step6Offerte
                data={{
                  address:       state.address,
                  ontruimingType: state.ontruimingType,
                  woningType:    state.woningType,
                  woningGrootte: state.woningGrootte,
                  naam:          state.naam,
                  email:         state.email,
                  telefoon:      state.telefoon,
                  fotoUrls:      state.fotoUrls,
                }}
                initialOfferte={state.offerte}
                onBack={() => setState((s) => ({ ...s, step: 4 }))}
              />
            )}
          </div>

          {state.step === 1 && (
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <TrustItem icon="shield" label="Veilig en vertrouwelijk" />
              <TrustItem icon="clock" label="Prijsindicatie binnen 2 minuten" />
              <TrustItem icon="star" label="Gratis en vrijblijvend" />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6">
          <p className="text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Uw Ontruimer ·{' '}
            <a href="https://uwontruimer.nl" className="hover:text-slate-600 transition-colors">
              uwontruimer.nl
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

function TrustItem({ icon, label }: { icon: 'shield' | 'clock' | 'star'; label: string }) {
  const icons = {
    shield: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    clock:  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
    star:   <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
  }
  return (
    <div className="flex items-center gap-1.5">
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {icons[icon]}
      </svg>
      <span>{label}</span>
    </div>
  )
}

import { useState, type FormEvent } from 'react'
import { supabase } from './lib/supabase'
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

const initialForm: FormData = {
  name: '',
  email: '',
  company: '',
  message: '',
}

export default function App() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string>('')

  function updateField(field: keyof FormData, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    const { error: insertError } = await supabase.from('leads').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      company: form.company.trim() || null,
      message: form.message.trim() || null,
    })

    if (insertError) {
      setStatus('error')
      setError('Something went wrong. Please try again.')
      return
    }

    setStatus('success')
    setForm(initialForm)
  }

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav__brand">
          <Sparkles size={22} className="nav__logo" />
          <span>Nimbus</span>
        </div>
        <div className="nav__links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero__content">
          <div className="hero__badge">
            <Zap size={14} />
            <span>New: AI-powered lead scoring</span>
          </div>
          <h1 className="hero__title">
            Turn visitors into <span className="hero__title-accent">loyal customers</span>
          </h1>
          <p className="hero__subtitle">
            Nimbus gives your team everything needed to capture, qualify, and convert leads —
            all in one beautifully simple platform. Start your free trial today.
          </p>

          <ul className="hero__benefits">
            <li>
              <Check size={18} />
              No credit card required
            </li>
            <li>
              <Check size={18} />
              Set up in under 5 minutes
            </li>
            <li>
              <Check size={18} />
              Cancel anytime
            </li>
          </ul>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">12k+</span>
              <span className="hero__stat-label">Businesses</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">4.9</span>
              <span className="hero__stat-label">Avg. rating</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">3x</span>
              <span className="hero__stat-label">More conversions</span>
            </div>
          </div>
        </div>

        <div className="hero__form-wrapper" id="contact">
          {status === 'success' ? (
            <div className="form-success">
              <div className="form-success__icon">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="form-success__title">You're all set!</h2>
              <p className="form-success__text">
                Thanks for your interest — we'll reach out within one business day with your
                personalized demo.
              </p>
              <button
                className="btn btn--ghost"
                onClick={() => setStatus('idle')}
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form className="lead-form" onSubmit={handleSubmit}>
              <div className="lead-form__header">
                <h2 className="lead-form__title">Get your free demo</h2>
                <p className="lead-form__subtitle">
                  Join thousands of teams growing with Nimbus.
                </p>
              </div>

              <div className="field">
                <label htmlFor="name" className="field__label">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  className="field__input"
                  placeholder="Jane Smith"
                  required
                  value={form.name}
                  onChange={e => updateField('name', e.target.value)}
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="field">
                <label htmlFor="email" className="field__label">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  className="field__input"
                  placeholder="jane@company.com"
                  required
                  value={form.email}
                  onChange={e => updateField('email', e.target.value)}
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="field">
                <label htmlFor="company" className="field__label">
                  Company <span className="field__optional">(optional)</span>
                </label>
                <input
                  id="company"
                  type="text"
                  className="field__input"
                  placeholder="Acme Inc."
                  value={form.company}
                  onChange={e => updateField('company', e.target.value)}
                  disabled={status === 'submitting'}
                />
              </div>

              <div className="field">
                <label htmlFor="message" className="field__label">
                  What are you looking for? <span className="field__optional">(optional)</span>
                </label>
                <textarea
                  id="message"
                  className="field__input field__input--textarea"
                  placeholder="Tell us about your team's needs..."
                  rows={3}
                  value={form.message}
                  onChange={e => updateField('message', e.target.value)}
                  disabled={status === 'submitting'}
                />
              </div>

              {status === 'error' && (
                <p className="form-error" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="btn btn--primary"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 size={20} className="spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get my free demo
                    <ArrowRight size={20} />
                  </>
                )}
              </button>

              <p className="form-footer">
                <ShieldCheck size={14} />
                We respect your privacy. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

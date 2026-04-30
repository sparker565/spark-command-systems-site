import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignalBackground from './SignalBackground'

export default function CommandLabLogin({ isUnlocked, onUnlock }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (isUnlocked) {
      navigate('/command-lab', { replace: true })
    }
  }, [isUnlocked, navigate])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (username.trim().toLowerCase() === 'spark' && password === 'Tyson') {
      setError('')
      onUnlock()
      navigate('/command-lab', { replace: true })
      return
    }

    setError('Access denied. Check username and password.')
  }

  return (
    <div className="relative flex min-h-screen items-start justify-center overflow-hidden bg-[#020407] px-4 py-8 text-white antialiased sm:px-6 sm:py-10 lg:items-center lg:px-8 lg:py-6">
      <SignalBackground />
      <main className="relative z-10 flex min-h-[calc(100vh-4rem)] w-full items-start justify-center pt-6 sm:pt-8 lg:min-h-0 lg:pt-0 lg:-translate-y-[6vh]">
        <section className="relative w-full max-w-md overflow-hidden border border-amber-200/25 bg-[#060d16]/90 p-6 shadow-[0_34px_130px_rgba(0,0,0,0.62),0_0_92px_rgba(245,158,11,0.14)] backdrop-blur-xl sm:p-8">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/75 to-transparent" />
          <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-amber-300/10 blur-3xl" />
          <div className="mb-7 inline-flex border border-cyan-200/20 bg-cyan-200/[0.06] px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
            Private Preview
          </div>
          <h1 className="relative text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Spark Command Lab</h1>
          <p className="relative mt-4 text-base leading-7 text-slate-200">
            Private ecosystem for testing product ideas, command systems and next-level web experiences.
          </p>
          <p className="relative mt-4 border-l border-amber-200/35 pl-4 text-sm leading-7 text-slate-400">
            Preview experimental tools, product prototypes and advanced website concepts before they move into production.
          </p>
          <p className="relative mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/75">
            Authorized preview access only.
          </p>

          <form onSubmit={handleSubmit} className="relative mt-8 space-y-6">
            <label className="block">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Username</span>
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="w-full border border-white/10 bg-black/35 px-4 py-4 text-base text-white outline-none transition placeholder:text-slate-500 hover:border-white/18 focus:border-amber-200/50 focus:shadow-[0_0_34px_rgba(245,158,11,0.15)]"
                autoComplete="username"
                placeholder="Username"
              />
            </label>
            <label className="block">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Password</span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full border border-white/10 bg-black/35 px-4 py-4 text-base text-white outline-none transition placeholder:text-slate-500 hover:border-white/18 focus:border-amber-200/50 focus:shadow-[0_0_34px_rgba(245,158,11,0.15)]"
                autoComplete="current-password"
                placeholder="Password"
              />
            </label>

            {error ? (
              <div className="border border-amber-200/25 bg-amber-200/[0.07] p-3 text-sm leading-6 text-amber-50">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center bg-amber-300 px-6 text-base font-bold text-black shadow-[0_0_36px_rgba(245,158,11,0.28)] transition hover:bg-amber-200 hover:shadow-[0_0_50px_rgba(245,158,11,0.38)] focus:outline-none focus:ring-2 focus:ring-amber-100/70 focus:ring-offset-2 focus:ring-offset-[#020407]"
            >
              Enter Lab
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}

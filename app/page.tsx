export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Prompt Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track AI Prompt Costs<br />
          <span className="text-[#58a6ff]">Per Word Generated</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Connect your OpenAI or Anthropic API key, submit prompts, and instantly see cost-per-word analytics. Stop wasting budget on inefficient prompts.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $29/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Stats bar */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { value: '10x', label: 'Cost visibility' },
          { value: '$0.001', label: 'Avg cost/word tracked' },
          { value: '2 APIs', label: 'OpenAI & Anthropic' },
        ].map((s) => (
          <div key={s.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
            <div className="text-[#8b949e] text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$29</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited prompt submissions',
              'OpenAI & Anthropic integration',
              'Real-time cost-per-word analytics',
              'Historical usage dashboard',
              'CSV export of all data',
              'Email support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which AI providers are supported?',
              a: 'We currently support OpenAI (GPT-3.5, GPT-4, GPT-4o) and Anthropic (Claude 3 family). More providers coming soon.',
            },
            {
              q: 'Is my API key stored securely?',
              a: 'Your API keys are encrypted at rest and never logged. You can revoke access at any time from your dashboard.',
            },
            {
              q: 'How is cost-per-word calculated?',
              a: 'We divide the total token cost of each API call by the number of words in the output, giving you a precise efficiency metric per prompt.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Prompt Cost Tracker. All rights reserved.
      </footer>
    </main>
  )
}

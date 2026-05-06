import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Cost Per Word Tracker — AI Efficiency Analytics',
  description: 'Monitor cost efficiency of AI prompts by measuring cost per useful word output. Connect OpenAI or Anthropic APIs and get real-time analytics.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="84c50330-6e98-406c-830d-789968df588c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}

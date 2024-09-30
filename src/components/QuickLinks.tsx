import Link from 'next/link'
import { QuickLink } from '@/types'

const links: QuickLink[] = [
  { emoji: '📰', text: 'Monthly Newsletter (My Story)', href: '#' },
  { emoji: '🧠', text: 'Typing Mind (Better UI for ChatGPT)', href: '#' },
  { emoji: '🧰', text: 'Developer Toolbox (macOS app)', href: '#' },
  { emoji: '❤️', text: 'Find me on Twitter', href: '#' },
  { emoji: '🤖', text: 'Chat with my AI clone', href: '#' },
]

export default function QuickLinks() {
  return (
    <div className="space-y-2 mb-8">
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="block bg-gray-800 rounded-md p-3 hover:bg-gray-700 transition">
          {link.emoji} {link.text}
        </Link>
      ))}
    </div>
  )
}

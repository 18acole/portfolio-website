import { Youtube, Twitter, Instagram, Linkedin } from 'lucide-react'

const socialMedia = [
  { Icon: Twitter, name: 'Twitter' },
  { Icon: Instagram, name: 'Instagram' },
  { Icon: Youtube, name: 'YouTube' },
  { Icon: Linkedin, name: 'LinkedIn' },
]

const writings = [
  { emoji: '📰', name: 'Newsletter' },
  { emoji: '📝', name: 'Public Notes' },
]

const otherPlaces = [
  { emoji: '🏹', name: 'Product Hunt' },
  { emoji: '🛣️', name: 'Gumroad' },
  { emoji: '🚀', name: 'Indie Hackers' },
  { emoji: '💰', name: 'PayPal' },
]

export default function SocialMedia() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Social Media</h2>
      <ul className="space-y-2">
        {socialMedia.map((item, index) => (
          <li key={index} className="flex items-center">
            <item.Icon className="mr-2" size={20} />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">Writings</h2>
      <ul className="space-y-2">
        {writings.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">{item.emoji}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">Other Places</h2>
      <ul className="space-y-2">
        {otherPlaces.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">{item.emoji}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

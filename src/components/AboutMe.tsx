const aboutItems = [
  { emoji: '🎂', text: '30 years old' },
  { emoji: '🇻🇳', text: 'From Vietnam' },
  { emoji: '👨‍💻', text: 'Software Developer' },
  { emoji: '🚀', text: 'Full-time Indie Hacker' },
  { emoji: '🐱', text: 'Cats > Dogs' },
]

export default function AboutMe() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">About Me</h2>
      <ul className="space-y-2">
        {aboutItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">{item.emoji}</span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

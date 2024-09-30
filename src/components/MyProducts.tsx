import { Github } from 'lucide-react'

const products = [
  { emoji: '🧠', name: 'TypingMind.com' },
  { emoji: '🧰', name: 'DevUtils.app' },
  { emoji: '🔮', name: 'BlackMagic.so' },
  { emoji: '📸', name: 'Xnapper' },
]

export default function MyProducts() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Products</h2>
      <ul className="space-y-2">
        {products.map((product, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">{product.emoji}</span>
            <span>{product.name}</span>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4">Code</h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <Github className="mr-2" size={20} />
          <span>GitHub</span>
        </li>
        <li className="flex items-center">
          <span className="mr-2">🎉</span>
          <span>Fun Stuff</span>
        </li>
      </ul>
    </div>
  )
}

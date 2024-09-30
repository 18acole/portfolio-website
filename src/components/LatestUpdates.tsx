import { Update } from '@/types'

const updates: Update[] = [
  {
    tag: "Tony Dinh's Newsletter",
    title: "Another 6-figure exit, and the future",
    description: "I sold Xnapper, here is a quick update about the acquisition details"
  },
  // Add more updates here
]

export default function LatestUpdates() {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4">Latest Updates 👇</h2>
      <div className="space-y-4">
        {updates.map((update, index) => (
          <div key={index} className="bg-gray-800 rounded-md p-4">
            <div className="bg-blue-500 text-white text-xs rounded px-2 py-1 inline-block mb-2">
              {update.tag}
            </div>
            <h3 className="font-bold">{update.title}</h3>
            <p className="text-sm text-gray-400">{update.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

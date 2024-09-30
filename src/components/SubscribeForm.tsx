export default function SubscribeForm() {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-bold mb-4">Get notified when I release new stuff! 👇</h2>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Your email"
          className="flex-grow bg-gray-800 rounded-md p-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition"
        >
          Subscribe
        </button>
      </form>
      <p className="text-sm text-gray-400 mt-2">
        I write once a month. 💌 (See previous issues)
      </p>
    </div>
  )
}

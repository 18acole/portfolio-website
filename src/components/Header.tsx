import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex flex-col items-center mb-8">
      <Image
        src="/profile-pic.jpg"
        alt="Tony Dinh"
        width={120}
        height={120}
        className="rounded-full border-4 border-yellow-400"
      />
      <h1 className="text-3xl font-bold mt-4">Tony Dinh</h1>
      <p className="text-gray-400">Welcome to my corner of the internet!</p>
    </header>
  )
}

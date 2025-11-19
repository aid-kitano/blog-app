import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-black p-4 text-white">
      <Link href="/">
        <h1 className="text-2xl font-bold">Blog App</h1>
      </Link>
    </header>
  )
}

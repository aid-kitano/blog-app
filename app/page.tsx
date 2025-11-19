import { Button } from '@/components/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/about">About</Link>
      <Button>ボタンですよ</Button>
    </div>
  )
}

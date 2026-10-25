import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-gray-600">This page doesn't exist.</p>
      <Link to="/" className="underline">Back to home</Link>
    </main>
  )
}
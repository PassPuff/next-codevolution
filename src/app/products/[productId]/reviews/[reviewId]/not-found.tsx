import Link from 'next/link'

const NotFound = async () => {
  return (
    <div>
      <h2>Review not found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}

export default NotFound

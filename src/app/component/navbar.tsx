import Link from "next/link"


export default function NavBar () {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/about/us">About Us</Link>
            <Link href="/about/someone">About Someone</Link>
            <Link href="/listofpost">Post</Link>
        </div>
    )
}
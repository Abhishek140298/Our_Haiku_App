
import Link from 'next/link'
export default function NavBar(){
   return ( <div className="navbar text-black bg-white-100 shadow-sm">
    <div className="flex-1">
      <Link href='/' className="btn btn-ghost text-xl">Our Haiku App</Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link href='/login' className='btn btn-ghost text-xl'>Login</Link></li>
       
      </ul>
    </div>
  </div>)
}
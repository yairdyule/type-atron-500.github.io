import {Link} from 'react-router-dom'
import {FaPen} from 'react-icons/fa'
import {BsKeyboard} from 'react-icons/bs'

export default function Nav() {
  return (
    <nav className="flex flex-row justify-center gap-6 pb-6">
      <ul>
        <li className="text-emerald-200 text-3xl">
          <Link to="/type"><BsKeyboard/></Link>
        </li>
      </ul>
      <ul>
        <li className="text-emerald-200 text-lg pt-1.5">
          <Link to="/submitText"><FaPen/></Link>
        </li>
      </ul>
    </nav>
  )
}

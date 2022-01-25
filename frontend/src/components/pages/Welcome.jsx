import {Link} from 'react-router-dom'

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-slate-200">
      <h1 className="text-slate-200 text-lg">hi, and welcome to typing</h1>
      <h2 className="">
        so far, you can <Link className="text-emerald-200" to="/type">type</Link>, and you can <Link className="text-emerald-200" to="submitText">add text</Link>
      </h2>
    </div>
  )
}

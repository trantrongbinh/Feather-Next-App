import Link from 'next/link'
import { connect } from 'react-redux'

function Page ({
  linkTo,
  NavigateTo,
  title
}) {
  return (
    <div>
      <h1>{title}</h1>
      
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
    </div>
  )
}

export default connect(state => state)(Page)

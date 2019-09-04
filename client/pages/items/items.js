import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import List from '../../components/items/List'

import { fetchItems } from '../../modules/items/actions'

class Items extends React.Component {
  static async getInitialProps (ctx) {
    const { store } = ctx;

    if (store.getState().items.items.length === 0) {
      store.dispatch(fetchItems())

    }

    return { namespacesRequired: ['common'] }
  }

  // componentDidMount() {
  //   this.props.getItems()
  // }

  render() {
    return (
      <div>
        <Link href="/">
          <a>Navigate: Index page</a>
        </Link>
        <List items={this.props.items} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items
  }
}

// const mapDispatchToProps = (dispatch, props) => {
//   return {
//     getItems: () => {
//       dispatch(fetchItems());
//     }
//   }
// }

export default connect(mapStateToProps)(Items);

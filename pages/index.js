import React from 'react'
import { connect } from 'react-redux'



function index (props) {
  return (
    <>
      <div>
        Hi
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(index)

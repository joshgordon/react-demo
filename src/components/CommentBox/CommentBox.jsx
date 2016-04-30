import React from 'react'

require('./CommentBox.less');

class CommentBox extends React.Component {
  constructor (props) {
    super (props)

  }

  render () {
    return (
      <div className="commentBox">
        <p>"Hello, world! I am a CommentBox."</p>
      </div>
    )
  }
}

export default CommentBox

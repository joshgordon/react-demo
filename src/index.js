import React from 'react';
import ReactDOM from 'react-dom';

import { CommentBox } from './components/CommentBox';

require('./style.css');

ReactDOM.render (
  <CommentBox/>,
  document.getElementById('react-mount')
);

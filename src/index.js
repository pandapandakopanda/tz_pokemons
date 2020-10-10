import * as React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'

const container = document.createElement('div')
container.id = 'root'
document.body.appendChild(container)

ReactDOM.render(
      <Router><App /></Router>, 
  container
)

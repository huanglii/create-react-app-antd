import React from 'react'
import ReactDOM from 'react-dom'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'dayjs/locale/zh-cn'

import App from './App'

import './index.less'

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)

import React, { useState } from 'react'
import {
  Space,
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch
} from 'antd'
import './App.less'

const App = () => {
  const [componentSize, setComponentSize] = useState('middle')
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size)
  }

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 }
  }
  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 }
  }

  return (
    <div className='app'>
      <section style={{ textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center' }}>Ant Design</h1>
        <img style={{ width: '40px', height: '40px' }} src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' />
      </section>
      <Form
        style={{ marginTop: 32 }}
        {...layout}
        layout='horizontal'
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label='表单尺寸' name='size'>
          <Radio.Group>
            <Radio.Button value='small'>Small</Radio.Button>
            <Radio.Button value='middle'>Middle</Radio.Button>
            <Radio.Button value='large'>Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='输入框'>
          <Input />
        </Form.Item>
        <Form.Item label='选择器'>
          <Select>
            <Select.Option value='demo'>Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='树选择'>
          <TreeSelect
            treeData={[
              { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] }
            ]}
          />
        </Form.Item>
        <Form.Item label='级联选择'>
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou'
                  }
                ]
              }
            ]}
          />
        </Form.Item>
        <Form.Item label='日期选择器'>
          <DatePicker.RangePicker />
        </Form.Item>
        <Form.Item label='数字输入框'>
          <InputNumber />
        </Form.Item>
        <Form.Item label='开关'>
          <Switch />
        </Form.Item>
        <Form.Item label='按钮'>
          <Space size={componentSize}>
            <Button type='primary'>Primary</Button>
            <Button>Default</Button>
            <Button type='dashed'>Dashed</Button>
            <Button type='link'>Link</Button>
          </Space>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Space size={componentSize}>
            <Button type='primary' htmlType='submit'>确定</Button>
            <Button>取消</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

export default App

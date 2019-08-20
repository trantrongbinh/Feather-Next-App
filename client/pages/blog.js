import React from 'react'
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button
} from 'antd'

const FormItem = Form.Item
const Option = Select.Option

const posts = [
  { slug: 'hello-world', title: 'Hello world' },
  { slug: 'another-blog-post', title: 'Another blog post' }
]

export default class extends React.Component {
  static async getInitialProps ({ query, res }) {
    const post = posts.find(post => post.slug === query.slug)

    if (!post && res) {
      res.statusCode = 404
    }

    return { post }
  }

  render () {
    const { post } = this.props

    if (!post) return <h1>Post not found</h1>

    return (
      <div>
        <h1>{post.title}</h1>
        <div style={{ marginTop: 100 }}>
          <Form layout='horizontal'>
            <FormItem
              label='Input Number'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <InputNumber
                size='large'
                min={1}
                max={10}
                style={{ width: 100 }}
                defaultValue={3}
                name='inputNumber'
              />
              <a href='#'>Link</a>
            </FormItem>

            <FormItem label='Switch' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
              <Switch defaultChecked name='switch' />
            </FormItem>

            <FormItem label='Slider' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
              <Slider defaultValue={70} />
            </FormItem>

            <FormItem label='Select' labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
              <Select
                size='large'
                defaultValue='lucy'
                style={{ width: 192 }}
                name='select'
              >
                <Option value='jack'>jack</Option>
                <Option value='lucy'>lucy</Option>
                <Option value='disabled' disabled>
                  disabled
                </Option>
                <Option value='yiminghe'>yiminghe</Option>
              </Select>
            </FormItem>

            <FormItem
              label='DatePicker'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 8 }}
            >
              <DatePicker name='startDate' />
            </FormItem>
            <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
              <Button size='large' type='primary' htmlType='submit'>
                OK
              </Button>
              <Button size='large' style={{ marginLeft: 8 }}>
                Cancel
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

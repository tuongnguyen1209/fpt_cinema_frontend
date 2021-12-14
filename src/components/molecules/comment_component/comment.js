import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import React from 'react';
import {StyleComment} from './styleComment';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <StyleComment>
        <List 
            dataSource={comments}
            header={<div className="totalComment">{`${comments.length} Bình luận`}</div>}
            itemLayout="horizontal"
            renderItem={props => <Comment className="box-comment" {...props} />}
        />
    </StyleComment>
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  
    <StyleComment>
        <div className="formTop">
            <Form.Item>
                <TextArea rows={1} onChange={onChange} value={value} className="textArea" placeholder="Viết bình luận..."/>
            </Form.Item>
            <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary" className="btn_submit_comment">
                Đăng bình luận
            </Button>
            </Form.Item>
        </div>
  </StyleComment>
);


export class CommentDetailMovie extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          ...this.state.comments,
          {
            author: 'Han Solo',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <>
        <StyleComment>
            <Comment
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" className="Avatar_comment"/>}
            content={
                <Editor
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    submitting={submitting}
                    value={value}
                />
            }
            />
            {comments.length > 0 && <CommentList comments={comments} />}
        </StyleComment>
      </>
    );
  }
}


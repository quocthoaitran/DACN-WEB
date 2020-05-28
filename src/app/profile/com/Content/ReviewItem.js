import React, { Component } from 'react';
import { Table } from 'antd';
import moment from 'moment';
export default class ReviewItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.reviews !== prevState.reviews) {
      return {
        reviews: nextProps.reviews
      };
    }
    return null;
  }

  componentDidMount() {
    this.props.getListReviewAPI();
  }

  columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 50,
    },
    {
      title: '#ID',
      dataIndex: 'id',
      key: 'id',
      width: 50,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 200,
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
      width: 200,
    },
    {
      title: 'Rate star',
      dataIndex: 'rate',
      key: 'rate',
      width: 50,
    },
    {
      title: 'Created At',
      dataIndex: 'create',
      key: 'create',
      width: 50,
    }
  ]

  addData = (data) => {
    if (this.state.reviews && this.state.reviews.length > 0) {
      this.state.reviews.map(review => {
        let row = {
          type: review.type,
          id: review._id,
          title: review.title,
          content: review.content,
          rate: review.rate_star,
          create: moment(review.createdAt).format("DD/MM/YYYY")
        }
        data.push(row);
      })
    }
    return data
  }

  render() {
    let data = [];
    this.addData(data);
    console.log(data);
    return (
      <>
        <Table columns={this.columns} dataSource={data} />
      </>
    )
  }
}

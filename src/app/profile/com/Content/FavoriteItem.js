import React, { Component } from 'react';
import { Table } from 'antd';
import moment from 'moment';
export default class FavoriteItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.favorites !== prevState.favorites) {
      return {
        favorites: nextProps.favorites
      };
    }
    return null;
  }

  // componentDidMount() {
  //   this.props.getListFavoriteAPI();
  // }

  columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 100,
    },
    {
      title: '#ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: 'Rate',
      dataIndex: 'rate',
      key: 'rate',
      width: 100,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: 100,
    },
    {
      title: 'Created At',
      dataIndex: 'create',
      key: 'create',
      width: 100,
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
        console.log(data)
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

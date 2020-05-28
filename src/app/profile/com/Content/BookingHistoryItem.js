import React, { Component } from 'react';
import { Table } from 'antd';
import moment from 'moment';

export default class BookingHistoryItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
    }
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if (nextProps.bookings !== prevState.bookings){
      return { 
        bookings: nextProps.bookings 
      };
    }
    return null;
  }

  componentDidMount(){
    this.props.getListBookingHistoryAPI();
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
      title: 'Order Date',
      dataIndex: 'order',
      key: 'order',
      width: 200,
    },
    {
      title: 'Execution Time',
      dataIndex: 'execution',
      key: 'execution',
      width: 200,
      render: execution => (
        <>
            {
                execution.map(value => {
                    return <h5>{ value }</h5>;
                })
            }
        </>
      ),
    },
    {
      title: 'Cost',
      dataIndex: 'cost',
      key: 'cost',
      width: 50,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 50,
    }
  ]

  addData = (data) => {
    if (this.state.bookings && this.state.bookings.length > 0) {
      this.state.bookings.map(booking => {
        let status = booking.status;
        console.log(status);
        booking.booking_list.map(item => {
          let row = {
            type: item.type,
            id: item._id,
            order: moment(item.createdAt).format("DD/MM/YYYY"),
            execution: [moment(item.date_start).format("DD/MM/YYYY"), moment(item.date_end).format("DD/MM/YYYY")],
            cost: item.price,
            status: status ? "Done" : "Canceled"
          }
          data.push(row);
        })
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
        <Table columns = {this.columns} dataSource= {data}/>
      </>
    )
  }
}

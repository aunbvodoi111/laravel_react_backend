import React, { Component } from 'react';
import './../../../sass/home/home.scss';
import { Link } from 'react-router-dom'
class HomeContainer extends Component {
  render() {
    return (
      <div className="container-home">
        <div className='title'>
          <h1>Chào mừng đến với Shopee - Kênh Người bán</h1>
        </div>
        <div className="content-home">
          <div className="item-menu-home">
            <div className="img">
              <Link to='/product/list/all'>
                <img src="/img/menu1.png" alt="" />
                <i className="fas fa-gift"></i>
              </Link>
              <h3>Sản phẩm</h3>
            </div>
          </div>
          <div className="item-menu-home">
            <div className="img">
              <Link to='/unit/list/all'>
                <img src="/img/menu1.png" alt="" />
                <i className="fas fa-gift"></i>
              </Link>
              <h3>Đơn vị</h3>
            </div>
          </div>
          <div className="item-menu-home">
            <div className="img">
              <img src="/img/menu2.png" alt="" />
              <i className='	fas fa-bars'></i>
            </div>
            <h3>Danh mục của Shop</h3>
          </div>
          <div className="item-menu-home">
            <div className="img">
              <Link to='/cate/all'>
                <img src="/img/menu2.png" alt="" />
                <i className='	fas fa-bars'></i>
              </Link>
            </div>
            <h3>Cate</h3>
          </div>
          <div className="item-menu-home">
            <div className="img">
              <Link to='/subcate/all'>
                <img src="/img/menu2.png" alt="" />
                <i className='	fas fa-bars'></i>
              </Link>
            </div>
            <h3>Subcate</h3>
          </div>
          <div className="item-menu-home">
            <div className="img">
              <Link to='/order/saler'>
                <img src="/img/menu3.png" alt="" />
                <i className="fas fa-wallet"></i>
                <h3>Đơn Bán</h3>
              </Link>
            </div>
          </div>
          <div className="item-menu-home">
            <div className="img">
              <img src="/img/menu4.png" alt="" />
              <h3>Kênh Marketing</h3>
            </div>
          </div>
          <div className="item-menu-home">
            <div className="img">
              <img src="/img/menu5.png" alt="" />
              <i className="far fa-money-bill-alt"></i>
              <h3>Doanh thu</h3>
            </div>
          </div>
          <div className="item-menu-home">
            <div className="img">
              <img src="/img/menu6.png" alt="" />
              <i className="fas fa-coins"></i>
              <h3>Thiết lập Shop</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContainer;

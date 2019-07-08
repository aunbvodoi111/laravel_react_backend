import React, { Component } from 'react';
import './../../../sass/navbar/navbar.scss';
import { Link } from 'react-router-dom'
class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ToogleMenu: false,
      toggleUser: false
    }
  }

  onToogleMenu = () => {
    this.setState({
      ToogleMenu: !this.state.ToogleMenu
    })
  }
  onToogleUser = () => {
    this.setState({
      toggleUser: !this.state.toggleUser
    })
  }
  render() {
    return (
      <div className="nav-container">
        <div className="nav">
          <div className="nav-right">
            <Link to='/'>
              <p>Shopee - Kênh Người bán</p>
            </Link>
          </div>
          <div className="nav-left">
            <div className='nofi'>
              <i className="far fa-bell"></i>
            </div>
            <div className='nofi' onMouseEnter={this.onToogleMenu} onMouseLeave={this.onToogleMenu}>
              <i className="fas fa-align-justify"></i>
              {this.state.ToogleMenu === true ? <div className="pop-menu" >
              <div className='select-menu'>
                  <Link to='/cate/all'>
                    <img src="/img/menu1.png" alt="" />
                    <span>Cate</span>
                  </Link>
                </div>
                <div className='select-menu'>
                  <Link to='/subcate/all'>
                    <img src="/img/menu5.png" alt="" />
                    <span>Subcate</span>
                  </Link>
                </div>
                <div className='select-menu'>
                  <Link to='/subcate/all'>
                    <img src="/img/menu5.png" alt="" />
                    <span>Unit</span>
                  </Link>
                </div>
                <div className='select-menu'>
                  <Link to='/unit/list/all'>
                    <img src="/img/menu3.png" alt="" />
                    <span>Đơn vị</span>
                  </Link>
                </div>
                <div className='select-menu'>
                  <Link to='/product/new'>
                    <img src="/img/menu3.png" alt="" />
                    <span>Thêm sản phẩm</span>
                  </Link>
                </div>
                <div className='select-menu'>
                  <Link to='/order/saler'>
                    <img src="/img/menu3.png" alt="" />
                    <span>Đơn hàng</span>
                  </Link>
                </div>
                <div className='select-menu'>
                  <img src="https://cf.shopee.vn/file/aaa24a79e7015ab1d6c73392b4b54c93" alt="" />
                  <span>Phạm đức quý</span>
                </div>
                <div className='select-menu'>
                  <img src="https://cf.shopee.vn/file/aaa24a79e7015ab1d6c73392b4b54c93" alt="" />
                  <span>Phạm đức quý</span>
                </div>
              </div> : ''}
            </div>
            <div className="user" onMouseEnter={this.onToogleUser} onMouseLeave={this.onToogleUser}>
              <div className="avatar">
                <img src="https://cf.shopee.vn/file/aaa24a79e7015ab1d6c73392b4b54c93" alt="" />
              </div>
              <div className="name-user">
                <p>Phạm đức quý</p>
              </div>
              {
                this.state.toggleUser === true ? <div className="action-user">
                  <p><i className="fas fa-image"></i> Hồ sơ shop</p>
                  <p> <i className="fas fa-file-export"></i> Đăng xuất</p>
                </div>
                  : ""
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;

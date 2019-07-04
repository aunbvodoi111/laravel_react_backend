import React, { Component } from 'react';
import './../../../sass/product/index.scss'
import { connect } from 'react-redux'
import { addProduct, fetchProduct } from './../../actions/product'

class productContainer extends Component {
  componentWillMount() {
    this.props.fetchProduct()
  }

  render() {
    var { products } = this.props
    if(products){
      var almProduct = products.map((product, index) => {
        return (
          <div className="product" key={index}>
            <div className="product-div">
              <div className="img">
                <img src={product.image} />
              </div>
              <div className="name">
                {product.name}
                          </div>
              <div className="price">
                <p>{product.price} đ</p>
              </div>
            </div>
          </div>
        );
      })
    }
    return (
      <div className='container-product'>
        <div className='old-wrapper'>
          <div className="menu-product">
            <div className='item'>
              <a href="">Tất cả</a>
            </div>
            <div className='item'>
              <a href="">Còn hàng</a>
            </div>
            <div className='item'>
              <a href="">Hết hàng</a>
            </div>
            <div className='item'>
              <a href="">Đã bị khóa</a>
            </div>
            <div className='item'>
              <a href="">Đã bị ẩn</a>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className="old-pr">
            <div>
              <h5>1 Sản Phẩm</h5>
            </div>
            <div className='total-product'>
              <p>1 / 1000</p>
            </div>
          </div>
          <div className="product-content">
            { almProduct }
            {/* <div style=" clear:both;"></div> */}
          </div>
        </div >
      </div >
    );
  }
}


const mapStateToProps = state => {
  return {
    products: state.product.products
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchProduct: () => {
      dispatch(fetchProduct())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(productContainer);
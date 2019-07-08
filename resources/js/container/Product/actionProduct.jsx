import React, { Component } from 'react';
import './../../../sass/product/action.scss'

import { connect } from 'react-redux'
import { addProduct, fetchData, } from './../../actions/product'
class actionProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: -1,
      name: '',
      CateId: 1,
      SubcateId: '',
      UnitId: '',
      description: '',
      discount: '',
      price: '',
      qty: '',
      mass: '',
      image: '',
      files: []
    }
  }
  componentWillMount() {
   
    this.props.fetchData()
  }
  fileSelectedHandler = (e) => {
    console.log(e.target.files[0])
    var anhquy = e.target.files[0]
    this.setState({ files: [...this.state.files, ...e.target.files] })
    let file
    file = this.state.files
    let formData = new FormData();
    formData.append('file[]', file);
    axios.post('http://localhost:8000/uploads/',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(response => {
      console.log(response)
      // this.setState({
      //   image: '/img/' + response.data.result
      // })
    })
      .catch(function () {
        console.log('FAILURE!!')
      });
  }
  uploadImg = (event) => {
    let file
    file = event.target.files[0]
    console.log(file)
    let formData = new FormData();
    formData.append('file', file);
    axios.post('http://localhost:8000/upload/',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(response => {
      this.setState({
        image: '/img/' + response.data.result
      })
    })
      .catch(function () {
        console.log('FAILURE!!')
      });

  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onClick = () => {
    var { name, CateId, SubcateId, UnitId, description, discount, price, qty, mass, image } = this.state
    var product = {
      name: name,
      SubcateId: SubcateId,
      UnitId: UnitId,
      description: description,
      discount: discount,
      qty: qty,
      mass: mass,
      image: image,
      price: price,
    }
    this.props.addProduct(product)
  }
  render() {
    var { cates, units, subcates } = this.props
    var { name, CateId, SubcateId, UnitId, description, discount, price, qty, mass, image } = this.state
    if (units) {
      var elmUnit = units.map((unit, index) => {
        return (
          <option value={unit.id} key={index}>{unit.name}</option>
        );
      })
    }
    if (cates) {
      var elmCates = cates.map((cate, index) => {
        return (
          <option value={cate.id} key={index}>{cate.name}</option>
        );
      })
    }
    if (subcates) {
      var elmSubcate = subcates.map((subcate, index) => {
        if (subcate.CateId == CateId) {
          return (
            <option value={subcate.id} key={index}>{subcate.name}</option>
          );
        }

      })
    }


    return (
      <div className="container-content">
        <h5>Thông tin cơ bản</h5>
        <div className="form">
          <div className="label">
            <p>*Chọn danh mục</p>
          </div>
          <div className="txt-form" >
            <select className="form-control" onChange={this.onChange} value={CateId} name="CateId">
              {elmCates}
            </select>
          </div>
        </div>
        <div className="form">
          <div className="label">
            <p>*Chọn loại sản phẩm</p>
          </div>
          <div className="txt-form">
            <select className="form-control" onChange={this.onChange} value={SubcateId} name="SubcateId">
              {elmSubcate}
            </select>
          </div>
        </div>
        <div className="form">
          <div className="label">
            <p>*Đơn vị</p>
          </div>
          <div className="txt-form">
            <select className="form-control" onChange={this.onChange} value={UnitId} name="UnitId">
              {elmUnit}
            </select>
          </div>
        </div>
        <div className="form">
          <div className="label">
            <p>*Tên sản phẩm</p>
          </div>
          <div className="txt-form">
            <input type="text" className="form-control" onChange={this.onChange} value={name} name="name" />
          </div>
        </div>
        <div className="form">
          <div className="label">
            <p>*Giá</p>
          </div>
          <div className="txt-form">
            <input type="number" className="form-control" onChange={this.onChange} value={price} name="price" />
          </div>
        </div>
        <div className="form">
          <div className="label">
            <p>*Khối lượng</p>
          </div>
          <div className="txt-form">
            <input type="number" className="form-control" onChange={this.onChange} value={mass} name="mass" />
          </div>
        </div>
        <div className="form">
          <div className="label">
            <p>Số lượng</p>
          </div>
          <div className="txt-form">
            <input type="number" className="form-control" onChange={this.onChange} value={qty} name="qty" />
          </div>
        </div>
        <div className="form">
          <div className="label">
            <p>Gía khuyến mại</p>
          </div>
          <div className="txt-form">
            <input type="number" className="form-control" onChange={this.onChange} value={discount} name="discount" />
          </div>
        </div>
        <div className="form">
          <div className="label">
            <p>Miêu tả</p>
          </div>
          <div className="txt-form">
            <textarea name="" id="" cols="30" rows="10" className="form-control-textarea" onChange={this.onChange} value={description} name="description"></textarea>
          </div>
        </div>
        <input type="file" onChange={this.uploadImg} ref='file' id='file' ref='file' />
        <img src={image} />
        <input type="file" multiple onChange={this.fileSelectedHandler} />
        <div className="form">
          <button onClick={this.onClick}>Lưu</button>
          <button>Hủy</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    cates: state.product.cates,
    subcates: state.product.subcates,
    units: state.product.units
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchData: () => {
      dispatch(fetchData())
    },
    addProduct: (product) => {
      console.log(product)
      dispatch(addProduct(product))
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(actionProduct);

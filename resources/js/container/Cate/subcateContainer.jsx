import React, { Component } from 'react';
import './../../../sass/cate/cate.scss'
import { connect } from 'react-redux'
import { fetchSubcate, addSubcate, deleteSubcate } from './../../actions/subcate'
class subcateContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: -1,
      CateId: '',
      name: ''
    }
  }
  componentDidMount() {
    this.props.fetchSubcate()
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  deleteSubcate = (e) => {
    this.props.deleteSubcate(e)
  }
  onClick = (e) => {
    e.preventDefault()
    if (this.state.id == -1) {
      var { name, CateId } = this.state
      var subcate = {
        CateId: CateId,
        name: name
      }
      this.props.addSubcate(subcate)
      this.setState({
        name: ''
      })
    } else {
      var { name, id } = this.state
      var cate = {
        name: name,
        id: id
      }
      this.setState({
        name: '',
        id: -1
      })
      this.props.updateCate(cate)
    }
  }
  render() {
    var { name, CateId } = this.state
    var { cates, subcates } = this.props
    var elmCate = cates.map((cate, index) => {
      return (
        <option value={cate.id} key={index}>{cate.name}</option>
      );
    })
    if (subcates) {
      var elmSubCates = subcates.map((subcate, index) => {
        return (
          <tr key={index}>
            <td>{subcate.name}</td>
            <td>{subcate.cates.name}</td>
            {/* <td>{subcate.cates.name}</td> */}
            <td>
              <button onClick={() => this.deleteSubcate(subcate.id)} className="btn btn-danger">Xóa
              </button>
              <button onClick={() => this.editSubcate(subcate)} className="btn btn-danger">Sửa
              </button>
            </td>
          </tr>
        );
      })
    }
    return (
      <div className="container-content">
        <h5>Thông tin cơ bản</h5>
        <div className="form">
          <div className="label">
            <p>*Tên sản phẩm</p>
          </div>
          <div className="txt-form">
            <select className="form-control" onChange={this.onChange} value={CateId} name="CateId">
              {elmCate}
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
          <button onClick={this.onClick} >Lưu</button>
          <button>Hủy</button>
        </div>

        <div>
          <h5>Tất cả danh mục</h5>
          <table>
            <tbody>
              <tr >
                <th>First Name</th>
                <th>Last Name</th>
                <th>Points</th>
              </tr>
              {elmSubCates}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    errors: state.subcate.errors,
    cates: state.subcate.cates,
    subcates: state.subcate.subcates
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchSubcate: () => {
      dispatch(fetchSubcate())
    },
    addSubcate: (subcate) => {
      dispatch(addSubcate(subcate))
    },
    deleteSubcate: (id) => {
      dispatch(deleteSubcate(id))
    },
    updateCate: (cate) => {
      dispatch(updateCate(cate))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(subcateContainer);

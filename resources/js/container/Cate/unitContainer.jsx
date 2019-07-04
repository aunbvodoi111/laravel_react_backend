import React, { Component } from 'react';
import './../../../sass/cate/cate.scss'
import { connect } from 'react-redux'
import { addUnit, fetchUnit, deleteUnit,updateUnit } from './../../actions/unit'

class cateContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: -1,
      name: ''
    }
  }
  componentDidMount() {
    this.props.fetchUnit()
  }
  onChange = (e) => {
    this.setState({
      name :  e.target.value
    })
  }
  deleteUnit = (e) => {
    this.props.deleteUnit(e)
  }
  onClick = (e) => {
    e.preventDefault()
    if (this.state.id == -1) {
      var { name } = this.state
      var unit = {
        name: name
      }
      this.props.addUnit(unit)
      this.setState({
        name: ''
      })
    } else {
      var { name , id } = this.state 
      var cate = {
        name : name,
        id : id
      }
      this.setState({
        name: '',
        id: -1
      })
      this.props.updateCate(cate)
    }
  }
  editCate = (cate) => {
    this.setState({
      name: cate.name,
      id: cate.id
    })
  }

  render() {
    const pStyle = {
      color: 'red',
      fontWeight: 'bold'
    };
    var { name } = this.state
    var { errors, units } = this.props
    if (errors) {
      var elmErrors = errors.map((error, index) => {
        return (
          <span key={index}>{error}</span>
        );
      })
    }
    if (units) {
      var elmCates = units.map((unit, index) => {
        return (
          <tr key={index}>
            <td>{unit.name}</td>
            <td>
              <button onClick={() => this.deleteUnit(unit.id)} className="btn btn-danger">Xóa
              </button>
              <button onClick={() => this.editCate(unit)} className="btn btn-danger">Sửa
              </button>
            </td>
          </tr>
        );
      })
    }
    return (
      <div className="container-content">
        <h5>Thông tin cơ bản</h5>
        <p style={pStyle} >{elmErrors}</p>
        <div className="form">
          <div className="label">
            <p>*Tên đơn vị</p>
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
          <table>
            <tbody>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
              {elmCates}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    errors: state.cate.errors,
    units: state.unit.units
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchUnit: () => {
      dispatch(fetchUnit())
    },
    addUnit: (unit) => {
      console.log(unit)
      dispatch(addUnit(unit))
    },
    deleteUnit: (id) => {
      dispatch(deleteUnit(id))
    },
    updateUnit:(cate)=>{
      dispatch(updateUnit(cate))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(cateContainer);

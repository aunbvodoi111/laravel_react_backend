import React, { Component } from 'react';
import './../../../sass/cate/cate.scss'
import { connect } from 'react-redux'
import { addCate, fetchCate, deleteCate,updateCate } from './../../actions/cate'

class cateContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: -1,
      name: '',
      image:''
    }
  }
  componentDidMount() {
    this.props.fetchCate()
  }
  onChange = (e) => {
    this.setState({
      name :  e.target.value
    })
  }
  deleteCate = (e) => {
    this.props.deleteCate(e)
  }
  uploadImg = (event) => {
    let file
    file = event.target.files[0]
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
  onClick = (e) => {
    e.preventDefault()
    if (this.state.id == -1) {
      var { name , image } = this.state
      var cate = {
        name : name,
        image : image 
      }
      this.props.addCate(cate)
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
    var { name , image} = this.state
    var { errors, cates } = this.props
    if (errors) {
      var elmErrors = errors.map((error, index) => {
        return (
          <span key={index}>{error}</span>
        );
      })
    }
    if (cates) {
      var elmCates = cates.map((cate, index) => {
        return (
          <tr key={index}>
            <td>{cate.name}</td>
            <td>
              <button onClick={() => this.deleteCate(cate.id)} className="btn btn-danger">Xóa
              </button>
              <button onClick={() => this.editCate(cate)} className="btn btn-danger">Sửa
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
            <p>*Tên sản phẩm</p>
          </div>
          <div className="txt-form">
            <input type="text" className="form-control" onChange={this.onChange} value={name} name="name" />
          </div>
        </div>
        <input type="file" onChange={this.uploadImg} ref='file' id='file' ref='file' />
        <img src={image} />
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
    cates: state.cate.cates
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchCate: () => {
      dispatch(fetchCate())
    },
    addCate: (cate) => {
      console.log(cate)
      dispatch(addCate(cate))
    },
    deleteCate: (id) => {
      dispatch(deleteCate(id))
    },
    updateCate:(cate)=>{
      dispatch(updateCate(cate))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(cateContainer);

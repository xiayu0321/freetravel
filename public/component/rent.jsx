import React from 'react';
import request from 'superagent';

import "../css/rent.css"
class SelectArea extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = this.props.onSearch;
  }
  render() {
    return (
      <div className="select">
        <div className="row row-select">
          <div className="col-xs-2" id="search">搜索:</div>
          <div className="input-group text-search">
            <input type="text" className="form-control" placeholder="请输入商品" onChange={this._searchItem.bind(this)}/>
            <span className="input-group-btn">
              <button className="btn btn-default btn-selete" type="button">搜索</button>
            </span>
            <div></div>
          </div>
        </div>
        <div></div>
      </div>
    )
  }

  _searchItem(event){
    let keyword = event.target.value;
    this.onSearch(keyword);
  }
}

class SearchResult extends React.Component {
  render() {
    const {keyword, items}  = this.props;
    return <div>
      {
        items.filter(item => item.toLowerCase().includes(keyword.toLowerCase()))
          .map(i => <div>{i}</div>)
      }
    </div>;
  }
}

class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      productName: '',
      price: '',
      description: '',
      imgName: '',
      product: []
    }
  }

  componentDidMount() {
    request.post('/api/items')
      .end((err, data) => {
        this.setState({
          product: data.body
        });
      });
  }


  render() {
    const data = this.state.product.map(p =>
      < div className="col-sm-4 col-md-3">
        <div className="thumbnail">
          <img src={"../images/goods/" + p.imgName} className="picture"/>
          <p>￥{p.price}/天 {p.productName}</p>
          <p>
            <button href="#" className="btn btn-primary" role="button"
                    onClick={this._knowMore(p.productName)}>了解更多
            </button>
          </p>
        </div>
      </div>
    );
    return (
      <div className="row image container-fluid ">
        <div className="row row-rent">
          <div>{data}</div>
        </div>
      </div>
    )
  }

  _knowMore(productName) {
    return () => {
      alert(productName);
    };
  }
}


class Rent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }
  render() {
    return (
      <div>
        <SelectArea onSearch={(keyword) => this.setState({keyword: keyword})}/>
        <SearchResult keyword={this.state.keyword} items={
          ['JavaScript', 'Node', 'React', 'Redux', 'Bootstrap', 'Webpack', 'Babel']
        }/>
        <Picture />
      </div>
    )
  }
}
export default Rent;




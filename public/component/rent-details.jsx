import React from 'react';
import ImgMain from '../images/rent-details/tent-01.jpg';
import Img01 from '../images/rent-details/tent-details-001.jpg';
import Img02 from '../images/rent-details/tent-details-002.jpg';
import Img03 from '../images/rent-details/tent-details-003.jpg';
import IntroduceImg01 from '../images/rent-details/tent-01.jpg';
import IntroduceImg02 from '../images/rent-details/tent-details-001.jpg';
import IntroduceImg03 from '../images/rent-details/tent-details-002.jpg';
import IntroduceImg04 from '../images/rent-details/tent-01.jpg';
import {Link} from 'react-router';
import request from 'superagent';
import {hashHistory} from 'react-router'


import '../css/rent-details.css';

class GoodsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      address: '',
      otherMessage: '',
      product: {},
      username: 'unknown',
    }
  }

  componentDidMount() {
    request.post('/api/items/details')
      .send({id: this.props.params.id})
      .end((err, data) => {
        this.setState({
          product: data.body
        });
      });
    request
      .get('/api/personal')
      .end((err, res) => {
        console.log(err);
        if (err) {
          if (res.statusCode === 401) {
            // alert('please login!');
            // return hashHistory.push('/login');
          } else {
            return alert('请先登录!');
          }
        }
        console.log("statusCode:" + res.statusCode);
        const {username} = res.body;
        this.setState({username});
      })
  }

  _submitOrder(event) {
    event.preventDefault();
  }

  _nameOnChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  _phoneOnChange(event) {
    this.setState({
      phone: event.target.value
    });
  }

  _addressOnChange(event) {
    this.setState({
      address: event.target.value
    });
  }

  _otherMessageOnChange(event) {
    this.setState({
      otherMessage: event.target.value
    });
  }

  _isLogin() {
    return () => {
      if (this.state.username === "unknown") {
        alert('no login');
        hashHistory.push('/login');
      }
    };
  }


  render() {
    const productData = this.state.product;
    return (
      <div className="goods-details">
        {this.props.params.id}

        <div className="goods-header">
          <div className="left-pic">
            <div className="img-main-rent">
              <img className="main-img" src={"../images/goods/" + productData.imgName}/>
            </div>
            <div className="img-other">
              <img src={Img03}/>
              <img src={Img02}/>
              <img src={Img01}/>
            </div>
          </div>
          <div className="goods-information">
            <p className="goods-name">{productData.productName}</p><br/>
            <div className="separate-left"></div>
            <div className="separate-right"></div>
            <p className="goods-price">商品租价：<b>{productData.price}</b>元/天</p>
            <p className="goods-address">商品所在地：<span>陕西省 西安市 长安区</span></p>
            {/*<Link to='/orderPage'>*/}
            {/*<button type="submit" className="enter-renter">*/}
            {/*确认租用*/}
            {/*</button>*/}
            {/*</Link>*/}
            <div className="btn-zuyong">
              <button type="button" className="btn btn-primary enter-renter btn-zuyong" data-toggle="modal"
                      data-target="#exampleModal" data-whatever="@mdo" onClick={this._isLogin()}>租用
                {/*data-target={0>1 ? '#exampleModal' : ''} data-whatever="@mdo" onClick={this._isLogin()}>租用*/}
              </button>
              {/*{2>1 ? <div>111</div> :null}*/}
              {this.state.username !== "unknown" ?
                <div>
                  <form >
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                         aria-labelledby="exampleModalLabel">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                              aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="exampleModalLabel">确认订单</h4>
                          </div>
                          <div className="modal-body">
                            <form>
                              <div className="form-group">
                                <label for="recipient-name" className="control-label">收货人姓名:</label>
                                <input type="text" className="form-control" id="recipient-name"
                                       value={this.state.name}
                                       onChange={this._nameOnChange.bind(this)}/>
                                {this.state.name}
                              </div>
                              <div className="form-group">
                                <label for="recipient-name" className="control-label">联系电话:</label>
                                <input type="text" className="form-control" id="recipient-name"
                                       value={this.state.phone}
                                       onChange={this._phoneOnChange.bind(this)}/>
                                {this.state.phone}
                              </div>
                              <div className="form-group">
                                <label for="recipient-name" className="control-label">收货地址:</label>
                                <input type="text" className="form-control" id="recipient-name"
                                       value={this.state.address}
                                       onChange={this._addressOnChange.bind(this)}/>
                                {this.state.address}
                              </div>
                              <div className="form-group">
                                <label for="message-text" className="control-label">备注:</label>
                                <textarea className="form-control" id="message-text"
                                          value={this.state.otherMessage}
                                          onChange={this._otherMessageOnChange.bind(this)}/>
                                {this.state.otherMessage}
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <Link to='www.baidu.com'>
                              <button type="button" className="btn btn-primary">确认租用</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                :
                <div>222</div>}
            </div>


            {/*<form >*/}
            {/*<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog"*/}
            {/*aria-labelledby="exampleModalLabel">*/}
            {/*<div className="modal-dialog" role="document">*/}
            {/*<div className="modal-content">*/}
            {/*<div className="modal-header">*/}
            {/*<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span*/}
            {/*aria-hidden="true">&times;</span></button>*/}
            {/*<h4 className="modal-title" id="exampleModalLabel">确认订单</h4>*/}
            {/*</div>*/}
            {/*<div className="modal-body">*/}
            {/*<form>*/}
            {/*<div className="form-group">*/}
            {/*<label for="recipient-name" className="control-label">收货人姓名:</label>*/}
            {/*<input type="text" className="form-control" id="recipient-name"*/}
            {/*value={this.state.name}*/}
            {/*onChange={this._nameOnChange.bind(this)}/>*/}
            {/*{this.state.name}*/}
            {/*</div>*/}
            {/*<div className="form-group">*/}
            {/*<label for="recipient-name" className="control-label">联系电话:</label>*/}
            {/*<input type="text" className="form-control" id="recipient-name"*/}
            {/*value={this.state.phone}*/}
            {/*onChange={this._phoneOnChange.bind(this)}/>*/}
            {/*{this.state.phone}*/}
            {/*</div>*/}
            {/*<div className="form-group">*/}
            {/*<label for="recipient-name" className="control-label">收货地址:</label>*/}
            {/*<input type="text" className="form-control" id="recipient-name"*/}
            {/*value={this.state.address}*/}
            {/*onChange={this._addressOnChange.bind(this)}/>*/}
            {/*{this.state.address}*/}
            {/*</div>*/}
            {/*<div className="form-group">*/}
            {/*<label for="message-text" className="control-label">备注:</label>*/}
            {/*<textarea className="form-control" id="message-text"*/}
            {/*value={this.state.otherMessage}*/}
            {/*onChange={this._otherMessageOnChange.bind(this)}/>*/}
            {/*{this.state.otherMessage}*/}
            {/*</div>*/}
            {/*</form>*/}
            {/*</div>*/}
            {/*<div className="modal-footer">*/}
            {/*<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>*/}
            {/*<Link to='www.baidu.com'>*/}
            {/*<button type="button" className="btn btn-primary">确认租用</button>*/}
            {/*</Link>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</div>*/}
            {/*</form>*/}


          </div>
        </div>
        <div className="goods-introduce">
          <div className="goods-text-wall">
            <h1>商品介绍：</h1>
            <h2>商品描述：</h2>
            <p>
              3人-4人双层帐; 展开尺寸：240*210*140；内帐材料: 190T透气涤纶布+高密网纱；空间结构: 一居室；帐底材质:
              210D牛津布；外帐材质:190T防水涤塔夫；外帐防水指数: 2000mm(含)-3000mm(含)；帐底防水指数: 2000mm(含)-3000mm(含)；支架材质:
              玻璃钢；适应季节: 三季帐全自动速开：全自动面搭建帐篷，开蓬只需要一人一提一拉即可完成,3秒速开。
            </p>
            <h2>商品其他信息：</h2>
            <p>
              外帐添加特殊防紫外线图层，外帐添加特殊防紫外线图层—PU3000mm，190T涤纶+PU3000，经过多次防水测试，防水指数2000mm(含)-3000mm(含)（可防小到中雨），同时采用多股搅合工艺制作，提高了帐篷的抗风受力性配置POM，单独使用时，可做遮阳蓬，有效阻挡紫外线或者挡雨，公园游玩、沙滩休闲、户外垂钓、露营方便实用内帐加防紫外线涤纶，190T透气涤纶布+高密网纱，加细密纱网，透气性好，夏天使用也不会觉得闷；帐篷撑杆为实心伞架结构复合纤维杆，更轻，更耐用帐底材料为210D牛津布，耐磨防水防虫；可对叠成拎包状态，牛津提带，牢固、方便便携
            </p>
            <h2>一句话描述：</h2>
            <p>
              出门旅游，必备良品！*-*
            </p>
          </div>
          <div className="goods-pictures-wall">
            <img className="img-start-end" src={IntroduceImg01}/>
            <img src={IntroduceImg02}/>
            <img src={IntroduceImg03}/>
            <img className="img-start-end" src={IntroduceImg04}/>
          </div>
        </div>
      </div>
    );
  }
}

export default GoodsDetails;

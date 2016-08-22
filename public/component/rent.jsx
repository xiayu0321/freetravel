import React from 'react';
import picture1 from "../images/goods/digital-single-lens-reflex-001.jpg";
import request from 'superagent';

import Image2 from "../images/goods/digital-single-lens-reflex-002.jpg";
import Image3 from "../images/goods/mountain-bike-cycling-001.jpg";
import Image4 from "../images/goods/mountain-bike-cycling-002.jpg";
import Tent1 from "../images/goods/tent-004.jpg";
import Tent2 from "../images/goods/tent-005.jpg";
import Tent3 from "../images/goods/tent-003.jpg";
import Knapsack1 from "../images/goods/knapsack-001.jpg";

import "../css/rent.css"
class SelectArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      productName: '',
      price: '',
      description: '',
      imgName:'',
      product: []
    }
  }

  componentDidMount() {
    request.post('/api/items')
      .end((err, data) => {
        this.setState({
          product: data.body
        });
        // alert(data);
        console.log("-----" + this.state.product);
        alert(this.state.product[1].imgName);
        alert(typeof data);
      });
  }


  _getInformation(event) {
    request.get('/api/items')
      .end((err, data) => {
        alert(data);
        console.log("....." + data.body[1].price)
        console.log("aaaaa" + data)
        console.log(data.text.length);
        // alert(this.state.id);
      });
  }


  render() {
    const img = '';
    const data = this.state.product.map(p =>
        < div className="col-sm-4 col-md-3">
          <div className="thumbnail">
            <img src={"../images/goods/"+p.imgName+".jpg"} className="picture"/>
            <p>￥{p.price}/天 {p.productName}</p>
            <p><a href="#" className="btn btn-primary" role="button">Button</a>
              <a href="#" class="btn btn-default" role="button">Button</a>
            </p>
          </div>
        </div>

    );

    return (
      <div className="select">
        <div className="row row-rent">
          <div>{data}</div>
        </div>


        <button className="btn btn-default btn-selete" type="button" onClick={this._getInformation}>获取数据</button>
        <div className="row row-select">
          <div className="col-xs-2" id="search">搜索:</div>
          <div className="input-group text-search">
            <input type="text" className="form-control" placeholder="请输入商品"/>
            <span className="input-group-btn">
              <button className="btn btn-default btn-selete" type="button">搜索</button>
            </span>
          </div>
        </div>
        <div></div>
      </div>
    )
  }
}
class Picture extends React.Component {
  render() {
    return (
      <div className="row image container-fluid ">

        {/*<div className="picture-describe">*/}
        {/*<a href="#">*/}
        {/*<div><img src={picture1} className="picture"/></div>*/}
        {/*<div>￥400/天 佳能（Canon）EOS 100D 单反套机（EF 40mm f/2.8 STM镜头）</div>*/}
        {/*</a>*/}
        {/*</div>*/}


        {/*<div className="row row-rent">*/}
        {/*<div className="col-sm-4 col-md-3">*/}
        {/*<div className="thumbnail">*/}
        {/*<img src={picture1} className="picture"/>*/}
        {/*<p>￥400/天 佳能（Canon）EOS 100D 单反套机（EF 40mm f/2.8 STM镜头）</p>*/}
        {/*<p><a href="#" className="btn btn-primary" role="button">Button</a>*/}
        {/*<a href="#" class="btn btn-default" role="button">Button</a>*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="col-sm-4 col-md-3">*/}
        {/*<div className="thumbnail ">*/}
        {/*<img src={picture1} className="picture"/>*/}
        {/*<p>￥400/天 佳能（Canon）EOS 100D 单反套机（EF 40mm f/2.8 STM镜头）</p>*/}
        {/*<p><a href="#" className="btn btn-primary" role="button">Button</a>*/}
        {/*<a href="#" class="btn btn-default" role="button">Button</a>*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="col-sm-4 col-md-3">*/}
        {/*<div className="thumbnail ">*/}
        {/*<img src={picture1} className="picture"/>*/}
        {/*<p>￥400/天 佳能（Canon）EOS 100D 单反套机（EF 40mm f/2.8 STM镜头）</p>*/}
        {/*<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#"*/}
        {/*class="btn btn-default"*/}
        {/*role="button">Button</a>*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="col-sm-4 col-md-3">*/}
        {/*<div className="thumbnail">*/}
        {/*<img src={picture1} className="picture"/>*/}
        {/*<p>￥400/天 佳能（Canon）EOS 100D 单反套机（EF 40mm f/2.8 STM镜头）</p>*/}
        {/*<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#"*/}
        {/*class="btn btn-default"*/}
        {/*role="button">Button</a>*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*</div>*/}

        {/*/!*</div>*!/*/}

        {/*/!*<div className="row">*!/*/}
        {/*<div className="col-sm-4 col-md-3">*/}
        {/*<div className="thumbnail">*/}
        {/*<img src={picture1} className="picture"/>*/}
        {/*<p>￥400/天 佳能（Canon）EOS 100D 单反套机（EF 40mm f/2.8 STM镜头）</p>*/}
        {/*<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#"*/}
        {/*class="btn btn-default"*/}
        {/*role="button">Button</a>*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="col-sm-4 col-md-3">*/}
        {/*<div className="thumbnail">*/}
        {/*<img src={picture1} className="picture"/>*/}
        {/*<p>￥400/天 佳能（Canon）EOS 100D 单反套机（EF 40mm f/2.8 STM镜头）</p>*/}
        {/*<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#"*/}
        {/*class="btn btn-default"*/}
        {/*role="button">Button</a>*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="col-sm-4 col-md-3">*/}
        {/*<div className="thumbnail">*/}
        {/*<img src={picture1} className="picture"/>*/}
        {/*<p>￥400/天 佳能（Canon）EOS 100D 单反套机（EF 40mm f/2.8 STM镜头）</p>*/}
        {/*<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#"*/}
        {/*class="btn btn-default"*/}
        {/*role="button">Button</a>*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="col-sm-4 col-md-3">*/}
        {/*<div className="thumbnail">*/}
        {/*<img src={picture1} className="picture"/>*/}
        {/*<p>￥400/天 佳能（Canon）EOS 100D 单反套机（EF 40mm f/2.8 STM镜头）</p>*/}
        {/*<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#"*/}
        {/*class="btn btn-default"*/}
        {/*role="button">Button</a>*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*</div>*/}

        {/*/!*</div>*!/*/}

        {/*/!*<div className="row">*!/*/}
        {/*<div className="col-sm-4 col-md-3">*/}
        {/*<div className="thumbnail">*/}
        {/*<img src={picture1} className="picture"/>*/}
        {/*<p>￥400/天 佳能（Canon）EOS 100D 单反套机（EF 40mm f/2.8 STM镜头）</p>*/}
        {/*<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#"*/}
        {/*class="btn btn-default"*/}
        {/*role="button">Button</a>*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="col-sm-4 col-md-3">*/}
        {/*<div className="thumbnail">*/}
        {/*<img src={picture1} className="picture"/>*/}
        {/*<p>￥400/天 佳能（Canon）EOS 100D 单反套机（EF 40mm f/2.8 STM镜头）</p>*/}
        {/*<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#"*/}
        {/*class="btn btn-default"*/}
        {/*role="button">Button</a>*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="col-sm-4 col-md-3">*/}
        {/*<div className="thumbnail">*/}
        {/*<img src={picture1} className="picture"/>*/}
        {/*<p>￥400/天 佳能（Canon）EOS 100D 单反套机（EF 40mm f/2.8 STM镜头）</p>*/}
        {/*<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#"*/}
        {/*class="btn btn-default"*/}
        {/*role="button">Button</a>*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*</div>*/}
        {/*<div className="col-sm-4 col-md-3">*/}
        {/*<div className="thumbnail">*/}
        {/*<img src={picture1} className="picture"/>*/}
        {/*<p>￥400/天 佳能（Canon）EOS 100D 单反套机（EF 40mm f/2.8 STM镜头）</p>*/}
        {/*<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#"*/}
        {/*class="btn btn-default"*/}
        {/*role="button">Button</a>*/}
        {/*</p>*/}
        {/*</div>*/}
        {/*</div>*/}

        {/*</div>*/}


        {/*<div className="picture-describe">*/}
        {/*<a href="#"><img src={Image2} className="picture"/>*/}
        {/*<p>￥400/天 佳能（Canon）EOS 6D 单反套机（EF 24-105mm f/4L IS USM 镜头）</p></a>*/}
        {/*</div>*/}
        {/*<div className="picture-describe">*/}
        {/*<a href="#"><img src={Image3} className="picture"/>*/}
        {/*<p>￥100/天 极限X1山地车自行车油压碟刹气压减震可锁死前叉变速铝合金</p></a>*/}
        {/*</div>*/}
        {/*<div className="picture-describe">*/}
        {/*<a href="#"><img src={Image4} className="picture"/>*/}
        {/*<p>￥100/天 单车20/22/24/26寸21变速铝合金双v双碟刹 21速铝合金车架</p></a>*/}
        {/*</div>*/}
        {/*<div className="picture-describe">*/}
        {/*<a href="#"><img src={Tent1} className="picture"/>*/}
        {/*<p>￥50/天 TAWA露营液压自动帐篷户外套装 双层防雨野营郊游野外露营帐帐篷 </p></a>*/}
        {/*</div>*/}
        {/*<div className="picture-describe">*/}
        {/*<a href="#"> <img src={Tent2} className="picture"/>*/}
        {/*<p>￥50/天 牧高笛户外装备 防风防暴雨三季铝杆双人双层帐篷 驴友强推白色</p></a>*/}
        {/*</div>*/}
        {/*<div className="picture-describe">*/}
        {/*<a href="#"><img src={Tent3} className="picture"/>*/}
        {/*<p>￥50/天 牧高笛户外装备 防暴雨铝杆三季帐三人双层帐野外野营帐篷 军绿色</p></a>*/}
        {/*</div>*/}
        {/*<div className="picture-describe">*/}
        {/*<a href="#"><img src={Knapsack1} className="picture"/>*/}
        {/*<p>￥40/天 户外尖锋 山地骑行包运动双肩包旅行旅游背包 </p></a>*/}
        {/*</div>*/}
      </div>
    )
  }
}
class Rent extends React.Component {
  render() {
    return (
      <div>
        <SelectArea />
        <Picture />
      </div>
    )
  }
}
export default Rent;




import React, { Component } from "react";
import HeadTitle from "../common/headtitle";
import { Card,Toast } from "antd-mobile";
import * as imageService from "../../request/action/image";
class ImageRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records:[]
    };
  }
  async componentDidMount() {
    const recognitionRecords = await imageService.getRecognition();
    if(recognitionRecords.status == 200) {
      // 处理时间
      
      this.setState({
        records:recognitionRecords.data
      })
    } else {
      Toast.fail("出错了，重新试下吧~",2)
    }
  }
  render() {
    return (
      <div>
        <HeadTitle content="识图记录" back="/find" />
        {this.state.records.map((value,index)=>{
          return (
            <Card key={value.id} full className="recognition-card">
          <Card.Header
            title={value.keyword}
            // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
          extra={<span>{value.translation}</span>}
          />
          <Card.Body>
            <div>
              <img
                className="recognition-img"
                src={value.path}
              />
            </div>
          </Card.Body>
          <Card.Footer
            content={value.datetime}
            extra={<div>extra footer content</div>}
          />
        </Card>
          )
        })}
        

        
      </div>
    );
  }
}

export default ImageRecognition;

import React, { Component } from "react";
import HeadTitle from "../common/headtitle";
import { Card, Toast, ActivityIndicator } from "antd-mobile";
import * as imageService from "../../request/action/image";
import * as util from "../../util";
class ImageRecognition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      Loading: (
        <div
          style={{
            position: "fixed",
            top: "50%",
            width: "100vw",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator text="Loading..." />
          </div>
        </div>
      ),
      ifLoading: true,
    };
  }
  async componentDidMount() {
    const recognitionRecords = await imageService.getRecognition();
    if (recognitionRecords.status == 200) {
      // 处理时间
      recognitionRecords.data.forEach((value)=>{
        value.datetime = util.timeProcessor(value.datetime)
      }) 
      this.setState({
        records: recognitionRecords.data,
        ifLoading: false,
      });
    } else {
      if ([106, 107, 108, 200].indexOf(recognitionRecords.status) == -1) {
        Toast.fail("出错了，重新试下吧~", 2);
        console.log(recognitionRecords);
      }
    }
  }
  render() {
    return (
      <div>
        <HeadTitle content="识图记录" back="/find" />
        {this.state.ifLoading ? this.state.Loading : null}

        {this.state.records.map((value) => {
          return (
            <Card key={value.id} full className="recognition-card">
              <Card.Header
                title={value.keyword}
                extra={<span>{value.translation}</span>}
              />
              <Card.Body>
                <div>
                  <img className="recognition-img" src={value.path} />
                </div>
              </Card.Body>
              <Card.Footer
                content={value.datetime}
              />
            </Card>
          );
        })}
      </div>
    );
  }
}

export default ImageRecognition;

import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  padding-top: 30px;
  width: 960px;
`
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  float: right;
  width: 280px;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -10px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  margin-left: 10px;
  margin-bottom: 10px;
  padding-right: 10px;
  float: left;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topicItem_pic {
    margin-right: 10px;
    display: block;
    float: left;
    width: 32px;
    height: 32px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .listItem_pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  float: right;
  width: 500px;
  .listTitle {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .listDesc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.$imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 278px;
  height: 300px;
  line-height: 300px;
  text-align: center;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
`;

export const LoadMoreButton = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  text-align: center;
  background: #a5a5a5;
  color: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 20px;
  cursor: pointer;
`;

export const BackToTop = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px;
  width: 40px;
  height: 40px;
  line-height: 60px;
  text-align: center;
  // background: #a5a5a5;
  // color: #fff;
  border: 1px solid #ccc;
  border-radius: 20px;
  cursor: pointer; 
`;

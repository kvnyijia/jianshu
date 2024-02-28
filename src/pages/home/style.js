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
  width: 240px;
`

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -10px;
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
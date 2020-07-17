import styled from 'styled-components'

export const Article = styled.article`
  border-radius: 30px;
  border: 10px solid #FCCF1A;
  background: #DE8D32;
  box-shadow: 5px 10px #3d3d3d;
  margin-bottom: 60px;
  margin-left: 20%;
  margin-right: 20%;
  transition: transform 700ms ease-in-out;

  &:hover {
    transform: rotate(360deg)
  }
`
export const Header = styled.header`
  font-size: 20px;
  color: black;
  padding: 16px;
`
export const Caption = styled.div`
  padding: 16px 16px;
  text-align: center;
`
export const CaptionParagraph = styled.p`
  height: 300px;
  background: #DE8D32
  text-align: center;
  padding: 10px;
`
export const Name = styled.strong`
  font-family: 'PT Sans', sans-serif;
  font-size: 20px;
  color: black;
  font-weight: bold;
`
export const Image = styled.img`
  display: block;
  width: 80%;
  margin-left: 10%;
  padding: 2vh 0;
  background: black;
`
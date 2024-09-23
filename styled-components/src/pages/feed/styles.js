import styled from "styled-components";

export const Container = styled.main`
    width: 80%;
    height: 0 auto;
    margin: 120 auto 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 24px;
    line-height: 25px;
    color: white;
`

export const TitleHighLight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF7d;
    margin-bottom: 24px;
`

export const Column = styled.div`
    flex: ${({ flex }) => flex};
    padding-right: 24px;
`
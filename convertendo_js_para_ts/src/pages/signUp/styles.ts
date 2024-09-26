import styled from "styled-components";

export const Container = styled.div`

    width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {
        width: 390px;
    }
`

export const LeftContainer = styled.div`
    h2 {
        font-size: 32px;
        font-family: 'Open Sans';
        font-size: 700;
        left: 44px;
    }
`

export const RightContainer = styled.div`
    margin-top: 12px;

    display: flex;
    flex-direction: column;
`

export const TitleSignUp = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
`

export const SubtitleSignUp = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`

export const AgreeTermsText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin: 35px 0;
`

export const HasAccountText = styled.p`
    font-size: 14px;
    font-family: 'Open Sans';
    font-weight: 700;
    line-height: 20px;

    span {
        color: #22c470;
        cursor: pointer;
    }
`

export const Wrapper = styled.div `
    flex: 1;
    max-width: 300px;
    display: block;
`
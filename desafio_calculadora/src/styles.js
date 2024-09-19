import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #808080;
    width: min(60vw, 820px);
    height: 75vh;
    padding: 10px 20px 20px;
    border-radius: 10px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    width: 100%;
    height: 100%;

    @media screen and (max-height: 440px) {
        gap: 0;
    }
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
import React from 'react';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`;

const Gola = styled.div`
    height: 70px;
    width: 70px;
    border-radius: 50%;
    display: inline-block;
    background-color: #FE320A;
    margin: 1vw 2vw;
`;

const MovingText = () => {
    const Container = styled.div`
        white-space: nowrap;
        display: inline-block;
        animation: ${move} 10s linear infinite;
    `;

    const MovingTextContainer = styled.div`
        overflow-x: auto;
        white-space: nowrap;

        &::-webkit-scrollbar {
            display: none;
        }
    `;

    const Heading = styled.h1`
        font-size: 9vw;
        display: inline-block;
    `;

    return (
        <MovingTextContainer id="moving-text">
            <Container className="con">
                <Heading>EXPERIENCES</Heading>
                <Gola></Gola>
                <Heading>CONTENT</Heading>
                <Gola></Gola>
                <Heading>ENVIRONMENTS</Heading>
                <Gola></Gola>
            </Container>
            <Container className="con">
                <Heading>EXPERIENCES</Heading>
                <Gola></Gola>
                <Heading>CONTENT</Heading>
                <Gola></Gola>
                <Heading>ENVIRONMENTS</Heading>
                <Gola></Gola>
            </Container>
            <Container className="con">
                <Heading>EXPERIENCES</Heading>
                <Gola></Gola>
                <Heading>CONTENT</Heading>
                <Gola></Gola>
                <Heading>ENVIRONMENTS</Heading>
                <Gola></Gola>
            </Container>
        </MovingTextContainer>
    );
}

export default MovingText;

import React from 'react';
import styled from 'styled-components';
import Person from 'react-icons/lib/md/person';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    /* 레이아웃 */
    width: ${props => props.size };
    height: ${props => props.size };
    display: flex;
    align-items: center;
    justify-content: center;

    /* 기타 */
    border-radius: calc(${props => props.size} * 0.5); /* 동그라미가 되려면 이 값이 사이즈의 1/2 이상이어야 함 */
    font-size: calc(${props => props.size} * 0.75);

    /* 색상 */
    background: ${props => props.color};
    color: white;
`;

Wrapper.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
};

const Thumbnail = ({size, color}) => (
    <Wrapper size={size} color={color}>
        <Person/>
    </Wrapper>
);

Thumbnail.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
};


Thumbnail.defaultProps = {
    size: '4rem',
    color: '#000'
};

export default Thumbnail;
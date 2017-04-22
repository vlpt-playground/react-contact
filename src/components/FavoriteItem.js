import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PersonIcon from 'react-icons/lib/md/person';

const Wrapper = styled.div`
    /* 레이아웃 */
    width: 50%;
    padding: 0.5rem;
`;

const Box = styled.div`
    background: ${props => props.color};
`;

const ThumbnailContainer = styled.div`
    /* 레이아웃 */
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    

    /* 색상 */
    color: white;

    /* 기타 */
    font-size: 4rem;
`;

const Info = styled.div`
    background: rgba(0,0,0,0.1);
    color: white;
    text-align: center;
    padding: 1rem;
`;

const Name = styled.div`
    font-size: 1.25rem;
    font-weight: 500;
`;

const Phone = styled.div`
    font-weight: 300;
    font-size: 0.8rem;
    opacity: 0.8;
    margin-top: 0.25rem;
`;


const FavoriteItem = ({contact: { color, name, phone }}) => (
    <Wrapper>
        <Box color={color}>
            <ThumbnailContainer>
                <PersonIcon/>
            </ThumbnailContainer>
            <Info>
                <Name>{name}</Name>
                <Phone>{phone}</Phone>
            </Info>
        </Box>
    </Wrapper>
);

FavoriteItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        phone: PropTypes.string,
        color: PropTypes.string,
        favorite: PropTypes.bool
    })
};

export default FavoriteItem;
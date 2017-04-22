import React from 'react';
import styled from 'styled-components';
import FavoriteItem from './FavoriteItem';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    /* 레이아웃 */
    position: relative; /* 자식 컴포넌트의 크기를 이 컴포넌트의 50% 로 설정하기 위함 */
    display: flex;
    flex-wrap: wrap; /* 공간이 부족하면 다음 줄에 보여줌 */
`;

const FavoriteList = ({contacts}) => {
    const favoriteList = contacts
                        .filter( // 즐겨찾기 필터링
                            contact => contact.favorite
                        ).map(
                            contact => (
                                <FavoriteItem 
                                    key={contact.id} 
                                    contact={contact}
                                />
                            )
                        );

    return (
        <Wrapper>
            {favoriteList}
        </Wrapper>
    );
};

FavoriteList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
};

export default FavoriteList;
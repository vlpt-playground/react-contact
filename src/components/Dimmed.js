import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Black = styled.div`
    /* 레이아웃 - 화면 꽉 채움 */
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    
    /* 레이어 */
    z-index: 5;

    /* 색상 */
    background: rgba(0,0,0,0.3);
`;


const Dimmed = ({visible}) => (
    <div>
        {visible && <Black/>}
    </div>
);

Dimmed.propTypes = {
    visible: PropTypes.bool
};

export default Dimmed;
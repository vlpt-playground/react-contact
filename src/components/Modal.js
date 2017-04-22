import React, { Component } from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import {media, transitions} from '../lib/style-utils';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import PropTypes from 'prop-types';

// 모달 위치 및 사이즈 설정
const Wrapper = styled.div`
    /* 레이아웃 */
    position: fixed;
    /* 화면 가운대로 정렬 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* 레이어 */
    z-index: 10;

    /* 너비 (기본값 400px) */
    width: ${ props => props.width };

    /* 모바일일땐 양옆 여백 1rem 에 꽉 채우기 */
    ${media.mobile`
        width: calc(100% - 2rem);
    `}

    .modal-enter {
        animation: ${transitions.slideDown} .5s ease-in-out;
        animation-fill-mode: forwards;
    }

    .modal-leave {
        animation: ${transitions.slideUp} .5s ease-in-out;
        animation-fill-mode: forwards;
    }
`;

Wrapper.propTypes = {
    width: PropTypes.string
};

// 모달 틀
const ModalBox = styled.div`
    background: white;
    border: 1px solid rgba(0,0,0,0.3);
`

class Modal extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        onHide: PropTypes.func,
        width: PropTypes.string
    }

    static defaultProps = {
        width: '400px'
    }

    // 컴포넌트 외부를 클릭하면 실행되는 메소드 
    handleClickOutside = (e) => {
        const { visible, onHide } = this.props;

        if(!visible) return null; // 이미 visible 이 false 라면 아무것도 안함
        onHide();
    }

    // Esc 키가 클릭되면 onHide 를 실행한다
    handleKeyUp = (e) => {
        const { onHide } = this.props
        if (e.keyCode === 27) {
            onHide();
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        // visible 값이 변할 때:
        if(prevProps.visible !== this.props.visible) {
            
            if(this.props.visible) {
            // 방금 보여졌다면
                // body 에 keyUp 이벤트 등록해서 Esc 키를 감지한다.
                document.body.addEventListener('keyup', this.handleKeyPress);
            } else { 
            // 방금 사라졌다면
                document.body.removeEventListener('keyup', this.handleKeyPress);
            }
        }
    }
    

    render() {
        // 레퍼런스 생성
        const {visible, children, width} = this.props;

        return (
            <div>
                <Wrapper width={width}>
                    <CSSTransitionGroup
                        transitionName="modal"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        {
                            /* visible 이 참일때만 ModalBox 보여줌 */
                            visible && (<ModalBox>{children}</ModalBox>)
                        }
                    </CSSTransitionGroup>
                </Wrapper>
            </div>
        );
    }
}

// onClickoutside 라이브러리 적용
export default onClickOutside(Modal);
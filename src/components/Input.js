import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Input = styled.input`
    /* 레이아웃 */
    width: 100%;
    padding: 0.5rem;

    /* 색상 */
    border: 1px solid ${oc.gray[2]};

    /* 기타 */
    font-size: 1.5rem;
    line-height: 2rem;
    transition: all .25s;

    /* 입력중일때 */
    &:focus {
        outline: none;
        border: 1px solid ${oc.pink[3]};
        color: ${oc.pink[6]};
    }

    /* 컴포넌트 사이 간격 */
    & + & {
        margin-top: 1rem;
    }
`;

Input.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

export default Input;
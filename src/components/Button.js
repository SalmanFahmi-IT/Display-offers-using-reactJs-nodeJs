import styled from 'styled-components';

const Button = styled.button`
background: ${props => props.primary ? '#4bd663' : '#0077e2'};
color: #fff;
padding: 0.5em 3em;
border: 0;
border-radius: 12px;
cursor: pointer;
`;

export default Button;
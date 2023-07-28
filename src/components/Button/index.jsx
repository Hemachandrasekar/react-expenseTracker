import React from 'react'
import { styled } from 'styled-components'

const Button = ({ name, onClick, icon, bg, color, bradius, bpadding }) => {
    return (
        <ButtonStyle onClick={onClick} style={{ background: bg, padding: bpadding, color: color, borderRadius: bradius }}>{icon} {name}</ButtonStyle>
    )
}
const ButtonStyle = styled.button`
    outline: none;
    border:none;
    font-family: inherit;
    font-size:inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
`
export default Button
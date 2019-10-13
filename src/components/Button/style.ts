import styled, { css } from "styled-components"

interface IContainerProps {
  borderless?: boolean
}

export const Container = styled.button<IContainerProps>`
  height: 0%;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  background-color: ${props => props.theme.palette.background.primary};
  color: ${props => props.theme.palette.text.primary};
  border: 1px solid ${props => props.theme.palette.text.primary};
  border-radius: ${props => props.theme.spacing.sm};
  text-transform: uppercase;
  font-size: ${props => props.theme.size.xs};
  transition: color 0.1s linear;
  display: flex;
  align-items: center;

  &:hover {
    color: ${props => props.theme.palette.link.primary};
    border-color: ${props => props.theme.palette.link.primary};
  }

  ${props =>
    props.borderless &&
    css`
      border: none;
    `}
`

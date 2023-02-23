import { down } from 'styled-breakpoints'
import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    overflow: hidden;

    ${down('lg')} {
        display: none;
    }
`

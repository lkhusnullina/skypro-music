import styled from 'styled-components'

export const SidebarItem = styled.div`
  width: 250px;
  height: 150px;
  &:not(:last-child) {
    margin-bottom: 30px;
    color: red;
  }
`
export const SidebarLink = styled.a`
  width: 100%;
  height: 100%;
`

export const SidebarImg = styled.img`
  width: 100%;
  height: auto;
`

export const SkeletonAudioPlayer = styled.div`
  height: 150px;
  width: 250px;
  background: #313131;
`

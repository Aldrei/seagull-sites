import { CSSProperties, styled } from 'styled-components'

export const FormWrapper = styled.div``

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;

  &:nth-child(1) {
    margin-right: 5px;
  }

  &:nth-child(2) {
    margin-left: 5px;
  }
`

/**
 * Select
 */
export const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

export const groupBadgeStyles: CSSProperties = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
}

export const formatGroupLabel = (data: any) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
)

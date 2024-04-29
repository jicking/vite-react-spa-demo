/* eslint-disable @typescript-eslint/no-explicit-any */
/*
React.FC (Function Component)
It comes with built-in typings for children and props.
Makes it easy to define defaultProps and propTypes.
*/
import React, { ReactNode, CSSProperties } from 'react'

interface CustomComponentProps {
  name: string
  description?: string
  children?: ReactNode
  style?: CSSProperties
  [key: string]: any // Allow any other props
}

const FunctionComponentDemo: React.FC<CustomComponentProps> = ({
  name,
  description,
  children,
  style,
  ...rest
}) => {
  return (
    <div style={style} {...rest}>
      <div>{name}</div>
      <div>{description}</div>
      {children}
    </div>
  )
}

FunctionComponentDemo.defaultProps = {
  description: 'no description',
}

export default FunctionComponentDemo

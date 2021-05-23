import * as React from 'react'

type ComponentType =
  | 'a'
  | 'blockquote'
  | 'code'
  | 'delete'
  | 'em'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'hr'
  | 'img'
  | 'inlineCode'
  | 'li'
  | 'ol'
  | 'p'
  | 'pre'
  | 'strong'
  | 'sup'
  | 'table'
  | 'td'
  | 'thematicBreak'
  | 'tr'
  | 'ul'
  | string

export type Components = {
  [key in ComponentType]?: React.FC
}


export type ClassNameType                   = string


export type ThemeType                       = 'light' | 'dark'
export type SocialLinkType                  = { label: string | JSX.Element, link:string }
export type CategoryLinkType                = { label: string, link:string }
export type SVGType                         = { width?: number | string, height?: number | string, fill?:string, stroke?:string, className?:string }


export type SSGBlogStaticParamType          = Array<{ blogId: string }>



export type NextResponseType                = { status: boolean, data: any | null, count?: number } 
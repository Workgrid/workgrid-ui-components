// inspired from: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/rehype-react/index.d.ts
declare module 'rehype-react' {
  import { HastNode } from './notification'

  interface Options {
    createElement: typeof React.createElement
    Fragment?: React.ComponentType<{ children?: React.ReactNode }>
    components?: {
      [tagName: string]: React.ComponentType<never> | string
    }
    prefix?: string
  }

  declare class RehypeReact {
    constructor(options: Options)
    Compiler: (
      node:
        | { type: 'element'; tagName: string; properties?: HastNode['properties']; children?: HastNode[] }
        | { type: 'text'; value: string }
    ) => never
  }

  export = RehypeReact
}

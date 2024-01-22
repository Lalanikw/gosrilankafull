// types/df-messenger.d.ts
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'df-messenger'?: any;
  }
}

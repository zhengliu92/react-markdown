/// <reference types="vite/client" />

declare module "*.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

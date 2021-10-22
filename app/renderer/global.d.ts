declare module '*.jpg' {
    const jpg: string;
    export default jpg;
  }
  declare module '*.png' {
    const png: string;
    export default png;
  }
declare module '*.less' {
    const calsses: { [key: string]: string } ;
    export default calsses;
  }
  declare module 'rc-redux-model';
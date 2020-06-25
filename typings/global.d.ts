interface Window {
  $store: any;
  $electronStore: any;
}

declare module "promise-status-async" {
  const promiseStatus: (promise: Promise<any>) => string;
}

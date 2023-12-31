/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
export interface IUser{
  id?:string,
  name:string,
  secondName:string,
  surname:string,
  email:string,
  city:string,
  fullName: string,
  // eslint-disable-next-line no-use-before-define
  assets: IAssetModelShort [] | [],
  approvement: boolean;
}
export type TUserUpdates = Partial<IUser>

export interface IHistory{
  id?:string,
  owner: string;
  date:string,
  comments:string,
  lastModified:string
}
export enum assetStatus{
  warehouse = 'Склад',
  assigned = 'Назначено',
  repair = 'В ремонте'
}
export interface IAssetModel{
  id?:string,
  type:string,
  model:string,
  serialNumber:string,
  owner: string,
  history: IHistory[],
  status:assetStatus,
  city:string
}
export type TAssetModelUpdates = Partial<IAssetModel>

export interface IAssetModelShort{
  id?:string,
  type:string,
  model:string,
  serialNumber:string,
}
export interface ICity{
  id:string,
  name:string,
}
export interface IModelType{
  id:string,
  name:string,
}

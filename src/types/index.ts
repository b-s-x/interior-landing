export interface IIcon {
  height?: string | number
  width?: string | number
  color?: string
  className?: string
  style?: object
  viewBox?: string
  children?: React.ReactNode
  params?: object
};

export interface IDataViewMore {
  id?: number
  title: string
  content: string
}

export interface IDataPeopleAboutInfo {
  id?: number
  avatar: string
  name: string
  surname: string
  city: string
  country: string
  content: string
}
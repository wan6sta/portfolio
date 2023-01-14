import axios, { AxiosResponse } from 'axios'

export interface MessageModel {
  name: string
  gmail: string
  text: string
}

export const contactApi = {
  sendOnEmail: (message: MessageModel) => {
    return axios.post<undefined, AxiosResponse<string>, MessageModel>(
      'https://feedback-wan6sta.vercel.app/message',
      message
    )
  }
}

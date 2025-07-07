import { AxiosResponse } from "axios";

export function handleApiErrors(response: AxiosResponse) {
  // console.log(response);
  if (response.status < 200 || response.status > 300)
    throw Error(response.statusText);
  return response;
}

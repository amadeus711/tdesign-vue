import { XhrOptions } from './interface';

export default function xhr({
  action,
  withCredentials = false,
  headers = {},
  data = {},
  file,
  name = 'file',
  onError,
  onProgress,
  onSuccess,
}: XhrOptions) {
  const xhr = new XMLHttpRequest();
  if (withCredentials) {
    xhr.withCredentials = true;
  }

  // set send data
  const formData = new FormData();
  const sendData = typeof data === 'function' ? data(file) : data;
  Object.keys(sendData).forEach((key) => {
    formData.append(key, data[key]);
  });
  formData.append(name, file.raw);

  xhr.open('post', action, true);

  // custom request headers
  Object.keys(headers).forEach((key) => {
    xhr.setRequestHeader(key, headers[key]);
  });

  xhr.onerror = (event: ProgressEvent) => onError({ event, file });

  xhr.onprogress = function (event: ProgressEvent) {
    let percent = 0;
    if (event.total > 0) {
      percent = Math.round((event.loaded / event.total) * 100);
    }
    onProgress({ event, percent, file });
  };

  xhr.onload = function (event: ProgressEvent) {
    let response;
    const isFail = xhr.status < 200 || xhr.status >= 300;
    if (isFail) {
      return onError({ event, file, response });
    }
    const text = xhr.responseText || xhr.response;
    try {
      response = JSON.parse(text);
    } catch (e) {
      response = text;
    }
    onSuccess({ event, file, response });
  };

  xhr.send(formData);

  return xhr;
}

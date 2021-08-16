import api  from '../index.js'

export function getData() {
  const response = api
    .get(`dados`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err)
    });
  return response;
}

export function getSingleData(id) {
  const response = api
    .get(`/dados/${id}`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err)
    });
  return response;
}

export function postFile(file) {
  const formData = new FormData();
  formData.append('file', file)
  const response = api
    .post('import', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err)
    });
  return response;
}


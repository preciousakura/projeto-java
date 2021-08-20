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

export function getExcelFile() {
  const response = api
    .get(`/dados/export`, {
      responseType: 'blob',
    })
    .then(res => {
       const url = window.URL.createObjectURL(new Blob([res.data]));
       const link = document.createElement('a');
       link.href = url;
       link.setAttribute('download', 'dados.xlsx'); //or any other extension
       document.body.appendChild(link);
       link.click();
    })
    .catch(err => {
      return err
    });
  return response;
}



export async function postFile(file) {
  try {
    const formData = new FormData();
    formData.append('file', file)
    const response = await api
    .post('dados/import', formData, {
      headers:
            {
                'Content-Disposition': "attachment; filename=dados.xlsx",
                'Content-Type': 'multipart/form-data'
            },
    })

    let data = response;
    return data;
  } catch (error) {
    return error.response;
  }
}

export function editSingleData(data) {
  const response = api
    .put(`dados`, data)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err)
    });
  return response;
}

// export function postFile(file) {
  // const formData = new FormData();
  // formData.append('file', file)
//   const response = api
//     .post('dados/import', formData, {
//       headers:
//             {
//                 'Content-Disposition': "attachment; filename=dados.xlsx",
//                 'Content-Type': 'multipart/form-data'
//             },
//     })
//     .then(res => {
//       return res.status
//     })
//     .catch(err => {
//       return err.response
//     });
// }



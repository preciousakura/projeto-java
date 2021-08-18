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



import { Inputs } from '@/interfaces/Inputs'
interface Parameters {
  data: Inputs
  onSucces?: () => void
  onError?: () => void 
}

const api = 'https://server-rumco-production.up.railway.app/api/redirects'
// const api = 'http://localhost:3000/api/redirects'


export const postRequest = async ({data, onSucces, onError}: Parameters) => {
  try {
    const response = await fetch(api, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
     const result= await response.json()
     if (response.status === 200 || response.status === 201 ) {
      if (onSucces)onSucces()
     }
     else {
      if (onError) onError()
     }
    return result
  } catch (error) {
    if (onError) onError()
    console.log(error)
  }

}
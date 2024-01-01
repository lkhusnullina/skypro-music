const logHost = 'https://skypro-music-api.skyeng.tech/user';

export async function getTrackAll() {
   const response =  await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/', {
    headers: {
        Authorization: ``,
      },
   })

   if(!response.ok) {
    throw new Error('ошибка сервера')
   }
   const data = await response.json();
   return data;    
} 

export  async function registerUser({ email, password, username }) {
   const response = await fetch(logHost + '/signup/', {
     method: 'POST',
     body: JSON.stringify({
      email,
      password,
      username,
     }),
     headers: {
       "content-type": "application/json",
     },
   })
   return response.json();
};
 
export async function loginUser({ email, password }) {
   const response = await fetch(logHost + '/login/', {
     method: 'POST',
     body: JSON.stringify({
       email,
       password,
     }),
     headers: {
      "content-type": "application/json",
     },
   })
   return response.json();
};
 
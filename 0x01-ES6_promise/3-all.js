import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((values) => {
    const [photoResponse, userResponse] = values;
    console.log(photoResponse.body, userResponse.data.firstName, userResponse.data.lastName);
  })
    .catch(() => {
      console.log('Signup system offline');
    });
}

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const data = await uploadPhoto();
    const data2 = await createUser();
    return {
      photo: data,
      user: data2,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

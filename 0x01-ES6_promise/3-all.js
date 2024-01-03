import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
        const values_1 = await Promise.all([uploadPhoto(), createUser()]);
        console.log(values_1[0].body, values_1[1].firstName, values_1[1].lastName);
    } catch {
        console.log('Signup system offline');
    }
}

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {

  const results = await Promise.allSettled([signUpUser(firstName, lastName).then((value) => value),
    uploadPhoto(fileName).catch((error) => error)]);

  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
}

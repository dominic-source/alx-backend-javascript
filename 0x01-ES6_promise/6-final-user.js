import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const values_1 = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
    return [
        {
            status: values_1[0].status,
            value: values_1[0].status === 'fulfilled' ? values_1[0].value : values_1[0].reason,
        },
        {
            status: values_1[1].status,
            value: values_1[1].status === 'fulfilled' ? values_1[1].value : values_1[1].reason,
        },
    ];
}

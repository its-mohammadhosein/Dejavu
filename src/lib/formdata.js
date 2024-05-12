import axios from "axios";
import { SignJWT } from "jose";
import { cookies } from 'next/headers';

const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(every) {
    return await new SignJWT(every).setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime(1500).sign(key);
}




export async function login(formdata) {
    const user = { username: formdata.get('username') };
    const password = { password: formdata.get('password') };
    axios.post('http://localhost:3000/api/compare', { username: user.username, password: password.password })
        .then((res) => {
            console.log(res.data);
        });
    console.log(user, password);

    const expires = new Date(Date.now() + 10 * 1000);
    console.log(expires);
    const session = await encrypt({ ...user, expires });
    console.log(session);
    cookies().set('session', session, { expires, httpOnly: true });
}
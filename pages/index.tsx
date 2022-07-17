import { useEffect } from 'react'

//redirect to login page (so you don't need to share link with /login)
export default function Index() {
    useEffect(() => {
        location.href = "/login";
    });
}

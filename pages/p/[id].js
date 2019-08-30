import {useRouter} from 'next/router';
//import Layout from '../../components/Layouts';

export default function Post() {
    const router = useRouter();

    return (
        <div>
            <h1>{router.query.id}</h1>
        </div>
    )
}
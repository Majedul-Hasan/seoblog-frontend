import Layout from '../../components/Layout';
import Link from 'next/link';
import PrivateAuthComponent from '../../components/Auth/PrivetAuthComponent';



const UserIndex = () => {
    return (
        <Layout>
            <PrivateAuthComponent >
                <h2>User Dashboard</h2>
            </PrivateAuthComponent>
        </Layout>
    );
};

export default UserIndex;
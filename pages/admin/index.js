import Layout from '../../components/Layout';
import Link from 'next/link';
import AdminAuthComponent from '../../components/Auth/AdminAuthComponent';



const AdminIndex = () => {
    return (
        <Layout>
            <AdminAuthComponent>
                <h2>Admin Dashboard</h2>
            </AdminAuthComponent>

            
        </Layout>
    );
};

export default AdminIndex;
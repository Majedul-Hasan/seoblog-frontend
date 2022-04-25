import Layout from '../components/Layout';
import Link from 'next/link';
import SignupComponent from '../components/Auth/SignupComponent';



const Signup = () => {
    return (
        <Layout>
            <h2>Signup page</h2>
            <SignupComponent />
            {/*<a href='/home'>Home</a>*/}
        </Layout>
    );
};

export default Signup;

import SigninComponent from '../components/Auth/SigninComponent';
import Layout from '../components/Layout';



const Signin = () => {
    return (
        <Layout>
            <h2 className='text-center py-4'>Signin </h2>
            <div className='row' >
                <div className="col-md-6 offset-md-3" >
                    <SigninComponent  />
                </div>
            
            </div>
            
        </Layout>
    );
};

export default Signin;

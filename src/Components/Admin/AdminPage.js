import styles from './adminPage.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const AdminPage = (props) => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!props.isAuth) {
          navigate('/admin');
        }
      }, [props.isAuth, navigate]);

    if(props.isAuth){
        console.log(props.isAuth)
        return(
            <div></div>
        )
    }else{
        return navigate('/admin')
    }
    
}

export default AdminPage
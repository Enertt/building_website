import styles from './admin.module.css'
import checkHash from './settings';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const Admin = (props) => {

  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
      try {
        const isPasswordCorrect = await checkHash(inputValue);
        props.loginThunkCreator(inputValue)
        debugger
        if (isPasswordCorrect) {
          props.loginAC(true)
          setInputValue('')
          navigate('/adminLogined');
        } else {
          setInputValue('')
          console.log('err');
        }
      } catch (error) {
        console.error('Произошла ошибка при проверке пароля:', error);
      }
  };

  return (
      <div className={styles.wrapper}>
          <div className={styles.content}>
              <span>Key</span>
              <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
              />
              <button onClick={handleSignIn}>Sign In</button>
          </div>
      </div>
  )
}

export default Admin
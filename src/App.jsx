import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="formContainer">
      <form>
        <h1>ログインフォーム</h1><hr />
        <div className="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <input type="text" placeholder='ユーザー名' name='username' />
          </div>
          <div className="formField">
            <label>メールアドレス</label>
            <input type="text" placeholder='メールアドレス' name='mailAdress' />
          </div>
          <div className="formField">
            <label>パスワード</label>
            <input type="text" placeholder='パスワード' name='password' />
          </div>
          <button className="submitButton">登録</button>
        </div>
      </form>
    </div>
  )
}

export default App

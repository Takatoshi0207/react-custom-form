import { useState } from "react";
import "./App.css";

function App() {
  const initialValues = { username: "", mailAddress: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  return (
    <div className="formContainer">
      <form>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className="formField" onChange={handleChange}>
            <label>ユーザー名</label>
            <input
              type="text"
              placeholder="ユーザー名"
              name="username"
              value={formValues.username}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formField">
            <label>メールアドレス</label>
            <input
              type="text"
              placeholder="メールアドレス"
              name="mailAddress"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formField">
            <label>パスワード</label>
            <input
              type="text"
              placeholder="パスワード"
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className="submitButton">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default App;

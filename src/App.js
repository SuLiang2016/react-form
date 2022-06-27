/*
 * @moduleName: 入口
 * @Author: yunt.Su
 * @Date: 2022-06-26 22:20:59
 * @LastModifiedBy: yunt.Su
 * @LastEditTime: 2022-06-27 23:58:32
 */
import './App.less';

import AntdForm from './pages/AntdForm';
import MyForm from './pages/MyForm';

function App() {
  return (
    <div className="App">
        {/* react-form */}
        {/* <AntdForm></AntdForm> */}
        <MyForm/>
    </div>
  );
}

export default App;

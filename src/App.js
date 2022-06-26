/*
 * @moduleName: 入口
 * @Author: yunt.Su
 * @description: [description]
 * @Date: 2022-06-26 22:20:59
 * @LastModifiedBy: yunt.Su
 * @LastEditTime: 2022-06-26 23:38:23
 */
import './App.less';

import AntdForm from './comp/AntdForm';

function App() {
  return (
    <div className="App">
        {/* react-form */}
        <AntdForm></AntdForm>
    </div>
  );
}

export default App;

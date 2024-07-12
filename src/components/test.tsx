import React, { useState } from 'react';
import axios from 'axios';

const Test: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = () => {
    setLoading(true); // 设置加载状态为 true

    // 发起网络请求
    axios.get('/api/test')
      .then(response => {
        setData(response.data.testData); // 设置数据到 state 中
        setLoading(false); // 设置加载状态为 false
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // 设置加载状态为 false
      });
  };

  return (
    <div>
      <h2>Test Page</h2>
      <p>This is a test page for SQL contact.</p>

      {/* 添加一个按钮用于触发查询 */}
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch Data'}
      </button>

      {/* 根据 data 中的数据进行渲染 */}
      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <div>Name: {item.name}</div>
              <div>Age: {item.age}</div>
              <div>Email: {item.email}</div>
              <div>Created At: {item.created_at}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Test;

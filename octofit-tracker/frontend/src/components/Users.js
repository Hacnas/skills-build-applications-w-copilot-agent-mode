import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const apiUrl = codespace
    ? `https://${codespace}-8000.app.github.dev/api/users/`
    : `${window.location.protocol}//${window.location.host}/api/users/`;

  useEffect(() => {
    console.log('Fetching from:', apiUrl);
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Fetched users:', results);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, [apiUrl]);

  return (
    <div>
      <h2>Users</h2>
      <ul className="list-group">
        {users.map((u, i) => (
          <li key={i} className="list-group-item">
            {u.name} ({u.email}) - Team: {u.team}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Users;

import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const apiUrl = codespace
    ? `https://${codespace}-8000.app.github.dev/api/activities/`
    : `${window.location.protocol}//${window.location.host}/api/activities/`;

  useEffect(() => {
    console.log('Fetching from:', apiUrl);
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Fetched activities:', results);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [apiUrl]);

  return (
    <div>
      <h2>Activities</h2>
      <ul className="list-group">
        {activities.map((a, i) => (
          <li key={i} className="list-group-item">
            {a.type} - {a.duration} min ({a.user})
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Activities;

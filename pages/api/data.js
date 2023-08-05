// pages/api/data.js
import db from '../../utils/db';

export default async (req, res) => {
  try {
    const query = 'SELECT * FROM your_table_name';
    db.query(query, (error, results) => {
      if (error) {
        console.error('Error fetching data from MySQL:', error);
        res.status(500).json({ error: 'Error fetching data from MySQL' });
      } else {
        res.status(200).json(results);
      }
    });
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

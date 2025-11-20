import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api_estudiantes', 
  password: '2018.cl1nv3R', 
  port: 5432,
});

import app from './src/app';

const port = process.env.SERVER_PORT;

const server = app.listen(port, () => {
  console.log(`The server is running at http://127.0.0.1:${port}`);
});

export default server;

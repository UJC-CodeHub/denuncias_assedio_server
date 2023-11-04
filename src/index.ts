import { app } from "./app/app";

const port = process.env.SERVER_PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

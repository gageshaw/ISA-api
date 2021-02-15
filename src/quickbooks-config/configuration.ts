import { registerAs } from '@nestjs/config';

export default registerAs('qb', () => ({
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  redirect_uri: process.env.REDIRECT_URI,
  environment: process.env.ENVIRONMENT,
}));

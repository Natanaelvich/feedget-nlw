import IoRedis from "ioredis";

const redis = new IoRedis({
  host: process.env.REDIS_HOST,
  username: process.env.REDIS_USER,
  password: process.env.REDIS_PASSWORD,
});

export default redis;

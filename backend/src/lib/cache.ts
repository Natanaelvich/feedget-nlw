import IoRedis from "ioredis";

const redis = new IoRedis({
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD,
  port: Number(process.env.REDIS_PORT),
});

export default redis;

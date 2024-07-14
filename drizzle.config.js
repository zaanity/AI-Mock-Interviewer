/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://Ai_mocker_inter_owner:4BNogy6LwWGQ@ep-misty-bird-a535ywuv.us-east-2.aws.neon.tech/Ai_mocker_inter?sslmode=require',
    }
  };
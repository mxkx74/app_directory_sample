/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // production環境ではtestidを削除する
  reactRemoveProperties:
    process.env.NODE_ENV === "production"
      ? { properties: ["^data-testid$"] }
      : false,
  // production環境ではerror以外のconsoleを削除する
  removeConsole:
    process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
};

module.exports = nextConfig;

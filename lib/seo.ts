export const seo = {
  title: 'CoXcommunity | 开发者、CoXcommunity创始人',
  description:
    '我叫麦当，一名开发者，一名AIGC全栈创作人。同时也是CoXcommunity创始人，目前带领着CoXcommunity致力于创造一个充分发挥AIGC创造力的工作环境，同时鼓励团队创造影响世界的产品。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://www.coxcommunity.top/'
      : 'http://localhost:3000'
  ),
} as const

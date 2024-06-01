import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { RichLink } from '~/components/links/RichLink'
import { Container } from '~/components/ui/Container'

import AlipayQR from './alipay-qr.png'
import WX_group from './微信截图_20240601182224.png'


const title = 'AMA 一对一咨询'
const description =
  '我们提供一对一的咨询服务（Ask Me Anything）。我们有非常丰富的AIGC创作经验、全栈开发、优化工作流设计、创业经验、自动化工作经验，内容创作等经验，可以为你解答相关的问题。'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Ask Me Anything / 一对一咨询
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>我们能提供什么？</h2>
        <p>我们可以为你解答以下相关的问题：</p>
        <ul>
          <li>
            <b> AIGC创业咨询</b>
            ：评估您的AIGC概念的可行性和市场潜力。选择合适的AI技术和工具，为您的解决方案提供动力。
          </li>
          <li>
            <b> MVP创建</b>：指导您开发最小可行产品（MVP），快速测试和迭代您的想法。
          </li>
          <li>
            <b>定制解决方案</b>
            ：为您的企业量身定制AIGC解决方案，助力业务增长。
          </li>
          <li>
            <b>其他</b>
            ：AIGC制作经验等等，都可以帮助你解答一些其他的问题。
          </li>
        </ul>
        <p>
          你也可以选择和我们闲聊，我也非常乐意，因为可能我们真的是一群很有趣的人。。。
        </p>

        <h2>定价</h2>
        <p>我们咨询的价格为：</p>
        <ul>
          <li>
            <strong>¥150 - 30分钟</strong>
          </li>
          <li>
            <strong>¥300 - 60分钟</strong>
          </li>
        </ul>

        <p className="flex justify-center md:block md:justify-start">
          <span className="inline-flex flex-col items-center">
            <Image src={AlipayQR} alt="" className="w-44 dark:brightness-90" />
            <span className="mt-1 text-sm font-medium">支付宝二维码</span>
          </span>
        </p>

        <h2>联系方式</h2>
        <p>
          你可以通过以下途径联系到我们
          加入交流群和我们一起侃大山，能够帮助到更多的人一直是CoXcommunity的使命：
        </p>
        <p className="grid items-center gap-4 lg:grid-cols-2">
          <Image
            src={WX_group}
            alt=""
            className="max-w-full"
          />
        </p>
      </article>
    </Container>
  )
}

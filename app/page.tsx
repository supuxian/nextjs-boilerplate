'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              普大师聊AI
            </div>
            <div className="hidden md:flex space-x-8">
              {['首页', '关于我', '作品', '成就', '爱好', '联系'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item)}
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30">
                <span className="text-blue-400 text-sm">All in AI 大健康产业赋能者</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  普大师聊AI
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                一位All in AI的大健康产业赋能者、跨界者和实践家。10年+大健康产业实战经验，致力于用AI技术重塑大健康商业生态圈。
              </p>
              <div className="flex space-x-4">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  微信公众号：普大师聊AI
                </button>
                <button className="px-8 py-3 border border-blue-400 rounded-full hover:bg-blue-400/10 transition-all duration-300">
                  关注我
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20"></div>
              <Image
                src="/avatar.jpg"
                alt="普大师"
                width={400}
                height={400}
                className="relative rounded-full border-4 border-blue-400/50 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            关于我
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20">
              <div className="text-blue-400 text-6xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">行业背景</h3>
              <p className="text-gray-300">
                10年+大健康产业实战经验，从编程技术背景转型，现任新化康复按摩医院稀龄商学院院长。
              </p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20">
              <div className="text-blue-400 text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">AI专长</h3>
              <p className="text-gray-300">
                深耕AI应用两年，系统学习AI编程、AI智能体开发与各类AI工具，赋能大健康产业。
              </p>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20">
              <div className="text-blue-400 text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">核心目标</h3>
              <p className="text-gray-300">
                打造AI时代的大健康商业生态圈，真正解决行业痛点，推动产业数字化转型。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            我的作品
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">稀龄堂中医馆</h3>
              <p className="text-gray-300 mb-4">
                联合创始人。从顶层设计探索产业的运营和发展，并将其作为AI赋能的实践基地。
              </p>
              <div className="flex items-center text-blue-400 group-hover:text-cyan-400 transition-colors">
                <span>了解更多</span>
                <span className="ml-2">→</span>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">正道书院</h3>
              <p className="text-gray-300 mb-4">
                联合创始人。专注于AI时代的家庭教育探索与实践。
              </p>
              <div className="flex items-center text-blue-400 group-hover:text-cyan-400 transition-colors">
                <span>了解更多</span>
                <span className="ml-2">→</span>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">"销售心法"与健康咨询模式</h3>
              <p className="text-gray-300 mb-4">
                个人独创的思考与实践体系，核心理念是"真正的销售，始于对客户需求的深度洞察"。
              </p>
              <div className="flex items-center text-blue-400 group-hover:text-cyan-400 transition-colors">
                <span>了解更多</span>
                <span className="ml-2">→</span>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-blue-900/50 to-cyan-900/50 p-8 rounded-2xl border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20">
              <h3 className="text-2xl font-bold mb-4 text-blue-400">"AI + IP"运营模式</h3>
              <p className="text-gray-300 mb-4">
                当前聚焦的核心战略，旨在通过人工智能与个人品牌结合，为大健康产业插上翅膀。
              </p>
              <div className="flex items-center text-blue-400 group-hover:text-cyan-400 transition-colors">
                <span>了解更多</span>
                <span className="ml-2">→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            我的成就
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">1000+</div>
              <p className="text-gray-300">培训学员数量</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">40-200%</div>
              <p className="text-gray-300">学员业绩增长</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">10+</div>
              <p className="text-gray-300">年行业经验</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">多家</div>
              <p className="text-gray-300">AI成功案例</p>
            </div>
          </div>
          <div className="mt-12 bg-slate-900/50 p-8 rounded-2xl border border-blue-400/20 shadow-lg shadow-blue-500/10">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">核心成就</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <span className="text-2xl">👥</span>
                <div>
                  <h4 className="font-bold mb-2">千人培训导师</h4>
                  <p className="text-gray-300">亲自培训超过1000家养生馆和近千名学员</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">📈</span>
                <div>
                  <h4 className="font-bold mb-2">业绩增长引擎</h4>
                  <p className="text-gray-300">帮助学员实现40%到200%的业绩增长</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">🤖</span>
                <div>
                  <h4 className="font-bold mb-2">AI落地先锋</h4>
                  <p className="text-gray-300">成功辅导多家养生馆利用AI建设私域流量池</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl">🧘</span>
                <div>
                  <h4 className="font-bold mb-2">个人修行者</h4>
                  <p className="text-gray-300">十多年坚持吃素，潜心学习中华传统文化</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            我的爱好
          </h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-12 rounded-3xl border border-blue-400/20 shadow-lg shadow-blue-500/10">
            <div className="flex items-center space-x-6 mb-8">
              <span className="text-6xl">👶</span>
              <div>
                <h3 className="text-2xl font-bold mb-2">母亲与AI教育探索者</h3>
                <p className="text-gray-300">一位1岁大孩子的母亲，这份新身份让我对未来、对教育有了全新的思考。</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              工作之余，我最大的热情在于探索AI时代的家庭教育。为此，我与新化康复按摩医院联合创立了正道书院，
              希望能将我在商业、传统文化和AI领域的所学，全部投入到孩子的成长培育中，并与更多志同道合的父母一起，
              为我们的下一代构建一个更智慧、更健康的未来。
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-slate-800/50 p-4 rounded-xl shadow-lg shadow-blue-500/10">
                <span className="text-3xl mb-2 block">📚</span>
                <span className="text-sm text-gray-300">家庭教育</span>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl shadow-lg shadow-blue-500/10">
                <span className="text-3xl mb-2 block">🤖</span>
                <span className="text-sm text-gray-300">AI教育</span>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl shadow-lg shadow-blue-500/10">
                <span className="text-3xl mb-2 block">🏛️</span>
                <span className="text-sm text-gray-300">传统文化</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            联系方式
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-blue-400/20 text-center shadow-lg shadow-blue-500/10">
                <span className="text-5xl mb-4 block">📱</span>
                <h3 className="text-2xl font-bold mb-4">微信二维码</h3>
                <p className="text-xl text-blue-400 mb-4">普大师AI探索</p>
                <div className="bg-white p-4 rounded-xl inline-block">
                  <Image
                    src="/wechat-qr.jpg"
                    alt="微信二维码"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="bg-slate-900/50 p-8 rounded-2xl border border-blue-400/20 text-center shadow-lg shadow-blue-500/10">
                <span className="text-5xl mb-4 block">💬</span>
                <h3 className="text-2xl font-bold mb-4">微信</h3>
                <p className="text-xl text-cyan-400 mb-6">puxian527</p>
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                  添加微信
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 border-t border-blue-400/20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 普大师 AI探索. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            All in AI 大健康产业赋能者
          </p>
        </div>
      </footer>
    </div>
  );
}

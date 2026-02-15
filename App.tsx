import React from 'react';

const navItems = [
  { label: '제품', href: '#product' },
  { label: '기능', href: '#features' },
  { label: '요금', href: '#pricing' },
  { label: '문의', href: '#contact' },
];

const features = [
  {
    title: 'AI 툴 통합 검색',
    description: '카테고리와 목적에 따라 필요한 AI 서비스를 빠르게 탐색할 수 있습니다.',
  },
  {
    title: '워크플로우 자동화',
    description: '마케팅, 개발, 디자인 작업을 자동화하여 팀 생산성을 극대화합니다.',
  },
  {
    title: '팀 협업 대시보드',
    description: '도입한 툴의 활용도와 비용을 한 화면에서 모니터링하고 관리합니다.',
  },
];

const pricing = [
  { name: 'Starter', price: '₩0', desc: '개인 사용자, 기본 탐색 기능' },
  { name: 'Growth', price: '₩39,000', desc: '소규모 팀, 자동화 기능 포함' },
  { name: 'Enterprise', price: '맞춤 견적', desc: '대규모 조직, 보안/운영 지원' },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold text-white">
            AI Nexus
          </a>
          <nav>
            <ul className="flex gap-2 sm:gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -right-10 top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-24 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-4 inline-block rounded-full border border-indigo-300/40 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-200">
                Next Generation AI Tool Platform
              </p>
              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                팀의 업무 속도를 높이는
                <br />
                올인원 AI 랜딩 허브
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                AI Nexus는 다양한 AI 서비스를 검색, 비교, 도입까지 한 번에 진행할 수 있는 플랫폼입니다.
                복잡한 도구 탐색을 줄이고 빠르게 성과를 만드세요.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#pricing"
                  className="rounded-lg bg-indigo-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-indigo-300"
                >
                  무료로 시작하기
                </a>
                <a
                  href="#features"
                  className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  기능 살펴보기
                </a>
              </div>
            </div>

            <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-slate-900 to-slate-900 p-8 shadow-2xl">
              <h2 className="text-xl font-semibold text-white">오늘의 KPI</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  { value: '2,300+', label: '등록된 AI 툴' },
                  { value: '41%', label: '탐색 시간 단축' },
                  { value: '4.9/5', label: '고객 만족도' },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-2xl font-bold text-indigo-200">{item.value}</p>
                    <p className="mt-2 text-xs text-slate-300">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="border-y border-white/10 bg-slate-900/60 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-white">제품 소개</h2>
            <p className="mt-4 max-w-3xl text-slate-300">
              AI Nexus는 수많은 AI 툴을 직관적으로 정리하고, 도입 의사결정까지 돕는 B2B SaaS 플랫폼입니다.
              팀 단위 협업 기능과 자동화 추천으로 AI 활용의 진입장벽을 낮춥니다.
            </p>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-white">핵심 기능</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-slate-300">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="border-y border-white/10 bg-slate-900/60 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-white">요금제</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {pricing.map((plan) => (
                <article key={plan.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-3 text-3xl font-bold text-indigo-200">{plan.price}</p>
                  <p className="mt-2 text-slate-300">{plan.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-white">문의하기</h2>
          <p className="mt-4 text-slate-300">도입 상담 및 데모 요청은 아래로 연락해 주세요.</p>
          <div className="mt-6 rounded-xl border border-indigo-300/30 bg-indigo-400/10 p-6 text-slate-100">
            <p>이메일: hello@ainexus.io</p>
            <p className="mt-2">전화: 02-3456-7890</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} AI Nexus. All rights reserved.
      </footer>
    </div>
  );
};

export default App;

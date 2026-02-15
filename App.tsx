import React from 'react';

const navItems = [
  { label: '회사소개', href: '#about' },
  { label: '서비스', href: '#services' },
  { label: '성과', href: '#impact' },
  { label: '문의하기', href: '#contact' },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold tracking-wide text-white">
            배터리
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
        <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-24 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 inline-block rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Energy Innovation Company
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              더 밝은 내일을 충전하는
              <br />
              스마트 에너지 파트너, 배터리
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              배터리는 기업과 고객의 지속 가능한 성장을 위해 고효율 배터리 솔루션을 제공합니다.
              안정적인 기술력과 빠른 대응으로 차세대 에너지 시장을 선도합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
              >
                상담 요청하기
              </a>
              <a
                href="#services"
                className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                서비스 보기
              </a>
            </div>
          </div>

          <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400/20 via-slate-900 to-slate-900 p-8 shadow-2xl">
            <h2 className="text-xl font-semibold text-white">배터리 핵심 가치</h2>
            <ul className="mt-5 space-y-4 text-slate-200">
              <li>⚡ 고성능 배터리 설계 및 공급</li>
              <li>🌱 친환경 에너지 전환 컨설팅</li>
              <li>🛠️ 산업별 맞춤 유지보수 서비스</li>
            </ul>
          </div>
        </section>

        <section id="about" className="border-y border-white/10 bg-slate-900/60 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-white">회사소개</h2>
            <p className="mt-4 max-w-3xl text-slate-300">
              배터리는 에너지 저장 기술의 혁신을 목표로 설립된 전문 기업입니다.
              우리는 검증된 품질, 신뢰할 수 있는 운영, 고객 중심의 프로젝트 관리로
              다양한 산업군의 에너지 효율을 극대화합니다.
            </p>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-white">서비스</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { title: 'ESS 구축', desc: '기업 환경에 맞춘 에너지 저장 시스템 구축 및 최적화.' },
              { title: '배터리 진단', desc: '실시간 모니터링 기반 배터리 수명 분석과 리포트 제공.' },
              { title: '기술 지원', desc: '도입부터 운영까지 전 주기 컨설팅과 기술 지원 제공.' },
            ].map((service) => (
              <article key={service.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-slate-300">{service.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="impact" className="border-y border-white/10 bg-slate-900/60 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-white">성과</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {[
                { value: '120+', label: '누적 프로젝트' },
                { value: '35%', label: '평균 에너지 비용 절감' },
                { value: '98%', label: '고객 만족도' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
                  <p className="text-3xl font-bold text-cyan-300">{item.value}</p>
                  <p className="mt-2 text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold text-white">문의하기</h2>
          <p className="mt-4 text-slate-300">홍보 및 도입 상담은 아래 연락처로 문의해 주세요.</p>
          <div className="mt-6 rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-6 text-slate-100">
            <p>이메일: contact@battery.co.kr</p>
            <p className="mt-2">전화: 02-1234-5678</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} 배터리. All rights reserved.
      </footer>
    </div>
  );
};

export default App;

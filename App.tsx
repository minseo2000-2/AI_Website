import React from 'react';

const navItems = [
  { label: '서비스', href: '#services' },
  { label: '파트너', href: '#partners' },
  { label: '고객문의', href: '#contact' },
];

const services = [
  {
    title: '배터리 진단 컨설팅',
    description:
      '운영 중인 배터리 설비의 상태를 점검하고, 수명 예측 및 교체 시점을 데이터 기반으로 제안합니다.',
  },
  {
    title: '충전 인프라 구축',
    description:
      '현장 환경에 맞는 충전 스테이션 설계부터 설치, 운영 매뉴얼 제작까지 원스톱으로 지원합니다.',
  },
  {
    title: 'B2B 정기 관리 프로그램',
    description:
      '기업 고객을 위한 정기 점검과 리포트 제공으로 안정적인 배터리 운영과 비용 절감을 실현합니다.',
  },
];

const partners = [
  {
    name: '스마트물류 주식회사',
    focus: '물류 차량용 배터리 교체 주기 최적화 프로젝트 진행',
  },
  {
    name: '그린모빌리티 협동조합',
    focus: '지역 전기이륜차 충전 거점 공동 구축',
  },
  {
    name: '에코테크 솔루션',
    focus: '산업용 배터리 안전관리 프로토콜 공동 연구',
  },
];

const App: React.FC = () => {
  return (
    <div className="site">
      <header className="header">
        <div className="container header-inner">
          <a href="#" className="brand">
            배터리프랜즈
          </a>
          <nav>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <p className="badge">POWER YOUR TOMORROW</p>
            <h1 className="hero-title">
              믿을 수 있는 배터리 운영 파트너,
              <br />
              배터리프랜즈
            </h1>
            <p className="hero-desc">
              배터리프랜즈는 기업과 기관의 배터리 사용 환경을 안전하고 효율적으로 바꾸는 전문 브랜드입니다.
              진단, 구축, 운영관리까지 연결해 더 긴 수명과 더 낮은 운영비를 만들어드립니다.
            </p>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2 className="section-title">서비스</h2>
            <p className="section-desc">현장 중심으로 설계된 핵심 서비스를 제공합니다.</p>
            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className="card">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-desc">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="partners" className="section partner-wrap">
          <div className="container">
            <h2 className="section-title">파트너</h2>
            <p className="section-desc">배터리프랜즈와 함께 성장하는 협력사를 소개합니다.</p>
            <div className="partner-list">
              {partners.map((partner) => (
                <article key={partner.name} className="partner-item">
                  <h3 className="partner-name">{partner.name}</h3>
                  <p className="card-desc">{partner.focus}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">고객문의</h2>
            <p className="section-desc">
              프로젝트 상담, 제휴 문의, 방문 미팅 예약까지 아래 연락처로 편하게 문의해주세요.
            </p>
            <div className="contact-box">
              <p>브랜드명: 배터리프랜즈</p>
              <p>대표: 박민서</p>
              <p>전화번호: 010-7339-4768</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} 배터리프랜즈 | 대표 박민서 | 010-7339-4768</footer>
    </div>
  );
};

export default App;

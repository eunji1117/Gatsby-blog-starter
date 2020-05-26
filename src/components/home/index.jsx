import React from 'react'

import './index.scss'

export const Home = () => (
    <main className="home">
        <h2 id="STACK" className="home__title">STACK</h2>
        <div className="home__skill">
            <div className="skill">
                <span className="skill__img pub">HTML5</span>
                <span className="skill__img pub">CSS3</span>
                <span className="skill__img pub">Javascript</span>
                <span className="skill__img pub">ES6</span>
            </div>
            <div className="skil__detail">
                접근성과 표준을 준수하는 시멘틱 마크업과 CSS로 최대한의 UI를 구현합니다.<br/>
                스크립트는 적절한 요소에 배치하여 렌더링을 고려한 가벼운 웹을 설계합니다. 
            </div>
        </div>
        <div className="home__skill">
            <div className="skill">
                <span className="skill__img front">VueJS</span>
                <span className="skill__img front">ReactJS</span>
                <span className="skill__img front">NextJS</span>
                <span className="skill__img front">SCSS</span>
            </div>
            <div className="skil__detail">
                프레임워크를 활용한 팀 프로젝트 경험으로 UI 설계를 넘어 성능 측면에서의 프론트를 고민하며,<br/>
                확장 가능한 프론트 구현을 위한 모듈화 시스템에 대하여 긍정적인 고민을 즐깁니다.
            </div>
        </div>
        <div className="home__skill">
            <div className="skill">
                <span className="skill__img tool">VScode</span>
                <span className="skill__img tool">Github</span>
                <span className="skill__img tool">Gatsby</span>
                <span className="skill__img tool">BEM</span>
            </div>
            <div className="skil__detail">
                커뮤니케이션과 공유를 원활히 할 수있는 확장성 있는 프로그램을 사용하고,<br/>
                좋은 사용자 경험을 만들기위한 서로간의 소통을 중요하게 생각합니다.
            </div>
        </div>
        <div className="home__experience">
            <h2 id="EXPERIENCE" className="home__title">EXPERIENCE</h2>
            <div className="home__contents content">
                <h3 className="content__title">Web dev self study group</h3>
                <p className="content__sub">개발자 스터디 그룹 (19.09 - )</p>
                <div className="content__detail">
                    <h4 className="detail__title"># GITHUB</h4>
                    <div className="detail__content">
                        <span>LifeCycle의 이해를 통한 local, remote server 연동</span>
                        <span>Git flow 로직의 사용성 및 프로젝트 관리</span>
                    </div>
                    <h4 className="detail__title"># VScode</h4>
                    <div className="detail__content">
                        <span>IntelliSense, Extension 기능과 사용성</span>
                        <span>Git 연결 및 Terminal 사용</span>
                    </div>
                    <h4 className="detail__title"># SASS # BEM</h4>
                    <div className="detail__content">
                        <span>코드의 확장성 측면에서 고려한 방법론과 전처리기에 대한 사용성</span>
                    </div>
                    <h4 className="detail__title"># 세미나</h4>
                    <div className="detail__content">
                        <span>Developer Roadshow 2019 (Mozilla)</span>
                        <span>React Hooks : 훅마법사의 시대 (Developer Circles from Facebook - Seoul)</span>
                        <span>TS + GRAPHQL 기반 API 체험 (Erion compony - 원지혁)</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="home__work">
            <h2 id="WORK" className="home__title">WORK</h2>
            <div className="home__wrap portfolio_spc">
                <div className="home__content">
                    <h3 className="content__title">겟차 웹 프론트 개발 담당</h3>
                    <p className="content__sub">Vue, React(Next), ES6<br/>2020.02 - 재직 중</p>
                    <div className="content__detail">
                        <span><strong>자사 웹 서비스 및 하이브리드 웹뷰 개발</strong></span><br/>
                        <span>반응형 웹 및 랜딩 페이지 작업</span>
                    </div>
                </div>
                <h3>PROJECT</h3>
                <h4>1. 딜러 서비스 개발</h4>
                <p className="work-desc">
                    - Vue.js / 모바일 웹 (20.02-)<br/>
                    - 넓은 사용자층을 고려하여 유저 경험을 우선시한 서비스 로직<br/>
                    - 다양한 데이터 상태값에 분기한 정보 전달로 사용자 친화적 UI 구축<br/>
                    - Lifecycle을 활용한 api 호출 및 데이터 가공의 최적화를 고려한 개발<br/>
                    (infinity scroll, list sort, modal layer)
                </p>
                <h4>2. 하이브리드 웹뷰 개발</h4>
                <p className="work-desc">
                    - Vue.js, Vuex / 모바일 웹 (20.04-)<br/>
                    - 네이티브와 앱뷰 간 데이터 및 url 호출 (query string, call native function)<br/>
                    - 커뮤니티 상세 게시글 내 다양한 첨부 기능 템플릿 작업 (투표, 위치첨부, 별점, 링크 및 이미지)<br/>
                    - 작업 효율성을 고려한 모듈화 작업 (vuex, vue filter)
                </p>
                <h4>3. 자사 반응형 웹 개발</h4>
                <p className="work-desc">
                    - React.js, Next.js / 반응형 웹 (20.05-)<br/>
                    - SEO를 타겟으로 웹 사업 확장을 위한 개발 진행 (실거래가 리스트, 커뮤니티 작업)<br/>
                    - 반응형 작업을 고려한 컨포넌트 구조 설계<br/>
                    - SEO를 고려한 시멘틱 마크업 (접근성 고려 및 meta tag - keyword, og, title)
                </p>
            </div>
        </div>
        <div className="home__portfolio">
            <h2 className="home__title">PORTFOLIO</h2>
            <div className="home__wrap portfolio_spc">
                <div className="home__content">
                    <h3 className="content__title">웹 퍼블리셔 교육 과정 수료</h3>
                    <p className="content__sub">HTML5, CSS3, Javascript, Jquery<br/>2019.10 - 2019.12</p>
                    <div className="content__detail">
                        <span><strong>SPC dining 웹 리뉴얼 프로젝트 진행</strong></span>
                        <span>Grid system / Float, Position / Flex 레이아웃 / 반응형 실습</span>
                        <span>효율적인 인터렉션 구현을 위한 script plugin 실습</span>
                    </div>
                </div>
                <h3>SPC dining 웹 리뉴얼 (19.12 - 19.01)</h3>
                <p>웹 표준, 접근성을 준수하여 더 나은 사용자 경험을 전달하기 위해<br/>
                기존 사이트를 퍼블리싱 관점으로 리뉴얼한 웹 사이트입니다.</p>
                <div className="project_detail">
                    <div className="project_link">
                        <a href="https://spc-dining.netlify.com/" target="_blank">리뉴얼 사이트</a>
                        <a href="http://dining.spc.co.kr/index.do" target="_blank">기존 사이트</a>
                        <a href="https://github.com/eunji1117/SPC-Dining" target="_blank">깃허브 저장소</a>
                    </div>
                    <h4>1. HTML5</h4>
                    <div>
                        <span>웹 표준과 접근성 준수</span>
                        <span>SEO 시스템을 고려한 시멘틱 마크업</span>
                    </div>
                    <div>
                    <h4>2. CSS3</h4>
                        <span>아이콘, 인터렉션 css 구현으로 가벼운 설계</span>
                        <span>가변 단위를 사용한 동적 레이아웃 구조</span>
                        <span><strong>4단계 반응형 Web</strong> : Desktop, Laptop<br/>
                        Tablet ( 960 - 1024px , 720 - 960px ), Mobile ( 720px - )</span>
                    </div>
                    <div>
                    <h4>3. Javascropt, Jquery</h4>
                        <span>스크롤, 버튼 클릭으로 전환되는 원 페이지 인터렉션 구현</span>
                        <span>탭과 버튼으로 컨트롤되는 자동 슬라이드 구현</span>
                        <span>오픈소스 서칭 및 plugin 적용</span>
                    </div>
                </div>
            </div>
            <div className="home__wrap portfolio_react">
                <div className="home__content">
                    <h3 className="content__title">React JS study - Ringle Team Developers</h3>
                    <p className="content__sub">ReactJS, CSS3<br/>2019.11</p>
                    <div className="content__detail">
                        <span><strong>Facebook Web 구현 팀 프로젝트 진행</strong></span>
                        <span>Frontend Framwork 입문</span>
                        <span>API, React LifeCycle에 관한 이해</span>
                        <span>Component 구조, 재사용성, 데이터 상태관리에 대한 고려</span>    
                    </div>
                </div>
                <h3>Facebook Web 구현 팀프로젝트 (19.12 - 20.01)</h3>
                <p>ReactJS를 사용하여 페이스북 SPA를 구현하는 팀 프로젝트를 진행하고 있습니다.</p>
                <div className="project_detail">
                    <div className="project_link">
                        <a href="https://facebook-react.netlify.com/" target="_blank">프로젝트</a>
                        <a href="https://www.facebook.com/" target="_blank">페이스북</a>
                        <a href="https://github.com/hogyun3709/facebook-collab" target="_blank">깃허브 저장소</a>
                    </div>
                    <h4>1. ReactJS</h4>
                    <div>
                        <h5>JSX, ES6 문법을 사용한 컨포넌트 설계</h5>
                        <span>Arrow function, Array method 사용</span>
                        <h5>CRUD (create, read, update, delete)</h5>
                        <span>검색기록, 피드, 댓글의 수정 및 삭제, 친구 검색 기능 적용</span>
                        <h5>재사용이 가능한 component module 설계</h5>
                    </div>
                    <div>
                        <h4>2. CSS3</h4>
                        <div>
                            <span>Flex를 활용한 flexible layout</span>
                            <span>SignIn, Newfeed 등의 다양한 form UI 설계</span>
                            <span>효율적인 이미지 렌더링을 고려한 Sprite img 제작</span>
                            <span>접근성를 고려한 사용자 관점의 웹 구축 (tap, keyboard controll)</span>
                            <span>trantition, tootip, pop over 효과 적용</span>
                        </div>
                    </div>
                    <h4>3. Github</h4>
                    <div>
                        <h5>협업을 위한 Github Study</h5>
                        <span>issue, branch 생성 및 PR review 진행</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
)
import React from "react";
import Header from "../component/header";
import "./works.css";
export default function Works() {
  return (
    <div className="container">
      <Header />
      <div className="works_main">
        {/* <!-- WORKS - INDIVIDUAL --> */}
        <h1 id="individual">WORKS - INDIVIDUAL</h1>
        {/* <!-- 오늘의 날씨 --> */}
        <div className="individual_item">
          <img
            src="https://z9in.github.io/myhome/images/weather_react.jpg"
            alt="오늘의 날씨"
          />
          <div className="works_item_details">
            <h2>오늘의 날씨</h2>
            <h3>주요 구현 내용</h3>
            <ul>
              <li>OpenWeatherMap API 활용</li>
              <li>접속 시 상단 지도를 통해 현재 위치 표시</li>
              <li>하단 정보 창에 현재 온도와 날씨 정보 표시</li>
              <li>지도 내 특정 위치 클릭(탭) 시 해당 지역의 날씨 확인</li>
            </ul>
            <h3>개선 가능성</h3>
            <ul>
              <li>expo를 사용하지 않고 빌드 및 배포할 수 있도록 개발</li>
              <li>native의 기능들을 활용할 수 있도록 방향 설계 필요</li>
              <li>지도 클릭 외에 지역 선택 혹은 검색할 수 있는 기능 반영</li>
            </ul>
            <div className="works_btn">
              <a href="https://github.com/z9in/weather_app_react_native" target="_blank">
                소스코드
              </a>
              <a href="https://z9in.github.io/weatherApp1/" target="_blank">
                다운로드
              </a>
            </div>
          </div>
        </div>
        {/* <!-- 퍼즐 게임 --> */}
        <div className="individual_item">
          <img
            src="https://z9in.github.io/myhome/images/toilet_react.jpg"
            alt="퍼즐"
            style={{ Width: "100px", height: "100%" }}
          />
          <div className="works_item_details">
            <h2>공중화장실 검색</h2>
            <h3>주요 구현 내용</h3>
            <ul>
              <li>공공데이터 활용 : 경기도 공중화장실 위치 데이터</li>
              <li>카카오 MAP API활용</li>
            </ul>
            <h3>개선 가능성</h3>
            <ul>
              <li>추가적인 자료를 수집, 전국 기준으로 진행</li>
              <li>지역 확인 시 주소가 아닌 키워드로 검색 가능토록 방법 모색</li>
            </ul>
            <div className="works_btn">
              <a
                href="https://github.com/z9in/toiletSearch_react"
                target="_blank"
              >
                소스코드
              </a>
              <a href="https://web-toiletsearch-react-422t024lbonwoan.gksl2.cloudtype.app/" target="_blank">
                구현주소
              </a>
            </div>
          </div>
        </div>
        {/* <!-- 신년 인사 --> */}
        <div className="individual_item">
          <img
            src="https://z9in.github.io/myhome/images/new_year.jpg"
            alt="신년 인사"
          />
          <div className="works_item_details">
            <h2>신년 인사</h2>
            <h3>주요 구현 내용</h3>
            <ul>
              <li>모바일 크기에 맞는 디자인 구성</li>
              <li>글자 제한 255자, 작성자 명, 비밀번호 입력</li>
              <li>글쓰기 및 삭제 시 본인 확인(비밀번호 확인)</li>
            </ul>
            <h3>개선 가능성</h3>
            <ul>
              <li>
                비밀번호 암호화 기능 추가 및 DB파일 구성을 통한 보안 정책 향상
                필요
              </li>
            </ul>
            <div className="works_btn">
              <a href="https://github.com/z9in/newyear" target="_blank">
                소스코드
              </a>
              <a
                href="https://port-0-newyear-422t024lbonwoan.gksl2.cloudtype.app/"
                target="_blank"
              >
                구현주소
              </a>
            </div>
          </div>
        </div>
        {/* <!-- WORKS - INDIVIDUAL 끝 --> */}

        {/* <!-- WORKS - TEAM --> */}
        <h1 id="team">WORKS - TEAM</h1>
        {/* <!-- team project 1 --> */}
        <div className="team_item">
          <img
            src="https://z9in.github.io/myhome/images/team_1.jpg"
            alt="tem_project_1"
          />
          <h2>TEAM PROJECT 1</h2>
          <div className="works_item_details">
            <h3>주요 활동 및 역할</h3>
            <ul>
              <li>연구정보, 제품정보 페이지 작성</li>
              <li>
                HTML, CSS, JAVASCRIPT 활용 제품정보 페이지 내 제품검색 및 정렬
                기능 구형
              </li>
            </ul>
          </div>
          <div className="works_item_details">
            <h3>개선 가능성</h3>
            <ul>
              <li>
                제품 목록 작성 시 HTML 내부에 태그 목록으로 사전 제품 리스트
                반영 후 display 속성을 활용하여 제품이 보여지도록 하였음
              </li>
              <li>
                json파일 등을 활용 제품 목록을 외부에 두고 불러오는 형식이 더욱
                효율적일 것
              </li>
            </ul>
          </div>
          <div className="works_btn">
            <a href="https://github.com/z9in/project_DW_home" target="_blank">
              소스코드
            </a>
            <a href="https://z9in.github.io/project_DW_home/" target="_blank">
              구현주소
            </a>
          </div>
        </div>
        {/* <!-- team project 2 --> */}
        <div class="team_item">
          <img
            src="https://z9in.github.io/myhome/images/team_2.jpg"
            alt="tem_project_2"
          />
          <h2>TEAM PROJECT 2</h2>
          <div className="works_item_details">
            <h3>주요 활동 및 역할</h3>
            <ul>
              <li>sqlite를 활용한 데이터베이스 구축</li>
              <li>PRODUCT 페이지 작성 및 기능 구현</li>
              <li>찜목록, 장바구니 임시 저장 기능 구현</li>
            </ul>
          </div>
          <div className="works_item_details">
            <h3>개선 가능성</h3>
            <ul>
              <li>
                로그인관련 토큰, 웹세션 등을 활용하여 보안성을 강화할 수 있을 것
              </li>
              <li>
                데이터베이스 설계 시 회원 개인정보와 회원의 관심 상품 목록을
                이원화하여 관리하는 것이 효율성을 높일 수 있을 것
              </li>
            </ul>
          </div>
          <div className="works_btn">
            <a href="https://github.com/z9in/gilmaro" target="_blank">
              소스코드
            </a>
            <a
              href="https://port-0-gilmaro-422t024lbonwoan.gksl2.cloudtype.app/index"
              target="_blank"
            >
              구현주소
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

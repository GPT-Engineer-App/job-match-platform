# job-match-platform

직업 소개소를 위한 일용직 매칭 플랫폼을 개발할 때, 로그인 화면부터 위치 기반 서비스까지 포함하여 자동화를 구현하려면 다음과 같은 화면 및 기능들을 계획하고 설계할 필요가 있습니다:

로그인 및 회원가입 화면
사용자(구직자 및 고용주)가 계정을 생성하거나 기존 계정으로 로그인할 수 있는 화면.
소셜 미디어 계정 연동을 통한 간편 로그인 옵션.
대시보드 화면
로그인 후 접근하는 주 화면으로, 사용자에게 필요한 기능들을 쉽게 접근할 수 있도록 구성.
구직자는 일자리 검색, 일정 관리, 급여 정보 등을 확인할 수 있음.
고용주는 채용 공고 관리, 지원자 관리, 급여 정산 등을 할 수 있음.
일자리 검색 및 매칭 화면
위치 기반 서비스를 활용하여 사용자의 현재 위치에서 가까운 일자리를 실시간으로 찾아주는 기능.
필터 및 정렬 옵션을 통해 사용자가 원하는 조건의 일자리를 쉽게 찾을 수 있도록 함.
일정 관리 화면
구직자가 자신의 근무 가능 일정을 입력하고, 매칭된 일자리의 일정을 관리할 수 있는 기능.
고용주는 필요한 인력의 근무 일정을 조정하고 확인할 수 있는 기능.
급여 관리 및 정산 화면
일용직 특성에 맞게 근무 시간과 급여를 자동으로 계산하고 정산하는 기능.
급여 이력 및 상세 내역을 확인할 수 있는 화면.
알림 및 통신 화면
중요한 업데이트, 면접 일정, 급여 지급 등에 대한 알림 기능.
구직자와 고용주 간의 직접적인 소통을 가능하게 하는 메시징 기능.
각 화면은 사용자 친화적인 디자인을 적용하고, 효율적인 사용자 경험을 제공하기 위해 직관적인 인터페이스를 구현해야 합니다. 위치 기반 서비스의 정확성과 신뢰성을 확보하기 위해, GPS 기능을 활용하는 것이 중요하며, 사용자의 프라이버시 보호를 위한 적절한 보안 조치도 필수적입니다.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/job-match-platform.git
cd job-match-platform
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

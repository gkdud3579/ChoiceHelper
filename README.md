# Choice Picker
***Choice Picker***는 다양한 선택지로 인해 결정이 어려운 사람들을 위한 랜덤 결과도출 서비스입니다. <br />

![대표사진](/choicePicker/public/ChoicePicker.png)

### https://choice-helper.vercel.app/

## Tech Stack
### Core Technologies
- React
- TypeScript
### Routing
- React Router
### Styling
- Sass

## Quick Start
|||||
|:-:|:-:|:-:|:-:|
|![사진1](/choicePicker/public/ex1.png)|![사진2](/choicePicker/public/ex2.png)|![사진3](/choicePicker/public/ex3.png)|![사진4](/choicePicker/public/ex4.png)|
|||||

1. 선택지 입력: 최대 5개까지 입력 가능합니다.
2. "Submit" 클릭: 입력 완료 후 버튼을 클릭합니다.
3. 결과 확인: 로딩 후 랜덤하게 선택된 결과를 확인합니다.
4. 재도전: "retry" 버튼으로 새로운 선택지 입력 가능합니다.
5. "share your choice" 버튼으로 자신의 결과를 캡쳐하여 저장할 수 있습니다.

## Key Features
### 신속한 선택지 입력
사용자는 최대 5개의 선택지를 입력할 수 있습니다.<br /> 각 입력 필드는 명확하게 구분되어 있어, 사용자가 손쉽게 자신의 선택지를 추가할 수 있습니다.

### 동적 폰트 적용
입력된 텍스트의 언어에 따라 폰트 스타일이 자동으로 적용됩니다. <br /> 한국어 입력 시에는 "korean-font" 스타일이, 그 외의 언어에 대해서는 "english-font" 스타일이 적용되어, 각 언어의 특성에 맞는 가독성을 제공합니다.

### 결과 페이지의 자동 이동 및 랜덤 결과 도출
"Submit" 버튼 클릭 후, 사용자는 3초 간의 로딩 시간을 거쳐 결과 페이지로 자동 이동합니다.<br /> 이 페이지에서는 사용자가 입력한 선택지 중 하나가 랜덤으로 선택되어 표시됩니다. 이 과정은 선택의 고민을 덜어주고, 결정을 도와줍니다.

### 결과 재도전 기능
결과 페이지에서 사용자는 "retry" 버튼을 클릭하여 언제든지 처음부터 선택지를 다시 입력할 수 있습니다.<br /> 이 기능은 사용자가 다른 선택지를 고려하거나 새로운 결정을 내리고자 할 때 유용합니다.

### 결과 캡쳐 저장 기능
결과 페이지에서 사용자는 "share your choice" 버튼을 클릭하여 자신의 결과지를 캡쳐하여 디바이스에 저장할 수 있습니다. 이 기능은 다른 유저들에게 자신의 결과지를 공유할 때 유용합니다.

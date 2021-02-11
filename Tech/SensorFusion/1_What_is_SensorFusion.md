# What is Sensor Fusition

* What is Sensor Fusition?
  * 두개 이상의 데이터 소스를 시스템에 대한 이해를 높이는 방식으로 결합하는 것
  * 센서퓨전은 시간이 지날수록 단일 데이터 소스보다 일관되고 정확하며 신뢰할 수 있는 솔루션을 제공



* Autonomous System

  * 동작 (The physical world)

    1. Sense : 감지 - Collect Data
       * 외부 세계로부터 정보를 수집
       * Radar, Lidar, Camera , etc
    2. Perceive : 인지 - Interpret Data
       * 수집된 데이터를 해석하여 시스템이 이해하고 동작할 수 있도록 변형
    3. Plan : 계획  - Find Path
       * 무엇을 할 지 결정
    4. Act : 동작 - Follow Path
       * 최상의 동작을 계산, 수행
       * Control System

  * Perceive

    * Self-awarenes : Localization or Positioning
      * 내가 어디에 있으며 무엇을 하고 있는지, 어떤 상태에 있는지에 대한 파악
    * Situational awareness : Detection and Traking
      * 주변 환경 상황 인식

  * Sensor Fusion = Sense + Perceive

    * 다중 센서로 측정
    * 측정 값을 결합
    * 수학적 모델의 추가 정보를 혼합

    => 세상을 더욱 잘 이해하는 것을 목표로 함



* 센서 퓨전의 활용
  1. Increase the Quality of the Data
  2. Increase Reliability
  3. Estimate Unmeasured states
  4. Increase Coverage
# 패스트캠퍼스 - AWS 인프라 구축과 DevOps 운영 초격차 패키지

## Part2. AWS 기반 소규모 & 중규모 아키텍트 설계

### 01. AWS 기초와 VPC

#### 13_(VPC) VPC EndPoint 만들기



##### VPC EndPoint	![13_01_VPC Endpoint 예시](./imgs/13_01_VPC Endpoint 예시.png)

* Private Subnet 내에 있는, Private Instance 와 외부 AWS 서비스를 연결하기 위한 서비스
  * Private Instance 는 Private Route Table 에서 외부와의 연결이 차단된다.
* Private Instance 가 외부 인터넷과 차단을 극복
  * Gateway Endpoint 를 통해 다른 AWS 서비스와 연결
  * NAT Gateway 를 통해서도 연결이 가능하지만, AWS 서비스를 사용하기 위한 트래픽이 외부 인터넷에 노출됨 ->  보안 이슈





##### IAM 설정

* S3 에 접근하기 위해서 IAM 설정이 필요

* IAM 역할 만들기

  * IAM 역할 생성

    * 사용 사례 선택 - AWS 서비스:EC2

    * 권한 정책 연결 - AmazoneS3FullAccess

      * 모든 bucket 에 대한 모든 Access 권한

    * 태그 추가

      | 키   | 값(선택사항)  |
      | ---- | ------------- |
      | Name | s3_fullaccess |

    * 검토

      * 역할 이름 - s3_fullaccess
      * 역할 설명 s3_fullaccess

    * 역할 만들기



##### Private EC2 설정

* Private EC2 생성

  * 단계 1: Amazone Machine Image(AMI) 선택 - Amazone Linux 2 AMI / 64비트

  * 단계 2: 인스턴스 유형 선택 - t2.micro (프리티어 사용 가능)

  * 단계 3: 인스턴스 세부 정보 구성

    * 인스턴스 개수 - 1
    * 네트워크 - 실습용 fastcampus-vpc
    * 서브넷 - 실습용 fastcampus-subnet-private
    * 퍼블릭 IP 자동 할당 - 서브넷 사용 설정(비활성화)
    * IAM 역할 - s3_fullaccess
      * IAM 설정 단계에서 생성

  * 단계 4: 스토리지 추가 - skip

  * 단계 5: 태그 추가

    | 키   | 값          | 인스턴스 | 볼륨 | 네트워크 인터페이스 |
    | ---- | ----------- | -------- | ---- | ------------------- |
    | Name | private_ec2 | v        | v    | v                   |

  * 단계 6: 보안 그룹 구성

    * 보안 그룹 할당 - 기존 보안 그룹 생성
      * 기존에 생성해 두었던 실습용 private-sg 이용
    * 보안 그룹 이름 - private-sg
    * 설명 - private-sg

    |      | 유형             | 프로토콜 | 포트범위  | 소스      | 설명 |
    | ---- | ---------------- | -------- | --------- | --------- | ---- |
    | 기본 | SSH              | TCP      | 22        | public-sg |      |
    | 추가 | 모든 ICMP - IPv4 | ICMP     | 0 - 65535 | public-sg |      |

    * private 는 public 네트워크만 연결되도록 설정
      * Inbound / Outbound

  * 검토 및 시작



###### Bastion Host 설정

* Public EC2 생성

  * 단계 1: Amazone Machine Image(AMI) 선택 - Amazone Linux 2 AMI / 64비트

  * 단계 2: 인스턴스 유형 선택 - t2.micro (프리티어 사용 가능)
    * 단계 3: 인스턴스 세부 정보 구성
      * 인스턴스 개수 - 1
      * 네트워크 - 실습용 fastcampus-vpc
      * 서브넷 - 실습용 fastcampus-subnet-public
      * 퍼블릭 IP 자동 할당 - 서브넷 사용 설정(활성화)
        * Public Subnet 설정: 퍼블릭 IPv4 주소 자동 할당 활성화
        * EC2 에 접근하기 위한 Public IP 주소를 할당 하는 설정
          * 인터넷에서 인스턴스에 연결할 수 있도록 Amazon의 퍼블릭 IP 주소 풀에서 퍼블릭 IP 주소를 요청
          * 대부분의 경우 퍼블릭 IP 주소는 중지되거나 종료되어 더 이상 사용할 수 없게 될 때까지 인스턴스와 연결된 상태로 유지

  * 단계 4: 스토리지 추가 - skip

  * 단계 5: 태그 추가

    | 키   | 값         | 인스턴스 | 볼륨 | 네트워크 인터페이스 |
    | ---- | ---------- | -------- | ---- | ------------------- |
    | Name | public_ec2 | v        | v    | v                   |

    * 단계 6: 보안 그룹 구성

      * 보안 그룹 할당 - 기존 보안 그룹 생성

        * 기존에 생성해 두었던 실습용 public-sg 이용

      * 보안 그룹 이름 - public-sg

      * 설명 - public-sg

        |      | 유형             | 프로토콜 | 포트범위  | 소스                    | 설명 |
        | ---- | ---------------- | -------- | --------- | ----------------------- | ---- |
        | 기본 | SSH              | TCP      | 22        | 사용자 지정 - 0.0.0.0/0 |      |
        | 추가 | 모든 ICMP - IPv4 | ICMP     | 0 - 65535 | 사용자 지정 - 0.0.0.0/0 |      |

  * 검토 및 시작





##### S3 버킷 설정

* 버킷 만들기
  * 버킷 이름 - my-vpc-endpoint-check
  * 리전 - 아시아 태평양(서울)ap-northeast-2
    * 기본 설정



##### VPC EndPoint 설정

* EndPoint 생성

  * 서비스 범주 - AWS 서비스

  * 서비스 이름

    | 서비스 이름                      | 소유자 | 유형    |
    | -------------------------------- | ------ | ------- |
    | com.amazoneaws.ap-northeast-2.s3 | amazon | Gateway |

  * VPC - fastcampus-vpc

  * 라우팅 테이블 구성 - private-subnet

* private 라우팅 테이블에 vpce 를 대상으로 하는 항목이 새로 생성됨





##### Private 라우팅 테이블 설정 예시

| 대상               | 대상                 | 상태 |
| ------------------ | -------------------- | ---- |
| pl-*************** | vpce-**************  | 활성 |
| 10.0.0.0/16        | local                | 활성 |
| 0.0.0.0/0          | nat-**************** | 활성 |

* 설정 예시
  * 10.0.0.0/16 에 해당하는 연결은 모두 local
  * 그 외 s3 와 관련된 연결은 모두 EndPoint 로 연결
  * 그 외 연결은 NAT Gateway 와 연결
* NAT Gateway 를 사용하면서 AWS 서비스와 연결되는 트래픽은 EndPoint 로 연결되어 외부 인터넷에 노출되지 않음
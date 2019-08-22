# Private Ethereum Network 환경 구축

## 1. 가상환경 설정

> Virtual Box - 가상머신 : 어떠한 OS 도 설치되어 있지 않은 가상의 데스크탑
>
> Vagrant - 가상머신을 편리하게 사용할 수 있도록 도와주는 프로그램
>
> Virtual Box에 Vagrant를 이용하여 Linux를 설치하고 Linux 환경에서 Geth를 동작한다.

### 1.1 Vagrant

* vagrant init 

  * `Vagrantfile` 이 생성되는 명령어

  * `Vagrantfile` 의 수정으로 가상 머신을 설정 할 수 있다.

  * 주어진 Vagrantfile

    ```
    VAGRANTFILE_API_VERSION = "2"
    
    vms = {
      eth00: ['10', 4096],
      eth01: ['11', 4096],
      eth02: ['12', 2048],
      eth03: ['13', 2048],
      eth04: ['14', 2048],
    }
    
    Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
      config.vm.box = "ubuntu/bionic64"
      vms.map do |key, value|
        name = key.to_s
        ip_num, mem = value
        config.vm.define "#{name}" do |node|
          node.vm.network "private_network", ip: "192.168.50.#{ip_num}"
          node.vm.hostname = "#{name}"
          node.vm.provider "virtualbox" do |nodev|
            nodev.memory = "#{mem}"
          end
        end
      end
    end
    ```

* vagrant up

  * `Vagrantfile` 의 설정사항을 읽어가상머신을 실행하는 명령어
  * Vagrant 실행이 처음이라면 가상머신을 다운로드 받고 설치하고 기동한다.

* vagrant ssh `가상환경 이름`

  * 가상환경으로 접속을 하는 명령어

* 그 외 기본적인 Vagrant 명령어 모음

  | 명령어          | 설명                   |
  | --------------- | ---------------------- |
  | vagrant up      | 가상머신 기동          |
  | vagrant status  | 가상머신 상태 확인     |
  | vagrant ssh     | 가상머신에 접속        |
  | vagrant halt    | 가상머신 정지          |
  | vagrant suspend | 가상머신 휴면          |
  | vagrant resume  | 가상머신 휴면에서 복원 |
  | vagrant reload  | 가상머신 재시동        |
  | vagrant destroy | 가상머신 제거          |



### 1.2 리눅스 초기 설정 및 Geth 설치

* sudo apt-get update
  * 설치되어 있는 APT 패키지 목록 업데이트 명령어
* sudo apt-get install software-properties-common
  * `이 소프트웨어는 사용 된 apt 저장소의 추상화를 제공합니다. 배포 및 독립 소프트웨어 공급 업체 소프트웨어 소스를 쉽게 관리 할 수 있습니다.(????)`
* sudo add-apt-repository -y ppa:ethereum/ethereum
  * 우분투 환경에서 사용가능한 Solidity 바이너리 패키지 설치
  * PPA (Personal Package Archive) - 개인 패키지 장소
    * 우분투의 공식 패키지 저장소에 없는 소프트웨어를 위한 개인용 소프트웨어 패키지 저장소
* sudo apt-get install ethereum
  * ethereum 설치



## 2. Ethereum 설정

1. 폴더생성

   ```
   mkdir -p ~/dev/pri_eth
   ```

2. `Genesis.json` 생성

   * 이더리움 블록의 구조를 설정하는 파일

   * `pri_eth` 폴더 내에 `GENESIS.json` 파일 생성

   ```json
   // vi GENSIS.json
   {
       	// 이더리움 네트워크 설정
           "config": {
        			// 현제 Chain의 식별 값       
                   "chainId": 908429034891304810,
               	// 블록체인의 릴리즈 버전
                   "homesteadBlock": 0,
               	// 하드포크, 하드포크를 하지않는 옵션 값: 0
                   "eip155Block": 0,
                   "eip158Block": 0
           },
       	// 이 블록의 nonce 값을 발견하는 난이도 레벨 설정
           "difficulty": "0x10",
       	// 체인 전체에 대한 블록 당 가스지출의 제한량을 설정한다
           "gasLimit": "9999999",
       	// Genesis 블록 생성 시 지정한 지갑에 할당된 양을 미리 채우는 값
           "alloc": {},
           "extraData": "",
       	// PoW 알고리즘에 사용되는 nonce값
           "nonce": "0xdeadbeefdeadbeef",
       	// nonce값과 결합하여 이 블록에 충분한 양의 계산이 수행되었음을 증명하는 256bit의 해시값, 체인 내에서의 난이도를 결정
           "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
       	// 이전 block header의 Keccak 256bit 해시값
           "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
           "timestamp": "0x00"
   
   }
   ```



3. Go Ethereum 구동

   * Main Node 구동

     ```
     geth --networkid 15150 --datadir ~/dev/pri_eth --port 30303 --rpc --rpcport 8545 --rpcaddr 0.0.0.0 --rpccorsdomain "*" --rpcapi "admin,net,miner,eth,prc,web3,typool,debug,db,personal" console
     ```

   * Sub Node 구동

     ```
     geth --networkid 15150 --maxpeers 5 --datadir ~/dev/pri_eth  --port 30304 console
     ```

4. 구동된 노드 주소 확인

   ```
   admin.nodeInfo.enode
   ```

5. 노드 연결

   ```
   admin.addPeer(노드주소)
   ```

6. 연결된 노드 확인

   ```
   admin.peers
   ```

   


# Geth 명령어 및 채굴

1. `personal.newAccounts("이름")` - 계좌 생성
2. `eth.accounts` - 현재 등록된 계좌 확인
3. `miner.setEtherbase("계정")` - 채굴 시 보상받는 계정
4. `eth.getBalance("계정")` - 계정 잔액 조회
5. `eth.blockNumber` - 생성된 블록 수 조회(마지막 블록 Number 조회)
6. `eth.getBlock("Num")` - Num 번째 블록 정보 출력
7. `personal.unlockAccount("계정")` - 계정 unlock
8. `eth.sendTransacton({from:"계정", to:"계정", value:web3.toWei(액수, 'ether'))` - 송금 (Transaction)
9. `eth.pendingTransactions` - 처리해야 할 트랜잭션 목록
10. `miner.start(n)` - 채굴시작, n: 쓰레드 갯수
11. `miner.stop()`- 채굴 종료
12. `eth.mining` - 채굴 상태 확인
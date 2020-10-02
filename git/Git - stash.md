# GIT - stash

### git stash - 현재 작업중인 내용을 임시 저장하는 기능

- `branch` 변경 시, `commit` 후 `checkout` 을 하면 되지만 작업 도중인 ( `commit` 하지 않은 ) 상태에서의 `branch` 변경시에 작업중인 상태를 안전하게 저장하기 위해 `stash` 기능을 사용 할 수 있다.
- 현재 진행중이던 내용을 언제든지 `git stash` 로 저장해 두고 다른 브랜치로 이동하여 작업한 뒤 다시 돌아와 복구 할 수 있다.
- 또한 저장한 내용을 다른 `branch`로 옮기는 것도 가능하다.



##### 명령어

1. `git stash`: 스테이시로 안정하게 보관
   - 작업 디렉토리와 인덱스 상태가 저장
   - 다른 `branch` 로 `checkout` 가능
2. `git stash list` : 스테이시 목록 조회
   - 현재 `stash area` 에 저장되어 있는 변경사항들을 모두 조회 가능
   - 목록 앞의 stash@{0}는 `stash ID` 로 각각의 저장 내용을 구별짓는 번호
   - `stash` 는 stack 반식으로 동작
     - 가장 최근에 저장한 것이 가장 먼저 나오게 됨
3. `git stash pop` : 저장내용 복구
   - 저장내용을 현재 브랜치에 적용
   - `stash list` 에서 내용 제거
4. `git stash apply` : `stash` 에 저장된 내용을 다른 `branch` 에 적용
   - 저장 내용을 현재 브랜치에 적용하지만 `stash list` 에서 `drop` 하지 않는 차이점이 있다.
     - 여러 `branch` 에 저장된 내용을 저용하는 것이 가능
5. `git stash drop` : `stash` 에 저장된 내용 삭제
   - 특정 `stash` 를 삭제
   - `stash ID` 를 명시하지 않으면,  `pop` 과 같이 나중에 저장된 내용이 삭제 된다
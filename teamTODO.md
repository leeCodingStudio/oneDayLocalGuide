# Members & Roles

- [devstrongman](https://github.com/devstrongman) : 마이페이지
- [leeCodingStudio](https://github.com/leeCodingStudio) : 가이드 검색
- [SeyunKimdev](https://github.com/SeyunKimdev) : 회원가입, 로그인, 메인페이지
- [xhpduk](https://github.com/xhpduk) : 관리자 페이지

---

# Git How

코드 블럭의 우측 버튼 클릭 시 복사 가능.

## Git Clone : 저장소 설정

### 1 : 현재 팀 레포에서 Fork 한 후, 개인 레포에서 sync

```git
https://github.com/jsp-team02/oneDayLocalGuide
```

### 2 : 팀명과 동일한 폴더 생성 후, Git Bash에서 해당 명령어로 Git Clone

```git
git clone https://github.com/jsp-team02/oneDayLocalGuide.git .
```

### 3 : remote 주소 확인 후 변경

#### 3-1 : remote 주소 확인

```git
git remote -v
```

#### 3-2 : 기존 개인 레포 주소였던 origin 제거

```git
git remote remove origin
```

#### 3-3 : 기존 팀 레포 주소였던 jsp-team02 제거

```git
git remote remove jsp-team02
```

#### 3-4 : 개인 레포 주소를 origin으로 설정

```git
git remote add origin 팀레포를_포크한_개인레포주소.git
```

#### 3-5 : 새로 생성한 팀 레포 주소를 jsp-team02로 설정

```git
git remote add jsp-team02 https://github.com/jsp-team02/oneDayLocalGuide.git
```

<br>

## Git Commit : 작업한 파일 공유 및 업데이트

### 1 : 파일 저장 후, Git status 확인

```git
git status
```

### 2 : Git Add

#### 2-1 : 특정 파일만 staging area로 올리기

커밋 메시지를 하나씩 작성해야할 때

```git
git add 파일명.확장자
```

#### 2-2 : 모든 파일을 staging area로 올리기

```git
git add .
```

### 3 : Git Commit

```git
git commit -m "따옴표_제외_지우고_작업한_내용_간단_설명"
```

### 4 : Git Push

로컬에서 작업 완료한 파일을 origin(개인 레포)의 master 브랜치로 push

```git
git push origin master
```

### 5 : 팀 레포를 포크한 개인 레포로 이동 후, Pull request > New pull request

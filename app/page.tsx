/*
 Q. 왜 화면 양 옆에 여백이 생기는걸까?
 A. body에 margin-left, margin-right가 auto로 설정이 되어있어서
 Q. 그래도 여전히 main 콘텐츠의 width를 결정하는 요인을 모르겠다.
 A. body에 max-width가 설정되어있기 때문
 */

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🗝️</span>
        <h1 className="text-2xl">Open your bookshelf</h1>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link href="/create-account" className="primary-btn text-lg py-2.5">
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

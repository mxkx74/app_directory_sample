'use client';

// TODO: エラーのデザインを作る

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <>
      <h2>{error.message}</h2>
      <button
        onClick={() => {
          reset();
        }}
      >
        再レンダリングする
      </button>
    </>
  );
}

"use client";

const Global404 = () => {
  // Return JSX
  return (
    <section className="404-error h-[calc(100%_-_var(--body-padding)_-_var(--body-padding))] min-h-fit bg-white rounded-[2rem] flex items-center justify-center text-center p-body-padding sm:p-[6rem] m-body-padding text-[2.5rem]">
      <h1>
        404 抱歉！
        <br />
        页面未找到。
      </h1>
    </section>
  );
};

export default Global404;

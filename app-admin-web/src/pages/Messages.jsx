function Messages() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-row justify-between flex-none">
        <h1
          className="text-grad-stroke font-[700] text-[36px]"
          data-text="Messages"
        >
          Messages
        </h1>
      </div>
      <div className="flex-1 flex flex-col gap-3 overflow-y-auto min-h-0 snap-y snap-mandatory scroll-smooth">
        <div className="grid grid-cols-12 grid-rows-12 gap-3 p-4 h-full shrink-0 snap-start">
          <div className="col-span-3 row-span-12 p-4 rounded shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] flex flex-col overflow-auto"></div>
          <div className="col-span-9 row-span-12 p-4 rounded shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.15)] flex flex-col overflow-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default Messages;

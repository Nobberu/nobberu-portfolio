import Panel from "./Components/panel";

export default function Hero() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="text-8xl flex flex-col items-center justify-center font-bold">
        <h1 className="mr-37">CRAFTING</h1>
        <h1 className="ml-25">
          <span className="text-main-red">— LOGIC</span> &
        </h1>
        <h1 className="mr-35">TUNING</h1>
        <h1 className="text-main-purple">AESTHETICS.</h1>
      </div>
      <Panel
        className="left-1/16 top-1/4 -rotate-4 scale-110"
        messages={[
          {
            id: 1,
            sender: "them",

            content: (
              <>
                Hey! Is it true that you{"'"}re{" "}
                <span className="font-bold text-main-red">Nobbel</span>?
              </>
            ),
          },
          {
            id: 2,
            sender: "me",
            content: (
              <>
                Yes, I am <b>Nobbel</b>. What is it about?
              </>
            ),
          },
        ]}
      />
      <Panel
        className="top-1/2 right-1/14 rotate-2 scale-90"
        messages={[
          {
            id: 1,
            sender: "me",
            content: (
              <>
                We will work on this <b>as soon as possible</b>.
              </>
            ),
          },
          {
            id: 2,
            sender: "them",
            content: (
              <>
                I{"'"}m so excited to{" "}
                <span className="font-bold text-main-purple">
                  work with you
                </span>
                .
              </>
            ),
          },
        ]}
      />
    </div>
  );
}

import GreenButton from "../Button";

const data = {
  learn: {
    title: "The unseen of spending three years at Pixelgrade",
    text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.`,
    src: "./src/assets/section2/learn/rafiki.svg",
  },
  design: {
    title: "How to design your site footer like we did",
    text: `Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue
        nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat
        a magna. Donec quis erat at libero ultrices mollis. In hac habitasse
        platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis
        finibus. In euismod augue vitae nisi ultricies, non aliquet urna
        tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis
        massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis
        libero. Donec consectetur faucibus ipsum id gravida.`,
    src: "./src/assets/section2/design/pic.svg",
  },
};

export default function Learn({ obj }) {
  let selector;
  if (obj === "learn") {
    selector = data.learn;
  } else if (obj === "design") {
    selector = data.design;
  }

  return (
    <div className="flex justify-between px-[100px] items-center">
      <img
        className="block grow max-w-[420px]"
        src={`${selector.src}`}
        alt=""
      />
      <div className="w-[418px] xl:w-[600px] flex flex-col gap-y-[22px] ">
        <div className="flex flex-col gap-3 ">
          <h2 className="font-semibold text-[25px] text-grayApp pr-5">
            {selector.title}
          </h2>
          <p className="text-[10px] text-grayPApp">{selector.text}</p>
        </div>
        <GreenButton text={"Learn More"} />
      </div>
    </div>
  );
}

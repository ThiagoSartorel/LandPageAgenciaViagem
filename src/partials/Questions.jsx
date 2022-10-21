import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (

    <div
      className="space-y-3 mt-5 overflow-hidden border-b "
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-white font-medium">
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-200">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const faqsList = [
    {
      q: "Lorem ipsum dolor sit amet. Non facere voluptates?",
      a: "Qui magni enim qui laboriosam autem ea dolor corporis. Non optio delectus et similique repellendus qui recusandae quod et dolore totam et obcaecati adipisci..",
    },
    {
      q: "quasi est porro dicta vel quasi laborum et error quam?",
      a: "Qui magni enim qui laboriosam autem ea dolor corporis. Non optio delectus et similique repellendus qui recusandae quod et dolore totam et obcaecati adipisci..",
    },
    {
      q: "Non optio delectus et similique repellendus qui recusandae?",
      a: "Qui magni enim qui laboriosam autem ea dolor corporis. Non optio delectus et similique repellendus qui recusandae quod et dolore totam et obcaecati adipisci..",
    },
    {
      q: "Rem beatae alias ut perspiciatis sapiente quo molestiae molestiae?",
      a: "Qui magni enim qui laboriosam autem ea dolor corporis. Non optio delectus et similique repellendus qui recusandae quod et dolore totam et obcaecati adipisci..",
    },
  ];

  return (
    <section className="leading-relaxed w-full p-12 bg-gray-700 bg-opacity-80 shadow-xl mx-auto">
        <h1 className="h3 mb-4 text-center text-white">
          Perguntas frequentes
        </h1>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
};


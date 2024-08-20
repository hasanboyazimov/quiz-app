//rrd imports
import { useParams } from "react-router-dom";

//custom hooks
import { useFetch } from "../hooks/useFetch";

//react hooks
import { useEffect } from "react";

//componets
import { Test } from "../components";

function Quiz() {
  const { title } = useParams();
  const {
    data: quizzes,
    isPending,
    error,
  } = useFetch(
    `https://json-api.uz/api/project/front-quiz-app/quizzes?title=${title}`
  );

  useEffect(() => {
    document.title = "Quiz" + " " + title;
  }, [title]);
  return (
    <section className="quiz-container container">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {quizzes && <Test questions={quizzes.data[0]}/>}
    </section>
  );
}

export default Quiz;

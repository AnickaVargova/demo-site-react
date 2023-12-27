import "./App.css";
import { useState } from "react";
import img from "./autumn.jpg";

function App() {
  const [showText, setShowText] = useState(true);
  const toggleText = (bool) => setShowText(bool);
  return (
    <div className="App">
      <h1>Demo website</h1>
      {showText && (
        <p>
          A fallacy, is the use of invalid or otherwise faulty reasoning in the
          construction of an argument[1][2] that may appear to be well-reasoned
          if unnoticed. The term was introduced in the Western intellectual
          tradition by the Aristotelian De Sophisticis Elenchis.[3] Fallacies
          may be committed intentionally to manipulate or persuade by deception,
          unintentionally because of human limitations such as carelessness,
          cognitive or social biases and ignorance, or potentially due to the
          limitations of language and understanding of language. These
          delineations include not only the ignorance of the right reasoning
          standard but also the ignorance of relevant properties of the context.
          For instance, the soundness of legal arguments depends on the context
          in which they are made.[4] Fallacies are commonly divided into
          "formal" and "informal." A formal fallacy is a flaw in the structure
          of a deductive argument that renders the argument invalid, while an
          informal fallacy originates in an error in reasoning other than an
          improper logical form.[5] Arguments containing informal fallacies may
          be formally valid, but still fallacious.[3] A special case is a
          mathematical fallacy, an intentionally invalid mathematical proof with
          a concealed, or subtle, error. Mathematical fallacies are typically
          crafted and exhibited for educational purposes, usually taking the
          form of false proofs of obvious contradictions. The Greek philosopher
          Aristotle (384–322 BC) was the first to systematize logical errors
          into a list to make it easier to refute an opponent's thesis and thus
          win an argument.[18]: 2  Aristotle's "Sophistical Refutations" (De
          Sophisticis Elenchis) identifies thirteen fallacies. He divided them
          up into two major types: linguistic fallacies and non-linguistic
          fallacies, some of which depend on language and others that do
          not.[19][20] These fallacies are called verbal fallacies and material
          fallacies, respectively. A material fallacy is an error in what the
          arguer is talking about, while a verbal fallacy is an error in how the
          arguer is talking. Verbal fallacies are those in which a conclusion is
          obtained by improper or ambiguous use of words.[21] An example of a
          language dependent fallacy is given as a debate as to who in humanity
          are learners: the wise or the ignorant.[18]: 3  A language-independent
          fallacy is, for example: "Coriscus is different from Socrates."
          "Socrates is a man." "Therefore, Coriscus is different from a
          man."[18]: 4 (taken from wikipedia)
        </p>
      )}
      <img src={img} alt="autumn" />
      <button onClick={() => toggleText(!showText)}>Toggle text</button>
    </div>
  );
}

export default App;

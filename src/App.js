import "./App.css";
import { useState } from "react";
import img from "./autumn.jpg";

function App() {
  const [showText, setShowText] = useState(true);
  const toggleText = (bool) => setShowText(bool);
  return (
    <div className="App">
      <h1>Demo website</h1>
      {showText && <p>
      Suspendisse orci nisi, semper at lectus lacinia, luctus dignissim enim. Ut
      eget tincidunt sem. In aliquet consequat metus in vestibulum. Sed tellus
      massa, porta sed aliquam quis, euismod vel nibh. Proin interdum viverra
      tortor. Sed dapibus cursus tortor, eget hendrerit est tincidunt ut.
      Integer molestie, massa in tristique porttitor, nibh nunc auctor tellus,
      egestas sagittis ligula velit ut tellus. Quisque et aliquet quam.
      Suspendisse ut fermentum tellus. Donec tempor eget magna et rhoncus.
      Pellentesque molestie consequat metus et dapibus. Aenean vehicula
      tristique aliquet. Nam vestibulum feugiat leo vel pellentesque.
      Suspendisse potenti. Maecenas sit amet elit augue. Ut sodales ut velit eu
      ultricies. Cras tincidunt nunc metus, consectetur pulvinar tellus lacinia
      sed. Ut ut laoreet augue, ut ullamcorper orci. Ut sit amet aliquet purus,
      non rutrum ligula. Proin vitae risus ac orci viverra blandit. Vivamus
      bibendum gravida ex blandit tempor. Integer sit amet pellentesque dolor.
      Cras eleifend enim eu purus efficitur, nec scelerisque erat consectetur.
      Maecenas et diam sed mauris facilisis consequat. Curabitur auctor orci ac
      ante maximus pharetra. Curabitur consequat eget velit aliquet ultricies.
      Sed est leo, facilisis sed nisi id, aliquam ultricies dui. Nam facilisis,
      dolor in efficitur commodo, lectus quam maximus arcu, in condimentum
      mauris purus quis diam. Integer non leo dictum, consequat leo ut, porta
      mauris. Duis risus justo, blandit ac neque id, ornare vehicula velit.
      Aliquam porta ultrices justo vitae molestie. Fusce vestibulum lectus non
      sapien rhoncus pretium.
      </p>}
      <img src={img} alt="autumn" />
      <button onClick={() => toggleText(!showText)}>Toggle text</button>
    </div>
  );
}

export default App;

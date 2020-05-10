import React from "react";
import { MarkdownTextarea } from "markdown-textarea-react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MarkdownTextarea source={DEFAULT_VALUE} />
    </div>
  );
}

const DEFAULT_VALUE = "# *Header tags*\n## *h*<sup>2</sup>*O*\n### h<sub>3</sub>\n### Table\n|header| header2|header3| header4|\n| --- |\n|row1|column2|etc| more|\n|column1|row2|row| more|\n> **Blockquote** with ***inline code*** - `var a = []; ` \n### Code Block\n```\nvar a = [];\nvar b = {};\n```\n#### Unordered List\n- li\n- li\n  - nested li w/ [link](https://www.google.com)\n  - *nested* li w/ **picture** ![trees](https://www.arborday.org/images/hero/medium/hero-aerial-forest-evergreen-trees.jpg)[50]\n- li\n#### Can specify width & height for Images\n![trees](https://www.arborday.org/images/hero/medium/hero-aerial-forest-evergreen-trees.jpg)[100,150] ![trees](https://www.arborday.org/images/hero/medium/hero-aerial-forest-evergreen-trees.jpg)[200] ![trees](https://www.arborday.org/images/hero/medium/hero-aerial-forest-evergreen-trees.jpg)"

export default App;

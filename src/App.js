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

const DEFAULT_VALUE = "# Markdown Syntax\nPackage ***does not*** come with styling\n#### Table\n|header| header2|header3| header4|\n| --- |\n|row1|*column2*|5<sup>5</sup>|column4|\n> **Blockquote** with ***inline code*** - `var a = []; ` \n#### Code Block\n```\nvar a = [];\nvar b = {};\n```\n#### Unordered List\n- Can nest one level deep\n  - list elements can accept inline syntax [link](https://www.google.com)\n  - *Example* w/ **inline elements** ![trees](https://www.arborday.org/images/hero/medium/hero-aerial-forest-evergreen-trees.jpg)[25]\n#### Can specify width & height for Images\n![trees](https://www.arborday.org/images/hero/medium/hero-aerial-forest-evergreen-trees.jpg)[100,150] ![trees](https://www.arborday.org/images/hero/medium/hero-aerial-forest-evergreen-trees.jpg)[200] ![trees](https://www.arborday.org/images/hero/medium/hero-aerial-forest-evergreen-trees.jpg)"

export default App;

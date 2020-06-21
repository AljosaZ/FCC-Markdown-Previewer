import React from 'react';
import Badge from 'react-bootstrap/Badge'
const marked = require("marked");

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      markdown: `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
      ` 
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
      this.setState({
          markdown: event.target.value
      })
  }

  render() {
    const inputStyle = {
      width: "400px",
      height: "50vh",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px"
    };

    var outputStyle = {
      width: "400px",
      height: "50vh",
      overflow: "scroll",
      backgroundColor: "#DCDCDC",
      marginLeft: "auto",
      marginRight: "auto",
      padding:"10px"
    };


    return(
      <div className="App">
        <div className="d-flex flex-column">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                    Markdown Previewer
                </Badge>
              </h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <div className="col text-center">
                <Badge className="text-align-center" variant="secondary">
                  <h4>Editor</h4>
                </Badge>
                <div className="mark-input">
                  <textarea className="input" id="editor" style={inputStyle} value={this.state.markdown} 
                    onChange={this.handleChange}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="col text-center">
                <Badge className="text-align-center" variant="secondary">
                  <h4>Preview</h4>
                </Badge>
              </div>
              <div id="preview" style={outputStyle}
              dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

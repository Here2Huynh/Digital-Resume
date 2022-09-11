// inspired by
// https://codesandbox.io/s/react-typewriter-effect-rdis2?file=/components/Typewriter.js
import React from "react";

class TypeWriter extends React.PureComponent {
  state = { text: "" };

  componentDidMount() {
    this.unmounted = false;
    this.loopNum = 0;
    this.period = 2000;
    this.isDeleting = false;
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  tick = () => {
    if (this.unmounted) return;

    const { data: toRotate, deleteMode } = this.props;
    const i = this.loopNum % toRotate.length;
    const fullText = toRotate[i];

    let newText = "";
    if (this.isDeleting && deleteMode) {
      newText = fullText.substring(0, this.state.text.length - 1);
    } else {
      console.log(fullText, newText);
      newText = fullText.substring(0, this.state.text.length + 1);
    }

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting && deleteMode) delta /= 2;

    if (!this.isDeleting && deleteMode && newText === fullText) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && deleteMode && newText === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    this.setState({ text: newText });

    setTimeout(() => {
      this.tick();
    }, delta);
  };

  render() {
    return <span className="typewriter">{this.state.text}</span>;
  }
}

export default TypeWriter;

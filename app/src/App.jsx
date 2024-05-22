import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
// import "./App.css";

const styles = stylex.create({
  base: {
    color: "#6092e1",
    fontSize: 18,
    marginTop: 0,
  },
  topbar: {
    display: "flex",
    backgroundColor: "white",
    height: "30px",
  },
  top: {
    width: "50%",
  },
  topright: {
    backgroundColor: "#9dbdf2",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    margin: "50px",
  },
  topcontainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  columnwidth: {
    width: "650px",
  },
  topcontainerleft: {
    display: "flex",
    flexDirection: "column",
  },
  topcontainerright: {
    display: "flex",
  },
  pstyle: {
    color: "#6092e1",
    fontSize: "20px",
    margin: "10px",
  },
  psmallstyle: {
    margin: "10px",
  },
  middlecontainer: {
  },
  hrstyle: {
    backgroundColor: "#9dbdf2",
    height: "5px",
    border: "none",
    margin: "30px 100px",
  },
  h1style: {
    color: "#6092e1",
    fontSize: "20px",
    textAlign: "center",
  },
  bottomcontainer: {
    display: "flex",
    height: "500px",
  },
  bottom: {
    flexGrow: 1,
    margin: "10px",
    backgroundColor: "lavender",
  },
  // moveright: {
  //   animationName: moveright,
  //   animationDuration: '1s',
  //   animationIterationCount: 'infinite',
  // },
});


// const moveright = stylex.keyframes({
//   '0%': {left: '0px', top: '0px;'},
//   '100%': {left: '100px', top: '0px;'},
// });

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div {...stylex.props(styles.topbar)}>
        <div class="moverightcss"  {...stylex.props(styles.top)}></div>
        <div {...stylex.props(styles.top, styles.topright)}></div>
      </div>
      <div {...stylex.props(styles.container)}>
        <div {...stylex.props(styles.topcontainer)}>
          <div {...stylex.props(styles.columnwidth, styles.topcontainerleft)}>
            <p {...stylex.props(styles.pstyle)}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
              odio erat. Mauris venenatis tortor arcu, id semper sem accumsan
              quis. Aenean vitae sollicitudin sapien. Nam ac ipsum ut ligula
              mollis venenatis vel consequat magna. Phasellus sit amet tempus
              leo, sed laoreet nisi. Ut efficitur, tortor et posuere
              scelerisque, nisl risus mollis diam, quis venenatis leo odio sed
              metus. Fusce blandit, purus vel gravida placerat, ipsum quam
              sollicitudin sapien, in fermentum quam urna quis ipsum. Fusce
              vulputate mattis est at tristique. Etiam dignissim vitae nulla et
              porta.
            </p>
            <p {...stylex.props(styles.psmallstyle)}>
              Vestibulum scelerisque vitae sem non bibendum. Nulla eros nisi,
              volutpat a molestie eget, malesuada id diam. Vivamus nec augue a
              orci aliquet posuere. Proin quis ornare enim, sed posuere velit.
              Morbi mattis consequat eleifend. Sed luctus, felis sit amet tempus
              tincidunt, nunc nisi sodales ipsum, ut aliquet risus ex vel ipsum.
              Vivamus malesuada quis nisi a auctor. Donec nec condimentum
              lectus.
            </p>
          </div>
          <div {...stylex.props(styles.columnwidth, styles.topcontainerright)}>
            <p {...stylex.props(styles.psmallstyle)}>
              Proin congue lacus a erat dignissim, non tristique nisl convallis.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Mauris tincidunt blandit ultricies. Integer
              tincidunt tellus in venenatis tincidunt. Mauris commodo, leo non
              ullamcorper ullamcorper, tellus mauris semper dui, efficitur
              eleifend ex eros at nunc. Integer lobortis dictum maximus. Nulla
              lacinia, sem eget tristique scelerisque, metus massa aliquam
              nulla, ac maximus nunc lacus at magna. Quisque eget efficitur
              sapien. Aenean ac orci quis nulla efficitur auctor. Suspendisse
              interdum, quam a accumsan tincidunt, diam mauris volutpat felis,
              in volutpat ante enim sed mauris. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
        </div>
        <div {...stylex.props(styles.middlecontainer)}>
          <hr {...stylex.props(styles.hrstyle)} />
        </div>
        <div>
          <h1 {...stylex.props(styles.h1style)}>HEADER</h1>
        </div>
        <div {...stylex.props(styles.bottomcontainer)}>
          <div {...stylex.props(styles.bottom)}></div>
          <div {...stylex.props(styles.bottom)}></div>
          <div {...stylex.props(styles.bottom)}></div>
          <div {...stylex.props(styles.bottom)}></div>
        </div>
      </div>
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;

import * as stylex from "@stylexjs/stylex";
import { PiBrowserFill, PiFilmScriptFill } from "react-icons/pi";
import { DiCssTricks } from "react-icons/di";
import { GrDeploy } from "react-icons/gr";

const styles = stylex.create({
  bottom: {
    flexGrow: 1,
    margin: "10px",
    backgroundColor: "lavender",
  },
  bottomtop: {
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    margin: "15px 0 0 15px",
    textAlign: "center",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    border: "none",
    color: "black",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: 2.5,
    fontSize: "15pt",
    backgroundColor: "#9dbdf2",
  },
  h1style: {
    fontSize: "22px",
    textAlign: "left",
    width: "100px",
    textDecoration: "none",
    color: "black",
  },
  leftmargin: {
    margin: "20px 0 0 20px",
    width: "300px",
    lineHeight: 2,
  },
  marginauto: {
    margin: "10px auto",
    width: "300px",
  },
  hrsmallstyle: {
    backgroundColor: "#9dbdf2",
    height: "1px",
    border: "none",
    margin: "20px 10px",
  },
});

export default function Card({ title }) {
  return (
    <div {...stylex.props(styles.bottom)}>
      <div {...stylex.props(styles.bottomtop)}>
        <div>
          <div {...stylex.props(styles.btn)}>
            {title === "Web" ? (
              <PiBrowserFill />
            ) : title === "Script" ? (
              <PiFilmScriptFill />
            ) : title === "CSS" ? (
              <DiCssTricks />
            ) : (
              <GrDeploy />
            )}
          </div>
        </div>
        <a href="/" {...stylex.props(styles.leftmargin, styles.h1style)}>
          {title}
        </a>
      </div>
      <div {...stylex.props(styles.leftmargin)}>
        <hr {...stylex.props(styles.hrsmallstyle)} />
      </div>
      <div {...stylex.props(styles.marginauto)}>
        Vestibulum scelerisque vitae sem non bibendum. Nulla eros nisi, volutpat
        a molestie eget, malesuada id diam. Vivamus nec augue a orci aliquet
        posuere. Proin quis ornare enim, sed posuere velit. Morbi mattis
        consequat eleifend. Sed luctus, felis sit amet tempus tincidunt, nunc
        nisi sodales ipsum, ut aliquet risus ex vel ipsum. Vivamus malesuada
        quis nisi a auctor. Donec nec condimentum lectus.
      </div>
    </div>
  );
}

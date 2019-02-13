let FirstComponent = () => {
  return <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", width: "323px", height: "100%" }}>
    <div style={{ width: 100, height: 100, backgroundColor: "orange", margin: "4px" }} />
    <div style={{ width: 100, height: 100, backgroundColor: "green", margin: "4px" }} />
    <div style={{ width: 100, height: 100, backgroundColor: "blue", margin: "4px" }} />
    <div style={{ width: 100, height: 100, backgroundColor: "yellow", margin: "4px" }} />
  </div>
};

ReactDOM.render(<FirstComponent />, document.getElementById("root"));

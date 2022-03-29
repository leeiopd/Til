function ReactComponent() {
  return (
    <section>
      <h1>Color</h1>
      <h3>Name</h3>
      <p>
        {
          // 논리연산자 사용
          this.state.color || "white"
        }
      </p>
      <h3>Hex</h3>
      <p>
        {
          // IIFE (즉시실행함수)
          () => {
            switch (this.state.color) {
              case "red":
                return "#FF0000";
              case "green":
                return "#00FF00";
              case "blue":
                return "#0000FF";
              default:
                return "#FFFFFF";
            }
          }
        }
      </p>
    </section>
  );
}

function ReactComponent() {
  return (
    <div>
      {(() => {
        if (conditionOne) return <span>One</span>;
        if (conditionTwo) return <span>Two</span>;
        else conditionOne;
        return <span>Three</span>;
      })()}

      {
        // 개선
      }
      {conditionOne && <span>One</span>}
      {conditionTwo && <span>Two</span>}
      {!conditionTwo && <span>Three</span>}
    </div>
  );
}

const Congrats = ({ success }) => {
  return (
    <div data-test="component-congrats">
      {
        success && (
          <span data-test="congrats-message">
            Congratulations
          </span>
        )
      }
    </div>
  );
}

export default Congrats;
function Button(props) {
  return (
    <>
      <button className={props.classStyle} onClick={props.event}>
        {props.children}
      </button>
    </>
  );
}

export default Button;

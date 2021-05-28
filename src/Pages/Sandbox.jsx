const Sandbox = () => {
  const a = {
    x: 5,
    y: {
      z: t => {
        return t * 5;
      },
    },
  };
  console.log(a);
  const b = Object.assign(a);
  console.log(b);

  return (
    <div>
      <h1>Sandbox</h1>
    </div>
  );
};

export default Sandbox;

import classes from './styles.module.css';

const AnimatedBackground = () => {
  const generateRandomWidth = () => {
    const bases = ['40px', '60px', '100px', '120px'];
    return bases[Math.floor(Math.random() * bases.length)];
  };

  const lines = Array.from({ length: 30 }, () => ({
    width: generateRandomWidth(),
  }));

  return (
    <div className={classes.animatedBackground}>
      {lines.map(({ width }, index) => (
        <div
          className={classes.animatedBackgroundLine}
          key={index}
          style={{
            width,
            animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export { AnimatedBackground };

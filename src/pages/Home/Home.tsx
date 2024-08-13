import CreateVideo from '@components/CreateVideo/CreateVideo';

function Home() {
  const containerStyles = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyles}>
      <CreateVideo />
    </div>
  );
}

export default Home;

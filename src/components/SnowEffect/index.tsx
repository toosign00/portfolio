import Snowfall from 'react-snowfall';

export const SnowrEffect = () => {
  // 12월(크리스마스 시즌)에만 눈 표시
  const isWinterSeason = new Date().getMonth() === 11;

  if (!isWinterSeason) {
    return null;
  }

  return (
    <Snowfall
      color='#e0f2fe'
      snowflakeCount={75}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 1,
      }}
    />
  );
};

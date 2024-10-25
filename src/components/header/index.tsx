const Header = () => (
  <div
    style={{
      border: '1px solid blue',
      display: 'flex',
      height: '150px',
      justifyContent: 'space-between',
    }}
  >
    <div style={{ border: '1px solid', width: '300px' }}>
      <div>логотип</div>
    </div>
    <div style={{ border: '1px solid', textAlign: 'center', width: '100%' }}>
      <h1>Шапка сайта</h1>
    </div>
  </div>
);

export default Header;

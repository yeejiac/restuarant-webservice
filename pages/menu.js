const MenuItem = ({ name, description, price, image }) => (
    <div style={{ border: '1px solid #ccc', marginBottom: '20px', padding: '10px' }}>
      <img src={image} alt={name} style={{ width: '100px', height: '100px' }} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>價格: {price}</p>
    </div>
  );
  
  export default function Menu() {
    const menuItems = [
      { name: '招牌牛排', description: '特選牛排搭配秘製醬料', price: 'NT$500', image: '/images/steak.jpg' },
      { name: '焗烤義大利麵', description: '濃郁奶油醬義大利麵配上起司', price: 'NT$250', image: '/images/pasta.jpg' },
      // 可依需求新增更多菜品
    ];
  
    return (
      <div>
        <h1>菜單</h1>
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    );
  }
  
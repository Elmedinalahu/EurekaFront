const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  padding: 8,
  border: "1px solid #ddd",
}

const tableCellStyle = {
  padding: 8,
  border: "1px solid #ddd",
  color: "blue",
}

export default function F12Main() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 20, fontSize: 20 }}>Page List</h1>
      <table style={{ borderCollapse: 'collapse', border: '1px solid #ddd' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>URL</th>
            <th style={tableHeaderStyle}>Page</th>
          </tr>
        </thead>
        <tbody>
<tr>
            <td style={tableCellStyle}><a href='/Cart'>/Cart</a></td>
            <td style={tableCellStyle}><a href='/Cart'>Cart</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Cart1'>/Cart1</a></td>
            <td style={tableCellStyle}><a href='/Cart1'>Cart</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Checkout'>/Checkout</a></td>
            <td style={tableCellStyle}><a href='/Checkout'>Checkout</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Dashboard'>/Dashboard</a></td>
            <td style={tableCellStyle}><a href='/Dashboard'>Dashboard</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Discussions'>/Discussions</a></td>
            <td style={tableCellStyle}><a href='/Discussions'>Discussions</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Landing'>/Landing</a></td>
            <td style={tableCellStyle}><a href='/Landing'>Landing</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Landing1'>/Landing1</a></td>
            <td style={tableCellStyle}><a href='/Landing1'>Landing</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Login'>/Login</a></td>
            <td style={tableCellStyle}><a href='/Login'>Login</a></td>
          </tr>
<tr>
            <td style={tableCellStyle}><a href='/Signup'>/Signup</a></td>
            <td style={tableCellStyle}><a href='/Signup'>Signup</a></td>
          </tr>
</tbody>
      </table>
    </div>
  );
}
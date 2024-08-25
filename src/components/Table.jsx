const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
     </tr>
     </thead>
     <tbody>
      {sat.map(satellite => (
        <tr key={satellite.id}>
          <td>{satellite.name}</td>
          <td>{satellite.type}</td>
          <td>{satellite.launchDate}</td>
          <td>{satellite.orbitType}</td>
          <td>{satellite.operational ? 'Yes' : 'No'}</td>
        </tr>
      ))}
      <tr>
       <td>Row Data TBD</td>
      </tr>
     </tbody>
   </table>
  );
};

export default Table;

//expand table to display data for each satellite